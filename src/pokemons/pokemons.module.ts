import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { PokemonsResolver } from './pokemons.resolver';
import { PokemonsService } from './pokemons.service';

@Module({
  providers: [PokemonsService, PokemonsResolver, PrismaService],
})
export class PokemonsModule {}
