import React from 'react';
import Slider from 'nuka-carousel';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import Container from '../Container';
import LeftArrow from './images/left-arrow.jpg';
import RightArrow from './images/right-arrow.jpg';
import { testimonials } from '../../mocks/testimonials';

const imageStyle = css`
  border-radius: 50%;
  width: 95px;
  height: 95px;
  overflow: hidden;
  margin: 0 auto;
`;

const containerTop = css`
  text-align: center;
`;

const managerName = css`
  font-family: OpenSans-SemiBold;
  font-size: 16px;
  color: #edbb00;
  margin: 0;
`;

const textStyle = css`
  font-family: OpenSans-Light;
  letter-spacing: 0.7px;
  line-height: 22px;
  max-width: 900px;
  font-size: 14px;
  color: #000;
  margin: 32px auto 37px auto;
`;

const managerTitle = css`
  font-family: 'OpenSans-Light';
  padding: 10px 0;
  letter-spacing: 1px;
  font-size: 14px;
  color: #000;
  margin: 0;
`;

const slider = css`
  padding: 62px 0;
  display: flex;
  justify-content: center;
  .slider-control-centerright,
  .slider-control-centerleft {
    top: 27% !important;
  }
  .slider-list {
    width: 100% !important;
  }
`;

class MySlider extends React.Component {
  renderBottomCenterControls = () => false;
  renderCenterLeftControls = ({ previousSlide }) => (
    <img onClick={previousSlide} src={LeftArrow} alt="left arrow" />
  );
  renderCenterRightControls = ({ nextSlide }) => (
    <img onClick={nextSlide} src={RightArrow} alt="right arrow" />
  );

  render() {
    return (
      <div className={slider}>
        <Container width={'1162px'}>
          <Slider
            renderBottomCenterControls={this.renderBottomCenterControls}
            renderCenterLeftControls={this.renderCenterLeftControls}
            renderCenterRightControls={this.renderCenterRightControls}
            autoGenerateStyleTag={false}
          >
            {testimonials.length &&
              testimonials.map(testimonial => {
                return (
                  <div key={testimonial.name} className={containerTop}>
                    <div className={imageStyle}>
                      <img src={testimonial.image} alt={testimonial.name} />
                    </div>
                    <p className={textStyle}>{testimonial.text}</p>
                    <p className={managerName}>{testimonial.name}</p>
                    <p className={managerTitle}>{testimonial.title}</p>
                  </div>
                );
              })}
          </Slider>
        </Container>
      </div>
    );
  }
}

MySlider.propTypes = {
  testimonials: PropTypes.array.isRequired
};

export default MySlider;
