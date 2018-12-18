import React from 'react';
import { css } from 'emotion';
import Section from '../Section';
import Form from '../Form';
import Container from '../Container';
import Copyright from '../Copyright';

const container = css`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const paragraph = css`
  color: #887204;
  word-spacing: 1px;
  font-weight: bold;
  font-size: 14px;
  padding-bottom: 12px;
`;

const text = css`
  color: #6e7279;
  line-height: 1.5;
`;

const box = css`
  max-width: 300px;
  @media only screen and (max-width: 1024px) {
    padding: 0 5px;
  }
`;

const list = css`
  color: #6e7279;
  list-style: none;
  padding: 0;

  li > a {
    text-decoration: none;
    color: #6e7279;
  }
`;

const boxAlign = css`
  display: flex;
  justify-content: center;
  padding-top: 66px;
  @media only screen and (max-width: 768px) {
    padding-bottom: 15px;
  }
`;

class Footer extends React.Component {
  render() {
    return (
      <>
        <Section
          backgroundColor={'#2b2f35'}
          minHeight={'298px'}
          padding={'0 0'}
        >
          <div className={boxAlign}>
            <Container width={'1160px'}>
              <div className={container}>
                <div className={box}>
                  <h2 className={paragraph}>ABOUT FAPOR</h2>
                  <div>
                    <p className={text}>
                      We are a fairly small, flexible design studio that designs
                      for print and web. We work flexibly with clients to fulfil
                      their design needs. Whether you need to create a brand
                      from scratch, including marketing materials and a
                      beautiful.
                    </p>
                  </div>
                </div>
                <div className={box}>
                  <h2 className={paragraph}>CONTACT INFO</h2>
                  <div>
                    <ul className={list}>
                      <li>PO Box 17122 Nollins Street </li>
                      <li>5034 Los Angelos</li>
                    </ul>
                    <ul className={list}>
                      <li>
                        <a href="tel:support@fapor.com">Phone: 1800555.0658</a>
                      </li>
                      <li>
                        <a href="mailto:support@fapor.com">
                          Email: support@fapor.com
                        </a>
                      </li>
                      <li>
                        <a href="https://fapor.com">Web: fapor.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={box}>
                  <Form />
                </div>
              </div>
            </Container>
          </div>
        </Section>

        <Copyright />
      </>
    );
  }
}

export default Footer;
