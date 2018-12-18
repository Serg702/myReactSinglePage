import React from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

const containerCss = width => css`
  max-width: ${width || '100%'};
  padding: 0 20px;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
`;

class Container extends React.Component {
  render() {
    const { width } = this.props;
    return (
      <div className={containerCss(width)}>
        {React.Children.map(this.props.children, child => child)}
      </div>
    );
  }
}

Container.propTypes = {
  width: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default Container;
