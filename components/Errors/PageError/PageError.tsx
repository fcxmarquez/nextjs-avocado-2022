import React from 'react'
import { PageErrorContainer } from './pageError.styles'

export const PageError = ({ error }: { error: string }) => {
  return (
    <PageErrorContainer>
      <h1>Ups... {error} </h1>
    </PageErrorContainer>
  )
}
