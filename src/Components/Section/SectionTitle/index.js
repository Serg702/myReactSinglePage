import React from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

const topBoxCss = (color, margin) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${margin || ''};

  &:after {
    content: '';
    background-color: ${color};
    width: 80px;
    height: 2px;
  }

  @media only screen and (max-width: 1024px) {
    margin: 45px 0 35px 0;
  }
`;

const textCss = css`
  font-family: Raleway;
  font-weight: 500;
  font-size: 23px;
  color: #000;
`;

class MidSectionTitle extends React.Component {
  render() {
    const { underlineColor, title, margin } = this.props;
    return (
      <div className={topBoxCss(underlineColor, margin)}>
        <p className={textCss}>{title}</p>
      </div>
    );
  }
}

MidSectionTitle.propTypes = {
  backgroundColor: PropTypes.string,
  title: PropTypes.string.isRequired,
  margin: PropTypes.string
};

export default MidSectionTitle;
