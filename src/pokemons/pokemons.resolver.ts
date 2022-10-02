import { Args, Mutation, Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { Public } from 'src/common/decorators/publicRoutes';
import { FilterOptions, PaginationOptions, SortOptions } from 'src/graphql';
import { PokemonsService } from './pokemons.service';
import { Pokemon, CreatePokemonInput, GetAllPokemonsResponse } from './pokemons.type';

@Resolver(Pokemon)
export class PokemonsResolver {
  constructor(private readonly pokemonsService: PokemonsService) { }

  @Public()
  @Query()
  public async pokemons(
    @Args('paginationOptions') pagination?: PaginationOptions,
    @Args('sortOptions') sort?: SortOptions,
    @Args('filterOptions') filterOptions?: FilterOptions,
  ): Promise<GetAllPokemonsResponse | null> {
    return await this.pokemonsService.getAll(pagination, sort, filterOptions);
  }

  @Public()
  @Query()
  public async pokemon(@Args('id') id: string): Promise<Pokemon | null> {
    return await this.pokemonsService.getOne(id);
  }

  @Mutation()
  public async createCustom(@Args('pokemonFields') pokemonFields: CreatePokemonInput): Promise<Pokemon> {
    return this.pokemonsService.createOne(pokemonFields);
  }

  @Mutation()
  public async deletePokemon(@Args('id') id: string): Promise<Pokemon | null> {
    return await this.pokemonsService.deleteOne(id);
  }
}
