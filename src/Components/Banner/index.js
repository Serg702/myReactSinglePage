import React from 'react';
import titleBackground from './images/title-background.jpg';
import Container from '../Container';
import { css } from 'emotion';

const bannerCss = css`
  background-image: url(${titleBackground});
  background-size: cover;
  margin: 0;
  min-height: 283px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const bannerTextCss = css`
  font-family: Raleway;
  font-size: 40px;
  margin: 0;
  padding: 0;
  color: #fff;
`;
const bannerBoxCss = css`
  padding-bottom: 78px;
`;

class Banner extends React.Component {
  render() {
    return (
      <div className={bannerCss}>
        <Container width={'1390px'}>
          <div className={bannerBoxCss}>
            <h2 className={bannerTextCss}>MORE ABOUT US</h2>
          </div>
        </Container>
      </div>
    );
  }
}

export default Banner;
