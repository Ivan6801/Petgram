import React, { useState, useEffect, useRef } from 'react'
import { CircularProgress, Box } from '@mui/material'
import Category from '../Category'
import { List, Item } from './styles'
import useCategoriesData from '../../hooks/useCategoriesData'

// https://pokeapi.co/api/v2/pokemon // https://petgram-serve-jorge-vicuna.vercel.app/categories

export default function ListOfCategories () {
  const { loading, categories } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)
  const list = useRef(null)

  useEffect(
    function () {
      const onScroll = (e) => {
        const newShowFixed = window.scrollY > 200
        showFixed !== newShowFixed && setShowFixed(newShowFixed)
      }

      document.addEventListener('scroll', onScroll)

      return () => document.removeEventListener('scroll', onScroll)
    },
    [showFixed]
  )

  const renderList = (fixed) => (
    <List ref={list} className={fixed ? 'fixed' : ''}>
      {loading
        ? (
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
          )
        : (
            categories.map((category) => (
              <Item key={category.id}>
                <Category {...category} />
              </Item>
            ))
          )}
    </List>
  )

  if (!loading) {
    <p>Loading..</p>
  }

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
