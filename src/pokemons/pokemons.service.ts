import { Inject, Injectable } from '@nestjs/common';
import {
  FilterOptions,
  PaginationOptions,
  SortOptions,
} from 'src/graphql';
import { PrismaService } from 'src/prisma.service';
import { CreatePokemonInput, GetAllPokemonsResponse, Pokemon } from './pokemons.type';


@Injectable()
export class PokemonsService {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) { }

  async getOne(id: string): Promise<Pokemon | null> {
    return await this.prismaService.pokemon.findFirst({
      where: { id: Number(id) }
    });
  }

  async getAll(
    paginationOptions?: PaginationOptions,
    sortOptions?: SortOptions,
    filterOptions?: FilterOptions,
  ): Promise<GetAllPokemonsResponse | null> {
    const args = { skip: 0, take: 10 };
    const hasFilterOptions = filterOptions && Object.keys(filterOptions).length;

    if (paginationOptions) {
      args.take = [10, 20, 50].includes(paginationOptions.limit)
        ? paginationOptions.limit
        : 10;

      if (!isNaN(paginationOptions.offset)) {
        args.skip = paginationOptions.offset;
      }
    }

    if (sortOptions) {
      args['orderBy'] = {
        [sortOptions.fieldId]: sortOptions.sort,
      };
    }

    if (hasFilterOptions) {
      args['where'] = PokemonsService.createFilter(filterOptions);
    }

    const pokemons = await this.prismaService.pokemon.findMany(args);

    return {
      count: hasFilterOptions
        ? pokemons.length
        : await this.prismaService.pokemon.count(),
      pokemons,
    };
  }

  async createOne(command: CreatePokemonInput): Promise<Pokemon> {
    return this.prismaService.pokemon.create({
      data: {
        ...command,
        is_custom: true,
      },
    });
  }

  async deleteOne(id: string): Promise<Pokemon | null> {
    const pokemon = await this.prismaService.pokemon.findFirst({
      where: {
        id: Number(id),
        is_custom: true,
      }
    });

    if (!pokemon) {
      return null;
    }

    return await this.prismaService.pokemon.delete({
      where: {
        id: Number(id),
      },
    });
  }

  private static createFilter(filterOptions: FilterOptions) {
    const filterJSON = {};
    for (const key in filterOptions) {
      switch (key) {
        case 'name':
          filterJSON[key] = {
            contains: filterOptions[key],
          };
          break;
        case 'height':
        case 'weight':
          filterJSON[key] = filterOptions[key];
          break;
      }
    }
    return filterJSON;
  }
}
