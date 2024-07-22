import { createContext } from "react";
import { IPaginationContext } from "../types/templates";
export const paginationContext = createContext<IPaginationContext>({
  num: 1,
  changePagination: () => {},
});
