import React from 'react'
import { PhotoCard } from '../PhotoCard'

export default function ListOfPhotoCards () {
  return (
    <ul>
      {[...Array(300).keys()].map((id) => <PhotoCard key={id} />)}
    </ul>
  )
}
