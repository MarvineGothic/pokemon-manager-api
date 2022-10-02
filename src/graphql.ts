
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum SortDirection {
    asc = "asc",
    desc = "desc"
}

export enum SortField {
    name = "name",
    height = "height",
    weight = "weight"
}

export interface PaginationOptions {
    offset?: Nullable<number>;
    limit: number;
}

export interface SortOptions {
    fieldId: SortField;
    sort: SortDirection;
}

export interface FilterOptions {
    name?: Nullable<string>;
    height?: Nullable<RangeFilter>;
    weight?: Nullable<RangeFilter>;
}

export interface RangeFilter {
    gt?: Nullable<number>;
    lt?: Nullable<number>;
    gte?: Nullable<number>;
    lte?: Nullable<number>;
    eq?: Nullable<number>;
}

export interface CreateCustomPokemon {
    name: string;
    height: number;
    weight: number;
    image: string;
}

export interface IMutation {
    loginUser(username: string, password: string): Nullable<LoggedUserOutput> | Promise<Nullable<LoggedUserOutput>>;
    deletePokemon(id: number): Nullable<Pokemon> | Promise<Nullable<Pokemon>>;
    createCustom(pokemonFields?: Nullable<CreateCustomPokemon>): Nullable<Pokemon> | Promise<Nullable<Pokemon>>;
}

export interface LoggedUserOutput {
    access_token?: Nullable<string>;
}

export interface IQuery {
    pokemons(paginationOptions?: Nullable<PaginationOptions>, sortOptions?: Nullable<SortOptions>, filterOptions?: Nullable<FilterOptions>): Nullable<PokemonsResponse> | Promise<Nullable<PokemonsResponse>>;
    pokemon(id: string): Nullable<Pokemon> | Promise<Nullable<Pokemon>>;
    whoAmI(): Nullable<User> | Promise<Nullable<User>>;
}

export interface Pokemon {
    id: string;
    name: string;
    height: number;
    weight: number;
    image: string;
    is_custom: boolean;
}

export interface PokemonsResponse {
    count: number;
    pokemons?: Nullable<Nullable<Pokemon>[]>;
}

export interface User {
    userId: string;
    username: string;
    password?: Nullable<string>;
}

type Nullable<T> = T | null;
