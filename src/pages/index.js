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

  console.log('allHnLatestStories: ', allHnLatestStories);

  return (
    <MainSection>
      <Title>krmrhmn.</Title>
      <SocialLinks />
      <NewsWidget list={allHnLatestStories?.nodes} />
    </MainSection>
  );
};

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
