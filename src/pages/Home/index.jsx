import React from 'react'
import { Layout } from '../../components/Layout'
import ListOfCategories from '../../components/ListOfCategories'
import { ListOfPhotoCards } from '../../containers/ListOfPhotoCards'

export default function Home ({ id }) {
  return (
    <Layout title='Home' verDatos={false} subtitle='Con Petgram puedes encontrar fotos de animales domésticos muy fácilmente, jvicuna'>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Layout>
  )
}
