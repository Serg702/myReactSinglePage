import React from 'react';
import { css } from 'emotion';

const navLinksLinkItemCss = isActive => css`
  color: #fff;
  text-decoration: none;
  font-family: OpenSans;
  font-size: 14px;
  padding: 40px 0 44px 0;
  display: flex;
  flex-direction: column;
  position: relative;
  text-transform: uppercase;

  &:after {
    content: '';
    background-color: ${isActive ? '#ffbb1d' : 'transparent'};
    height: 3px;
    position: absolute;
    bottom: 0;
    left: -10px;
    right: -10px;

    @media only screen and (max-width: 767px) {
      left: 40%;
      right: 40%;
    }
  }
`;

const container = css`
  margin-left: 61px;

  @media only screen and (max-width: 767px) {
    margin: 0;
    text-align: center;
  }
`;

const ulBoxCss = innerWidth => css`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: ${innerWidth < 768 ? 'block' : 'inline-flex'};

  @media only screen and (max-width: 767px) {
    margin: 50px 0 0;

    animation: dropdownAnimate 1s forwards;

    @keyframes dropdownAnimate {
      0% {
        opacity: 0;
        transform: translateX(200px);
      }

      100% {
        opacity: 1;
        transform: translateX(0px);
      }
    }
  }
`;

class NavLinks extends React.Component {
  render() {
    const { innerWidth } = this.props;
    return (
      <ul className={ulBoxCss(innerWidth)}>
        <li className={container}>
          <a className={navLinksLinkItemCss()} href="#home">
            HOME
          </a>
        </li>
        <li className={container}>
          <a className={navLinksLinkItemCss(true)} href="#about">
            ABOUT
          </a>
        </li>
        <li className={container}>
          <a className={navLinksLinkItemCss()} href="#service">
            SERVICE
          </a>
        </li>
        <li className={container}>
          <a className={navLinksLinkItemCss()} href="#portfolio">
            PORTFOLIO
          </a>
        </li>
        <li className={container}>
          <a className={navLinksLinkItemCss()} href="#contact">
            CONTACT
          </a>
        </li>
      </ul>
    );
  }
}

export default NavLinks;
