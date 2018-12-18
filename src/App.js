import React, { Component } from 'react';
import Nav from './components/Nav';
import './styles/global';
import Banner from './components/Banner';
import Section from './components/Section';
import Footer from './components/Footer';
import TestimonialsSlider from './components/TestimonialsSlider';
import ManagersList from './components/ManagersList';
import { management } from './mocks/management';
import { testimonials } from './mocks/testimonials';

class App extends Component {
  state = {
    innerWidth: ''
  };

  componentDidMount() {
    this.setState({ innerWidth: window.innerWidth });

    this.checkForResize();
  }

  checkForResize = () => {
    window.addEventListener('resize', () =>
      this.setState({ innerWidth: window.innerWidth })
    );
  };

  render() {
    return (
      <div className="App">
        <Nav innerWidth={this.state.innerWidth} />
        <Banner />
        <Section
          backgroundColor={'#fff'}
          title={'MANAGEMENT'}
          underlineColor={'#f3bb00'}
          padding={'1px 0'}
          minHeight={'725px'}
          margin={'126px auto 35px auto'}
        >
          <ManagersList managers={management} />
        </Section>

        <Section
          backgroundColor={'#f7f7f7'}
          title={'WHAT OUR CLIENTS SAY'}
          underlineColor={'#000'}
          padding={'1px 0 '}
          minHeight={'598px'}
          margin={'90px 0 0'}
        >
          <TestimonialsSlider testimonials={testimonials} />
        </Section>
        <Footer />
      </div>
    );
  }
}

export default App;
