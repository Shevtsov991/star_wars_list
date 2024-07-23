import React, { useEffect } from "react";
import { useCastomDispatch, useCastomSelector } from "../../hooks/store";
import { fetchStarWars } from "../../store/thunks/fetchStarWars";
import { starWarsDataSelector } from "../../store/selectors";
import Card from "./Card";
import s from "./card.module.scss";
import Pagination from "./Pagination";
import { PaginationProvider } from "../../providers/paginationProviders";
import { UseCastomPagination } from "../../hooks/usePagination";
import { Link } from "react-router-dom";

export default function Home() {
  const paginationNum = UseCastomPagination();

  const { starWarsData } = useCastomSelector(starWarsDataSelector);

  let start: number = 0;
  let end: number = 50;
  switch (paginationNum.num) {
    case 1:
      start = 0;
      end = 50;
      break;
    case 2:
      start = 51;
      end = 83;
      break;

    default:
      console.log("Что-то не так с пагинацией!");

      break;
  }
  let count = Math.ceil(starWarsData.results.length / 50);

  return (
    <div className={s.home}>
      <div className={s.card__wrapper}>
        {starWarsData.results.slice(start, end).map((el) => {
          return (
            <Link to={`/detail/${el.name}`} key={el.name}>
              <Card el={el} />
            </Link>
          );
        })}
      </div>
      <Pagination num={count} />
    </div>
  );
}
