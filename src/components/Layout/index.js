import React from 'react'
import { Helmet } from 'react-helmet'
import { Div, Title, Subtitle } from './styles'
import { MdPets } from 'react-icons/md'

export const Layout = ({ children, title, subtitle, verDatos = true }) => {
  return (
    <>
      <Helmet>
        {title && <title>{title} | Petgram 🐶</title>}
        {subtitle && <meta name='description' content={subtitle} />}

      </Helmet>
      <Div>
        {verDatos && <span>{title && <Title>{title} <MdPets style={{ marginLeft: '5px' }} /> </Title>}</span>}
        {verDatos && <span>{subtitle && <Subtitle>{subtitle}</Subtitle>}</span>}
        {children}
      </Div>
    </>
  )
}
