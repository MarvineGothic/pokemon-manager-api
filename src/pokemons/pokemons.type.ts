import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Pokemon {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => Int)
  height: number;

  @Field(() => Int)
  weight: number;

  @Field(() => String)
  image: string;

  @Field(() => Boolean)
  is_custom: boolean;
}

export type CreatePokemonInput = Omit<Pokemon, 'id' | 'is_custom'>

@ObjectType()
export class GetAllPokemonsResponse {
  @Field(() => Int)
  count: number;

  @Field(() => [Pokemon])
  pokemons: Pokemon[];
}