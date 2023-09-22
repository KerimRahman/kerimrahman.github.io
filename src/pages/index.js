import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import SocialLinks from '../components/SocialLinks';
import NewsWidget from '../components/News';

const IndexPage = () => {
  const { allHnLatestStories } = useStaticQuery(
    graphql`
        query MyQuery {
            allHnLatestStories {
                nodes {
                    title
                    url
                    id
                    time
                    domain
                }
            }
        }
    `
  );

  return (
    <Main>
      <Section>
        <Title>krmrhmn.</Title>
        <SocialLinks />
      </Section>
      <NewsWidget list={allHnLatestStories?.nodes} />
    </Main>
  );
};

const Main = styled.main`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 3rem;

  @media only screen and (max-width: 600px) {
    font-size: 2rem;
  }
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5rem;
  height: 100vh;
  scroll-snap-align: center;

  @media only screen and (max-width: 600px) {
    gap: 2rem;
  }
`;

export default IndexPage;

export const Head = () => <title>Kerim Rahman (Front End Dev)</title>;
