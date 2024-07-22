import { StarWarsService } from "../../services/starWarsSercice";
import { starWarsSlice } from "../slices/starWarsSlice";
import { AppDispatch } from "../store";

export const fetchStarWars =
  (payload: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(starWarsSlice.actions.fetchStarWars());
      const res = await StarWarsService.getStarWars(payload);
      if (res.status === 200) {
        dispatch(starWarsSlice.actions.fetchStarWarsSucces(res));
      } else {
        dispatch(starWarsSlice.actions.fetchStarWarsError(res));
      }
    } catch (error) {
      console.log(error);
    }
  };
