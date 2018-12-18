import React from 'react';
import { css } from 'emotion';

const button = css`
  background-color: #887204;
  font-size: 14px;
  width: 100%;
  height: 38px;
  border: none;
  color: #fff;
  letter-spacing: 1px;

  label: button;
`;

const input = css`
  background-color: #2b2f35;
  border: 1px solid #6e7279;
  box-sizing: border-box;
  color: #6e7279;
  font-size: 14px;
  width: 100%;
  height: 38px;
  margin: 5px 0 10px 0;
  padding-left: 12px;
  word-spacing: 2px;
  border-radius: 0;
`;

const paragraphStyle = css`
  color: #887204;
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 16px;
`;

class Form extends React.Component {
  render() {
    return (
      <>
        <h2 className={paragraphStyle}>SUBSCRIBE TO OUR NEWSLETTER</h2>
        <input
          className={input}
          type="text"
          placeholder="Enter your email address"
        />
        <button className={button} type="button">
          SUBSCRIBE NOW
        </button>
      </>
    );
  }
}

export default Form;
