import * as React from 'react';
import { default as styled } from 'styled-components';

const StyledFooterText = styled.div`
  position: absolute;
  bottom: 40px;
  left: 40px;
  color: white;
  width: calc(100% - 80px);

  & > span:first-of-type{
    display: inline-block;
    margin-bottom: 10px;
  }

  & a {
    color: white;
  }

`;

const Heart = styled.div`
  background-color: red;
  height: 10px;
  transform: rotate(-45deg);
  width: 10px;
  display: inline-block;
  margin: 0 5px;
  transition: all 0.2s ease-in-out;

  &:hover, &:hover:before, &:hover:after{
    background-color: pink;
    transition: all 0.2s ease-in-out;
  }

  &:before,
  &:after {
    content: "";
    background-color: red;
    border-radius: 50%;
    height: 10px;
    position: absolute;
    width: 10px;
    transition: all 0.2s ease-in-out;
  }

  &:after{
    right: -6px;
  }

  &:before{
    top: -6px;
  }

`;

const Footer: React.FunctionComponent<{}> = () => (
  <StyledFooterText>
    <span>Inspired by Tim Urban post <a href="https://waitbutwhy.com/2014/05/life-weeks.html" target="_blank">'Your Life in Weeks'</a></span>
    <span>Made with <Heart/> by <a href="http://ameersami.com" target="_blank">Ameer Sami</a></span>
  </StyledFooterText>
);

export default Footer;