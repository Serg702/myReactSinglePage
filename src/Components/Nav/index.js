import React from 'react';
import NavLinks from '../NavLinks';
import NavTitle from '../NavTitle';
import Container from '../Container';
import BurgerMenu from '../BurgerMenu';
import { css } from 'emotion';

const navigationCss = css`
  display: flex;
  justify-content: center;
`;

const top = css`
  background-color: #24282f;
  label: top;

  @media only screen and (max-width: 767px) {
    min-height: 50px;
  }
`;

const navBoxCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const burgerButton = innerWidth => css`
  text-align: center;

  @media only screen and (max-width: 767px) {
    position: absolute;
    right: 5%;
    top: 15px;

    div {
      min-height: 11px;
      border-top: 3px solid #fff;
      border-bottom: 3px solid #fff;
      min-width: 30px;

      &:after {
        content: '';
        background-color: #fff;
        height: 3px;
        position: absolute;
        top: 7px;
        left: 0;
        right: 0;
      }
    }
  }

  display: ${innerWidth < 768 ? 'block' : 'none'};
`;

const burgerMenuToggle = action => css`
  display: ${action ? 'block' : 'none'};
`;

const centerTitle = css`
  display: flex;
  justify-content: center;
`;

const topBoxSmall = css`
  margin: 0 auto;
`;

class Nav extends React.Component {
  state = {
    burgerMenuToggle: false
  };

  toggleBurgerMenu = () => {
    this.setState({ burgerMenuToggle: !this.state.burgerMenuToggle });
  };

  render() {
    const { innerWidth } = this.props;
    return (
      <div className={top}>
        {innerWidth && innerWidth < 768 ? (
          <div className={topBoxSmall}>
            <Container width={'auto'}>
              <div className={burgerButton(innerWidth)}>
                <div onClick={this.toggleBurgerMenu} />
              </div>
              <div className={centerTitle}>
                <NavTitle />
              </div>
              <div className={burgerMenuToggle(this.state.burgerMenuToggle)}>
                <BurgerMenu innerWidth={innerWidth} />
              </div>
            </Container>
          </div>
        ) : (
          <div className={navigationCss}>
            <Container width={'1390px'}>
              <div className={navBoxCss}>
                <NavTitle />
                <NavLinks />
              </div>
            </Container>
          </div>
        )}
      </div>
    );
  }
}

export default Nav;
