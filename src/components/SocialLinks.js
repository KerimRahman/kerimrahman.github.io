import * as React from 'react';
import styled from 'styled-components';
import GitHubIcon from '../images/github.svg';
import GitLabIcon from '../images/gitlab.svg';
import LinkedInIcon from '../images/linkedin.svg';

const SocialLinks = () => (
  <LinksContainer>
    {
      SOCIAL_LINKS.map((link) => (
        <LinkItem key={link.name}>
          <Link $shadowColor={link.shadowColor} href={link.url} target="_blank" rel="norefferer noopener">
            <img src={link.img} alt={`${link.name} Icon`} />
          </Link>
          <LinkTitle>{link.name}</LinkTitle>
        </LinkItem>
      ))
    }
  </LinksContainer>
);

const LinksContainer = styled.ul`
  display: flex;
  justify-content: center;
  gap: 3rem;
  list-style: none;

  @media only screen and (max-width: 600px) {
    gap: 1rem;
  }
`;

const LinkItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
`;

const Link = styled.a`
  display: flex;
  width: 8rem;
  height: 8rem;
  padding: 0.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  flex-shrink: 0;
  border-radius: 2rem;
  border: 2px solid #2A3744;
  background: #121E28;
  overflow: hidden;

  @media only screen and (max-width: 600px) {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 1.5rem;
  }
  
  img {
    filter: ${props => `drop-shadow(0px 0px 2rem ${props?.$shadowColor || '#2A3744'})`};
    transform: scale(0.95);
    transition: ease-in-out all 0.3s;

    @media only screen and (min-width: 768px) {
      filter: blur(0.25rem);
    }
  }

  &:hover {
    border-color: #2e3f4f;
    background: #121E28EA;
    
    img {
      transform: scale(1);
      filter: ${props => `drop-shadow(0px 0px 2rem ${props?.$shadowColor || '#2A3744'})`};
    }
  }

  &:active {
    border-color: ${props => `${props?.$shadowColor || '#2A3744'}`};
    background: #121E28DD;
  }
`;

const LinkTitle = styled.strong`
  font-size: 1rem;
`;

const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    img: GitHubIcon,
    url: 'https://github.com/KerimRahman',
    shadowColor: '#00bcd4',
  },
  {
    name: 'GitLab',
    img: GitLabIcon,
    url: 'https://gitlab.com/krahman',
    shadowColor: '#ff7043',
  },
  {
    name: 'LinkedIn',
    img: LinkedInIcon,
    url: 'https://www.linkedin.com/in/kerim-rahman/',
    shadowColor: '#0288d1',
  },
];

export default SocialLinks;
