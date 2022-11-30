import React from 'react'
import { Anchor, Image } from './styles'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg'

export default function Category ({
  path = '#',
  cover = DEFAULT_IMAGE,
  emoji = '🐶'
}) {
  return (
    <Anchor href={path}>
      <Image src={cover} alt={emoji} />
      {emoji}
    </Anchor>

  )
}
