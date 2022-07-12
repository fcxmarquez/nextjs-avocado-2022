import Link from 'next/link'
import React from 'react'
import { Container, Grid, Segment } from 'semantic-ui-react'

export const Footer = () => {
  return (
    <Segment vertical style={{ position: 'absolute', bottom: '0', width: "100%", maxHeight: "120px" }}>
      <Container text>
        <Grid columns={'three'} divided>
          <Grid.Row>
            <Grid.Column>
              <h4>About us</h4>
              <Link href={'#'}>
                <a>Know more</a>
              </Link>
            </Grid.Column>
            <Grid.Column>
              <h4>Services</h4>
              <Link href="#">
                <a>All products</a>
              </Link>
            </Grid.Column>
            <Grid.Column>
              <h4>Made for</h4>
              <p>Made for you and for us. Personal project.</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  )
}
