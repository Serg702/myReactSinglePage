import React from 'react';
import logo from './image/logo.png';
import { css } from 'emotion';

const container = css`
  margin: 10px 0;

  @media only screen and (max-width: 767px) {
    position: absolute;
    left: 20px;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

class NavTitle extends React.Component {
  render() {
    return (
      <div className={container}>
        <img src={logo} alt="logo" width="152" height="23" />
      </div>
    );
  }
}

export default NavTitle;
