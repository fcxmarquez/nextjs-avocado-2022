import React from 'react'
import { Dimmer, Segment, Loader, Container, Card } from 'semantic-ui-react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const CardSkeleton = () => {
  const mock = Array(5).fill('item')

  return (
    <Card.Group centered>
      {mock.map((product) => (
        <Card
          style={{
            minHeight: '382px',
          }}
        >
          <Dimmer active inverted>
            <Loader />
          </Dimmer>
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Skeleton
              circle
              style={{
                height: '200px',
                aspectRatio: '1',
                display: 'flex',
                alignSelf: 'center',
              }}
            />
          </div>
          <Card.Content style={{ color: 'black' }}>
            <Skeleton count={3} />
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  )
}
