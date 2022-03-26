import React from 'react'
import { Button, Container, Input } from 'semantic-ui-react'

export const InputCart = () => {
  const handleChange = (e: any) => {
    console.log(e.target.value)
  }

  return (
    <Container>
      <Input type="number" onChange={handleChange} />
      <Button
        color="green"
        size="large"
        style={{ height: '100%', borderRadius: '0', margin: '0' }}
      >
        Add to cart
      </Button>
    </Container>
  )
}
