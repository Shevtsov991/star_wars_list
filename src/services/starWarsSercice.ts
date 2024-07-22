import { AxiosResponse } from "axios";
import api from "../axios";
import { IStarWarsData } from "../types/templates";

export class StarWarsService {
  static getStarWars(page: number): Promise<AxiosResponse<IStarWarsData>> {
    return api.get<IStarWarsData>(`?page=${page}`);
  }
}
