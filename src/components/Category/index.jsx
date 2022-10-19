import React from 'react'
import { Link, Image } from './styles'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg'

export default function Category ({
  path = '#',
  cover = DEFAULT_IMAGE,
  emoji = '🐶'
}) {
  return (
    <Link to={path}>
      <Image src={cover} alt={emoji} />
      {emoji}
    </Link>

  )
}
