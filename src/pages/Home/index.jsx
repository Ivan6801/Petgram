import React from 'react'
import { Layout } from '../../components/Layout'
import ListOfCategories from '../../components/ListOfCategories'

export default function Home () {
  return (
    <Layout title='Home' verDatos={false} subtitle='Con Petgram puedes encontrar fotos de animales domésticos muy fácilmente, jvicuna'>
      <ListOfCategories />
    </Layout>
  )
}
