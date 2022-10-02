import { PrismaClient } from ".prisma/client";
import axios from 'axios';
import axiosRetry from 'axios-retry';

axiosRetry(axios, {
  retries: 10,
  retryDelay: (retryCount) => {
    console.log(`retry attempt: ${retryCount}`);
    return retryCount * 2000;
  },
});

const prisma = new PrismaClient();
const pokemonsEndpoint = 'https://pokeapi.co/api/v2/pokemon/';
let endpoint = `${pokemonsEndpoint}?offset=0&limit=100`;

async function main() {
  console.log(`Start seeding ...`)

  const promises = [];

  while (endpoint) {
    console.log(endpoint)
    const pokemonsResponse = await axios.get(endpoint);
    const pokemons = pokemonsResponse.data;

    endpoint = pokemons.next;

    for (const result of pokemons.results) {
      promises.push((async () => {
        const pokemonFeaturesResponse = await axios.get(result.url);
        const pokemonFeatures = pokemonFeaturesResponse.data;

        return {
          name: result.name,
          height: pokemonFeatures.height,
          weight: pokemonFeatures.weight,
          image: pokemonFeatures.sprites.front_default ?? '',
          is_custom: false,
        };
      })());
    }
  }

  const pokemonsData = await Promise.all(promises);

  console.log(`Creating batch of pokemons. Size ${pokemonsData.length}.`);

  await prisma.pokemon.createMany({
    data: pokemonsData,
  });

  console.log('Seeding finished.')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })