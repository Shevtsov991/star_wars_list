import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { indigo } from "@mui/material/colors";
import { UseCastomPagination } from "../../hooks/usePagination";

let count: number;
interface props {
  num: number;
}

export default function pagination({ num }: props) {
  const paginationNum = UseCastomPagination();

  const changePaginationNum = (pageNum: number) => {
    paginationNum.changePagination(pageNum);
  };
  return (
    <div className="footer">
      <Stack spacing={2} color={indigo[50]}>
        <Pagination
          count={num}
          variant="text"
          shape="rounded"
          color="secondary"
          onChange={(event, pageNum) => changePaginationNum(pageNum)}
        />
      </Stack>
    </div>
  );
}
