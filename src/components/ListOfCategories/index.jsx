import React, { useState, useEffect, useRef } from 'react'
import Category from '../Category'
import { List, Item } from './styles'

// https://pokeapi.co/api/v2/pokemon // https://petgram-serve-jorge-vicuna.vercel.app/categories

export default function ListOfCategories () {
  const [categories, setCategories] = useState([])
  const list = useRef(null)

  useEffect(() => {
    fetch('https://petgram-serve-jorge-vicuna.vercel.app/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data))
  }, [])

  const renderCategories = () =>
    categories.map((category) => (
      <Item key={category.id}>
        <Category {...category} />
      </Item>
    ))

  const renderList = () => <List ref={list}>{renderCategories()}</List>

  return (
    <>
      {renderList() && renderList()}
    </>
  )
}
