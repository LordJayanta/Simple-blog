import React from 'react'
import { Carousel, Container, PostCard } from '../../component';

const Home = () => {
  return (
    <section>
      <Carousel/>
      <Container>
        <PostCard />
      </Container>
    </section>
  )
}

export default Home;