import * as React from 'react';
import { Container, Heading, Hero } from 'react-bulma-components';

function ErrorBanner({message}: { message: string }) {
  return (
    <Hero color="danger">
      <Hero.Body>
        <Container>
          <Heading>
            {message}
          </Heading>
          <Heading subtitle={true} size={3}>
            Please come back later, it'll be fixed shortly.
          </Heading>
        </Container>
      </Hero.Body>
    </Hero>
  );
}

export default ErrorBanner;