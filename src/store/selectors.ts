import { RootState } from "./store";

export const starWarsDataSelector = (state: RootState) =>
  state.starWarsSliceReducer;
