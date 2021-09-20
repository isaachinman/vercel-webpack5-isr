import React from 'react'

import fs from 'fs'
import path from 'path'

const Homepage = ({ translations }) => (
  <div>{translations.hello}</div>
)

export const getStaticProps = async () => {
  const locale = 'en'
  const translationFileExistsInFs = fs.existsSync(
    path.join(process.cwd(), `locales/${locale}.json`)
  )

  let translations = undefined
  
  console.log('webpack 5 set to `true`')

  console.log('Translation file exists in fs: ', translationFileExistsInFs)

  if (translationFileExistsInFs) {
    translations = (await import(`../locales/${locale}.json`)).default
  }

  return {
    revalidate: 10,
    props: {
      translations
    }
  }
}

export default Homepage
