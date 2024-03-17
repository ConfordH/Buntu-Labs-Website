import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { Link } from "../../styles/GlobalComponents";
import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Chat</LinkTitle>
          <LinkItem href="https://t.me/lordarcadius">Telegram</LinkItem>
          <LinkItem href="https://t.me/lordarcadius">WhatsApp</LinkItem>
          <LinkItem href="https://t.me/lordarcadius">Bot</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Socials</LinkTitle>
          <LinkItem href="mailto:hello@buntulabs.com">
            hello@buntulabs.com
          </LinkItem>
          <LinkItem href="mailto:hello@buntulabs.com">
            hello@buntulabs.com
          </LinkItem>
          <LinkItem href="mailto:hello@buntulabs.com">
            hello@buntulabs.com
          </LinkItem>
          <LinkItem href="mailto:hello@buntulabs.com">
            hello@buntulabs.com
          </LinkItem>
          <LinkItem href="mailto:hello@buntulabs.com">
            hello@buntulabs.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Copyright &copy; {year}{" "}
            <Link href="https://www.buntulabs.com"> Buntu Labs</Link>. All
            rights reserved.
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/lordarcadius">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/lordarcadius/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/lordarcadius">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.twitter.com/lordarcadius">
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.facebook.com/lordarcadius">
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
