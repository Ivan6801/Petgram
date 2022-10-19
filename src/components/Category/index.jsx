import React from 'react'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg'

export default function Category ({ cover = DEFAULT_IMAGE }) {
  return (
    <div>
      Category
      {/* <img src={cover} alt='logo' /> */}
    </div>
  )
}
