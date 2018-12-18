import React from 'react';
import SectionTitle from './SectionTitle';
import { css } from 'emotion';
import PropTypes from 'prop-types';

const sectionCss = (color, padding, minHeight) => css`
  padding: ${padding || '50px 0'};
  min-height: ${minHeight || null};
  background-color: ${color};
`;

class Section extends React.Component {
  windowResolution = () => {
    console.log(window.screen.availWidth);
  };

  render() {
    const {
      backgroundColor,
      title,
      underlineColor,
      padding,
      minHeight,
      margin
    } = this.props;
    return (
      <div className={sectionCss(backgroundColor, padding, minHeight)}>
        {title && (
          <SectionTitle
            title={title}
            underlineColor={underlineColor}
            margin={margin}
          />
        )}

        {React.Children.map(this.props.children, child => child)}
      </div>
    );
  }
}

Section.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  title: PropTypes.string,
  underlineColor: PropTypes.string,
  padding: PropTypes.string,
  children: PropTypes.object,
  minHeight: PropTypes.string,
  margin: PropTypes.string
};

export default Section;
