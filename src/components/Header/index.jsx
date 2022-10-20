import React from 'react'
import { Button } from '@mui/material'
import { useTranslation } from 'react-i18next'

export default function Header () {
  const { t, i18n } = useTranslation('global')

  return (
    <div>
      <h1>{t('header.hello-world')}</h1>
      <Button onClick={() => i18n.changeLanguage('es')} variant='contained'>ES</Button>
      <Button onClick={() => i18n.changeLanguage('en')} variant='contained'>EN</Button>
    </div>
  )
}
