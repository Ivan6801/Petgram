/* eslint-disable no-undef */
import React, { useState, useEffect, useRef } from 'react'
import Category from '../Category'
import { List, Item } from './styles'

// https://pokeapi.co/api/v2/pokemon // https://petgram-serve-jorge-vicuna.vercel.app/categories

export default function ListOfCategories () {
  const [categories, setCategories] = useState([])
  const [showFixed, setShowFixed] = useState(false)
  const list = useRef(null)

  console.log(categories)

  useEffect(function () {
    window.fetch('https://petgram-serve-jorge-vicuna.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
      })
  }, [])

  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List ref={list} className={fixed ? 'fixed' : ''}>
      {
        categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
