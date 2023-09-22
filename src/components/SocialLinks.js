import * as React from 'react';
import styled from 'styled-components';
import GitHubIcon from '../images/github.svg';
import GitLabIcon from '../images/gitlab.svg';
import LinkedInIcon from '../images/linkedin.svg';

const SocialLinks = () => {
  return (
    <LinksContainer>
      {
        SOCIAL_LINKS.map((link) => (
          <Link $shadowColor={link.shadowColor} key={link.name} href={link.url} target="_blank" rel="norefferer noopener">
            <Image $shadowColor={link.shadowColor} src={link.img} alt={`${link.name} Icon`} />
          </Link>
        ))
      }
    </LinksContainer>
  )
}

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
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

  &:hover {
    border-color: #2e3f4f;
    background: #121E28EA;
  }

  &:active {
    border-color: ${props => `${props?.$shadowColor || '#2A3744'}`};
    background: #121E28DD;
  }
`;

const Image = styled.img`
  filter: ${props => `drop-shadow(0px 0px 2rem ${props?.$shadowColor || '#2A3744'})`};
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
