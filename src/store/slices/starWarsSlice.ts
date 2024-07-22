import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { IInitialState, IPeople, IStarWarsData } from "../../types/templates";

const initialState: IInitialState = {
  starWarsData: {
    count: 0,
    next: "",
    results: [],
  },
  isLoading: false,
  responce: {
    status: 0,
    message: "",
  },
};

export const starWarsSlice = createSlice({
  name: "Star_wars",
  initialState,
  reducers: {
    fetchStarWars(state) {
      state.isLoading = true;
    },
    fetchStarWarsSucces(
      state,
      action: PayloadAction<AxiosResponse<IStarWarsData>>
    ) {
      state.starWarsData.results = [
        ...state.starWarsData.results,
        ...action.payload.data.results,
      ];
      state.starWarsData.count = action.payload.data.count;
      state.starWarsData.next = action.payload.data.next;
      state.isLoading = false;
      state.responce = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
    fetchStarWarsError(
      state,
      action: PayloadAction<AxiosResponse<IStarWarsData>>
    ) {
      state.isLoading = false;
      state.responce = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
  },
});

export default starWarsSlice.reducer;
