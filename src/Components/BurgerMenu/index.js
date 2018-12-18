import React, { Component } from 'react';
import { css } from 'emotion';
import NavLinks from '../NavLinks';

const navigationCss = css`
  background-color: #24282f;
`;

class BurgerMenu extends Component {
  render() {
    const { innerWidth } = this.props;
    return (
      <div className={navigationCss}>
        <div>
          <NavLinks innerWidth={innerWidth} />
        </div>
      </div>
    );
  }
}

export default BurgerMenu;
