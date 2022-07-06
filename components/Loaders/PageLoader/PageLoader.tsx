import React from 'react'
import { Container, Dimmer, Loader, Segment } from 'semantic-ui-react'

export const PageLoader = () => {
  return (
    <Container>
      <Dimmer active inverted>
        <Loader />
      </Dimmer>
    </Container>
  )
}
