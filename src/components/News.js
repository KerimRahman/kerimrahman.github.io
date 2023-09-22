import * as React from 'react';
import { DateTime } from 'luxon';
import styled from 'styled-components';

const NewsWidget = ({ list = [] }) => {
  return (
    <NewsSection>
      <h2>News</h2>
      <NewsSectionInner>
        <News list={list} />
      </NewsSectionInner>
    </NewsSection>
  );
};

const News = ({ list = [] }) => {
  if (!list.length) return <Caption>No news!</Caption>;

  return (
    <Container>
      {
        list.map((item) => (
          <li key={item.id}>
            <Item href={item.url} target="_blank" rel="norefferer noopener">
              <Title>{item.title}</Title>

              <Caption>
                {Boolean(item?.domain) && <span>Source: {item.domain}</span>}
                {Boolean(item?.time) && <span>Time: {getDateTime(item.time)}</span>}
              </Caption>

              <span>
                Read
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.23781 1.52386L10 5.27386L6.23781 9.02386L5.16575 8.01906L7.19584 5.99555H0V4.55218H7.19584L5.16575 2.52867L6.23781 1.52386Z" fill="currentColor" />
                </svg>
              </span>
            </Item>
          </li>
        ))
      }
    </Container>
  )
};

const getDateTime = (seconds) => {
  const datetime  = DateTime.fromSeconds(seconds);

  if (datetime.isValid) return datetime.toLocaleString(DateTime.DATETIME_SHORT);

  return null;
};

const NewsSection = styled.section`
  position: static;
  height: 100vh;
  scroll-snap-align: center;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const NewsSectionInner = styled.div`
  width: 100%;
  padding: 2rem 0;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Container = styled.ul`
  font-family: 'Montserrat', sans-serif;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  gap: 0.5rem;
  
  li {
    flex-shrink: 0;
    max-width: 15rem;
  }
`;

const Item = styled.a`
  display: block;
  height: 100%;
  text-decoration: none;
  font-size: 0.75rem;
  padding: 1rem;
  border-radius: 1rem;
  border: 2px solid #2A3744;
  color: #ffffff;
  background: #121E28;
  backdrop-filter: blur(2px);
  transition: ease-in-out border-color, background 0.3s;
  
  svg {
    transition: ease-in-out transform 0.3s;
    transform: translateX(0);
    margin-left: 0.25rem;
  }
  
  &:hover {
    border-color: #2e3f4f;
    background: #121E28EA;

    svg {
      transform: translateX(0.25rem);
    }
  }
`;

const Title = styled.strong`
  display: block;
  margin-bottom: 0.5rem;
`;

const Caption = styled.p`
  color: #E2E2E2;
  margin: 0.5rem 0;

  span {
    display: block;
    margin: 0.25rem 0;
  }
`;

export default NewsWidget;
