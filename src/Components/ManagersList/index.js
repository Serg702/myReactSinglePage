import React from 'react';
import PropTypes from 'prop-types';
import SocialLinks from '../SocialLinks';
import Button from '../Button';
import Container from '../Container';
import { css } from 'emotion';

const detailsBox = css`
  display: flex;
  justify-content: space-between;
  margin: 25px 17px 0;

  @media only screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    text-align: center;

    & > div {
      padding-bottom: 10px;
    }
  }
`;

const managementPanelInfo = () => css`
  display: flex;
  justify-content: space-between;
  margin: 0 -50px;

  @media only screen and (max-width: 768px) {
    display: block;
  }

  @media only screen and (max-width: 1024px) {
    margin: 0 -25px;
  }
`;

const managerName = css`
  font-family: Raleway;
  font-weight: 500;
  font-size: 16px;
  margin: 0;
`;

const managerTitle = css`
  font-family: Open Sans;
  font-weight: 400;
  font-size: 14px;
  color: #edbb00;
  margin: 0;
`;

const centerBoxCss = css`
  display: flex;
  justify-content: center;
`;

const element = css`
  padding: 0 50px;
  max-width: 313px;
  
  img {
    width: 100%;
    height: auto;
  }

  @media only screen and (max-width: 1024px) {
    padding: 0 25px;
  }

  @media only screen and (max-width: 768px) {
    padding:0 25px 50px 25px;
    margin: 0 auto;
  }

  
}
`;

const ManagersList = props => {
  const { managers } = props;
  return (
    <div className={centerBoxCss}>
      <Container width={'1170px'}>
        <div className={managementPanelInfo()}>
          {managers.length ? (
            managers.map(manager => {
              return (
                <div key={manager.name} className={element}>
                  <div>
                    <img src={manager.image} alt={manager.name} />
                  </div>

                  <div className={detailsBox}>
                    <div>
                      <p className={managerName}>{manager.name}</p>
                      <p className={managerTitle}>{manager.title}</p>
                    </div>
                    <div>
                      <SocialLinks offset={'5px'} color={'#fff'} />
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div>No managers</div>
          )}
        </div>
        <div>
          <Button />
        </div>
      </Container>
    </div>
  );
};

ManagersList.propTypes = {
  managers: PropTypes.array
};

export default ManagersList;
