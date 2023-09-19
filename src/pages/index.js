import * as React from 'react';
import styled from 'styled-components';
import SocialLinks from '../components/SocialLinks';

const IndexPage = () => (
  <MainSection>
    <Title>krmrhmn.</Title>
    <SocialLinks />
  </MainSection>
);

const Title = styled.h1`
  font-size: 3rem;
`;

const MainSection = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5rem;
  height: 100vh;
`;

export default IndexPage;

export const Head = () => <title>Kerim Rahman (Front End Dev)</title>;
