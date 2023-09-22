import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NotFoundPage = () => {
  return (
    <Section>
      <h1>Page not found!</h1>
      <p>
        Sorry 😔,
        <br />
        we couldn’t find what you were looking for.
      </p>
      <StyledLink to="/">Go home</StyledLink>
    </Section>
  )
}

const Section = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
`;

const StyledLink = styled(Link)`
  color: #965EF4;
  text-underline-offset: 0.2rem;
  
  &:hover, &:active {
    color: #8247E5;
    text-underline-offset: 0.1rem;
  }
`;

export default NotFoundPage;

export const Head = () => <title>Kerim Rahman (Front End Dev) | Not found</title>;
