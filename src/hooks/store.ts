import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { TypedUseSelectorHook } from "react-redux";

export const useCastomDispatch = () => useDispatch<AppDispatch>();
export const useCastomSelector: TypedUseSelectorHook<RootState> = useSelector;
