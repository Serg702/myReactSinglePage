import React from 'react';
import { css } from 'emotion';

const sectionButtonContainer = css`
  text-align: center;
`;

const sectionButton = css`
  font-family: OpenSans;
  font-weight: 400;
  font-size: 16px;
  background-color: #fff;
  width: 160px;
  height: 50px;
  border: 1px solid #000;
  border-radius: 25px;
  margin: 45px 0 0;

  @media only screen and (max-width: 1200px) {
    margin: 45px 0;
  }
`;

class Button extends React.Component {
  render() {
    return (
      <div className={sectionButtonContainer}>
        <button className={sectionButton} type="button">
          SHOW ALL
        </button>
      </div>
    );
  }
}

export default Button;
