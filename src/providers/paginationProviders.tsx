import { useState } from "react";
import { IpaginationProvider } from "../types/templates";
import { paginationContext } from "../context/paginationContext";

export const PaginationProvider = ({
  children,
  ...props
}: IpaginationProvider) => {
  const [num, setNum] = useState<number>(1);
  const changePagination = (num: number) => {
    setNum(num);
  };
  return (
    <paginationContext.Provider value={{ num, changePagination }} {...props}>
      {children}
    </paginationContext.Provider>
  );
};
