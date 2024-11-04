import  { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FaHeart from '../assets/icons/fav.svg';
import RedHeart from '../assets/icons/filledLike.svg';
import Car from '../assets/img/car.png';
import PetrolPumpIcon from '../assets/icons/gas-station.png'; 
import SteeringIcon from '../assets/icons/steering.svg'; 
import PeopleIcon from '../assets/icons/user.png';

const CarContainer = styled.div`
  margin: 10px 74px;
`;

const ContainerTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  margin: 0 25px;
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: #90A3BF;
`;

const ViewMoreLink = styled.a`
  font-size: 16px;
  color: #3498db;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(315px, 1fr));
  grid-gap: 20px;
  padding: 20px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 10px;
  background-color: #fff;
`;

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;

const CarDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const CarName = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const CarType = styled.p`
  font-size: 14px;
  color: #888;
  margin: 5px 0 0 0;
`;

const FavoriteButton = styled.button`
  align-items: baseline;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: baseline; 
  
  &:hover {
    color: #e74c3c; 
  }

  img {
    width: 24px;
    height: 24px;
  }
`;

const CarImage = styled.img`
  width: 232px;
  height: 108px;
  border-radius: 5px;
  margin: 10px 0;

`;

const CarSpecsContainer = styled.div`
  display: flex;
  justify-content: space-between; 
  margin-top: 10px; 
`;

const SpecItem = styled.div`
  display: flex;
  align-items: center;
  margin: 7px;
`;

const SpecIcon = styled.img`
  width: 24px; 
  height: 24px; 
  margin-right: 5px; 
`;

const SpecText = styled.span`
  font-size: 14px; 
  font-weight: 500;
  color: #555;
`;


const PriceRentContainer = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center; 
  margin-top: 20px; 
`;
const Price = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #333;
`;

const RentNowButton = styled.button`
width: 116px;
height: 44px;
  background-color: #3498db; 
  color: #fff; 
  border: none;
  border-radius: 5px;
  padding: 10px 15px; 
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
  margin-left: 20px; 

  &:hover {
    background-color: #2980b9; 
  }
`;


const CarList = ({ title }) => {
  const [favorite, setFavorite] = useState(false);

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <CarContainer>
      <ContainerTop>
        <Title>{title}</Title>
        <ViewMoreLink href="#">View More</ViewMoreLink>
      </ContainerTop>
      <Main>
        <Card>
          <CardTop>
            <CarDetails>
              <CarName>Swift</CarName>
              <CarType>Sports</CarType>
            </CarDetails>
            <FavoriteButton onClick={toggleFavorite}>
              <img src={favorite ? RedHeart : FaHeart} alt="Favorite" />
            </FavoriteButton>
          </CardTop>
          <CarImage src={Car} alt='' />
          <CarSpecsContainer>
            <SpecItem>
              <SpecIcon src={PetrolPumpIcon} alt="Petrol Pump" />
              <SpecText>Petrol</SpecText>
            </SpecItem>
            <SpecItem>
              <SpecIcon src={SteeringIcon} alt="Steering" />
              <SpecText>Steering</SpecText>
            </SpecItem>
            <SpecItem>
              <SpecIcon src={PeopleIcon} alt="People" />
              <SpecText>5 People</SpecText>
            </SpecItem>
          </CarSpecsContainer>
          <PriceRentContainer>
            <Price>$150/day</Price> 
            <RentNowButton>Rent Now</RentNowButton>
          </PriceRentContainer>
        </Card>
        <Card>
          <CardTop>
            <CarDetails>
              <CarName>Swift</CarName>
              <CarType>Sports</CarType>
            </CarDetails>
            <FavoriteButton onClick={toggleFavorite}>
              <img src={favorite ? RedHeart : FaHeart} alt="Favorite" />
            </FavoriteButton>
          </CardTop>
          <CarImage src={Car} alt='' />
          <CarSpecsContainer>
            <SpecItem>
              <SpecIcon src={PetrolPumpIcon} alt="Petrol Pump" />
              <SpecText>Petrol</SpecText>
            </SpecItem>
            <SpecItem>
              <SpecIcon src={SteeringIcon} alt="Steering" />
              <SpecText>Steering</SpecText>
            </SpecItem>
            <SpecItem>
              <SpecIcon src={PeopleIcon} alt="People" />
              <SpecText>5 People</SpecText>
            </SpecItem>
          </CarSpecsContainer>
          <PriceRentContainer>
            <Price>$150/day</Price> 
            <RentNowButton>Rent Now</RentNowButton>
          </PriceRentContainer>
        </Card>
        <Card>
          <CardTop>
            <CarDetails>
              <CarName>Swift</CarName>
              <CarType>Sports</CarType>
            </CarDetails>
            <FavoriteButton onClick={toggleFavorite}>
              <img src={favorite ? RedHeart : FaHeart} alt="Favorite" />
            </FavoriteButton>
          </CardTop>
          <CarImage src={Car} alt='' />
          <CarSpecsContainer>
            <SpecItem>
              <SpecIcon src={PetrolPumpIcon} alt="Petrol Pump" />
              <SpecText>Petrol</SpecText>
            </SpecItem>
            <SpecItem>
              <SpecIcon src={SteeringIcon} alt="Steering" />
              <SpecText>Steering</SpecText>
            </SpecItem>
            <SpecItem>
              <SpecIcon src={PeopleIcon} alt="People" />
              <SpecText>5 People</SpecText>
            </SpecItem>
          </CarSpecsContainer>
          <PriceRentContainer>
            <Price>$150/day</Price> 
            <RentNowButton>Rent Now</RentNowButton>
          </PriceRentContainer>
        </Card>
        <Card>
          <CardTop>
            <CarDetails>
              <CarName>Swift</CarName>
              <CarType>Sports</CarType>
            </CarDetails>
            <FavoriteButton onClick={toggleFavorite}>
              <img src={favorite ? RedHeart : FaHeart} alt="Favorite" />
            </FavoriteButton>
          </CardTop>
          <CarImage src={Car} alt='' />
          <CarSpecsContainer>
            <SpecItem>
              <SpecIcon src={PetrolPumpIcon} alt="Petrol Pump" />
              <SpecText>Petrol</SpecText>
            </SpecItem>
            <SpecItem>
              <SpecIcon src={SteeringIcon} alt="Steering" />
              <SpecText>Steering</SpecText>
            </SpecItem>
            <SpecItem>
              <SpecIcon src={PeopleIcon} alt="People" />
              <SpecText>5 People</SpecText>
            </SpecItem>
          </CarSpecsContainer>
          <PriceRentContainer>
            <Price>$150/day</Price> 
            <RentNowButton>Rent Now</RentNowButton>
          </PriceRentContainer>
        </Card>
        <Card>
          <CardTop>
            <CarDetails>
              <CarName>Swift</CarName>
              <CarType>Sports</CarType>
            </CarDetails>
            <FavoriteButton onClick={toggleFavorite}>
              <img src={favorite ? RedHeart : FaHeart} alt="Favorite" />
            </FavoriteButton>
          </CardTop>
          <CarImage src={Car} alt='' />
          <CarSpecsContainer>
            <SpecItem>
              <SpecIcon src={PetrolPumpIcon} alt="Petrol Pump" />
              <SpecText>Petrol</SpecText>
            </SpecItem>
            <SpecItem>
              <SpecIcon src={SteeringIcon} alt="Steering" />
              <SpecText>Steering</SpecText>
            </SpecItem>
            <SpecItem>
              <SpecIcon src={PeopleIcon} alt="People" />
              <SpecText>5 People</SpecText>
            </SpecItem>
          </CarSpecsContainer>
          <PriceRentContainer>
            <Price>$150/day</Price> 
            <RentNowButton>Rent Now</RentNowButton>
          </PriceRentContainer>
        </Card>
      </Main>
    </CarContainer>
  );
};

CarList.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CarList;
