import { ReactNode } from "react";

export interface IStarWarsData {
  count: number;
  next: string;
  results: Array<IPeople>;
}

export interface IPeople {
  name: string;
  height: number;
  mass: number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: Array<string>;
  species: Array<string>;
  vehicles: Array<string>;
  starships: Array<string>;
  created: string;
  edited: string;
  url: string;
}

export interface IInitialState {
  starWarsData: IStarWarsData;
  isLoading: boolean;
  responce: {
    status: number;
    message: string;
  };
}

export interface IPaginationContext {
  num: number;
  changePagination: (num: number) => void;
}

export interface IpaginationProvider {
  children: ReactNode;
}
