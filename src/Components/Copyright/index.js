import React, { Component } from 'react';
import SocialLinks from '../SocialLinks';
import Container from '../Container';
import { css } from 'emotion';

const containerTop = css`
  background-color: #24282f;
  padding 14px 0;
  display: flex;
  justify-content: center;
`;

const container = css`
  background-color: #24282f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 40px;

  @media only screen and (max-width: 768px) {
    display: block;
    text-align: center;
    margin: 0;
  }
`;

const text = css`
  font-family: OpenSans;
  color: #6e7279;
  font-size: 12px;
  letter-spacing: 0.6px;
`;

class Copyright extends Component {
  render() {
    return (
      <div className={containerTop}>
        <Container width={'1170px'} marginTop={'auto'}>
          <div className={container}>
            <p className={text}>© 2016 Fapor by Respotheme</p>
            <div>
              <SocialLinks offset={'7px'} color={'#25282f'} />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Copyright;
