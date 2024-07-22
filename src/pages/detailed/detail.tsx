import React from "react";
import { useParams } from "react-router";
import { useCastomSelector } from "../../hooks/store";
import { starWarsDataSelector } from "../../store/selectors";
import s from "./details.module.scss";
import { Link } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const { starWarsData } = useCastomSelector(starWarsDataSelector);
  const el = starWarsData.results.filter((el) => el.name === id);

  return (
    <div className={s.detail}>
      <div className={s.detail__items}>
        <div className={s.title}>Имя: {el[0].name}</div>
        <div className={s.title}>Вес: {el[0].mass}</div>
        <div className={s.title}>Рост: {el[0].height}</div>
        <div className={s.title}>Год рождения: {el[0].birth_year}</div>
        <div className={s.title}>Цвет кожи: {el[0].skin_color}</div>
        <div className={s.title}>Цвет глаз: {el[0].eye_color}</div>
        <div className={s.title}>Пол: {el[0].gender}</div>
        <div className={s.title}>Цвет Волос: {el[0].hair_color}</div>
        <div className={s.title}>Создан: {el[0].created}</div>
        <div className={s.title}>Отредактированный: {el[0].edited}</div>
      </div>
      <Link to={"/"} className={s.close}>
        X
      </Link>
    </div>
  );
}
