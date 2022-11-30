import React, { useState, useEffect, useRef } from "react";
import Category from "../Category";
import { List, Item } from "./styles";
import useCategoriesData from "../../hooks/useCategoriesData";

// https://pokeapi.co/api/v2/pokemon // https://petgram-serve-jorge-vicuna.vercel.app/categories

export default function ListOfCategories() {
  const { loading, categories } = useCategoriesData();
  const [showFixed, setShowFixed] = useState(false);
  const list = useRef(null);

  useEffect(
    function () {
      const onScroll = (e) => {
        const newShowFixed = window.scrollY > 200;
        showFixed !== newShowFixed && setShowFixed(newShowFixed);
      };

      document.addEventListener("scroll", onScroll);

      return () => document.removeEventListener("scroll", onScroll);
    },
    [showFixed]
  );

  const renderList = (fixed) => (
    <List ref={list} className={fixed ? "fixed" : ""}>
      {loading ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        categories.map((category) => (
          <Item key={category.id}>
            <Category {...category} path={`/pet/${category.id}`} />
          </Item>
        ))
      )}
    </List>
  );

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
}
