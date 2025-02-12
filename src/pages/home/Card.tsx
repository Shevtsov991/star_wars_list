import React from "react";
import { IPeople } from "../../types/templates";
import s from "./card.module.scss";
interface props {
  el: IPeople;
}
export default function Card({ el }: props) {
  return (
    <div className={s.card} id={el.name}>
      <span className={s.name}>Имя: {el.name}</span>
      <span className={s.height}>Рост: {el.height}</span>
      <span className={s.mass}>Вес: {el.mass}</span>
      <span className={s.hair_color}>Gender: {el.gender}</span>
    </div>
  );
}
