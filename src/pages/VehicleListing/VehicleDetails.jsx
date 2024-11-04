import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MainImg from '../../assets/img/Main.jpg';
import thumbnail1 from '../../assets/img/view1.png';
import thumbnail2 from '../../assets/img/View 2.png';
import thumbnail3 from '../../assets/img/View 3.png';
import thumbnail4 from '../../assets/img/View 4.png';
import thumbnail5 from '../../assets/img/View 5.png';
import profile from '../../assets/img/Profill.png';
import {useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Rating } from '@mui/material';
import CarList from '../../components/CarList';
import { Button } from '@mui/material';
import ExpandMoreIcon  from '@mui/icons-material/KeyboardArrowDown';


const VehicleDetail = styled.div`
  overflow: hidden; 
  align-items: center;
  background-color: #F9F9F9;
`;

const VehicleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 92%;
  padding: 20px;
  gap: 80px;
  margin: 5px auto;
`;

const ImageSection = styled.div`
  flex: 0 0 60%;  
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const MainImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: space-between;
`;

const Thumbnail = styled.img`
  width: calc(20% - 8px); 
  height: 124px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
`;

const DetailsSection = styled.div`
  flex: 0 0 35%;  
  display: flex;
  flex-direction: column;
  gap: 50px;
  background-color: white;
  border-radius: 10px;
  padding: 30px;
`;

const CarName = styled.h2`
  font-size: 32px;
  font-weight: 700;
  `;

const Description = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: #333333;
`;

const Specs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px 20px; /* Adjusts spacing between items */
  font-size: 14px;
  color: #333;
`;

const SpecItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  span:first-child {
    color: #90A3BF;
    font-size: 20px;
    font-weight: 400;
  }

  span:last-child {
    color: #333333;
    font-size: 20px;
    font-weight: 600;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 0;
`;

const Price = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #1A202C;
  span{
    font-size: 16px;
  font-weight: 700;
  color: #90A3BF;
  }
`;

const RentButton = styled.button`
  padding: 20px;
  background-color: #3563E9;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
`;

const ReviewContainer = styled.div`
  width: 90%;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  margin-bottom: 20px;
  margin: 20px auto;
  gap: 10px;
  `;
  const Reviews = styled.div``;
const ReviewContainerTop = styled.div`
  display:flex;
  align-items: center;
  gap: 10px;
  `;

const Title = styled.h2`
  font-size: 24px;
  color: #333;
  `;

const ReviewCount = styled.span`
  font-size: 18px;
  color: #666;
  background-color: #3563E9;
  color: white;
  padding: 0px 5px;
  border-radius: 4px;

`;

const ReviewInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 15px 0;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
`;

const ProfilePic = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;
const ReviewerInfo = styled.div`
display: flex;
flex-direction: column;
`;


const ReviewerName = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #333;
  `;
const ReviewerProfession = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #90A3BF;
  
  `;

const ReviewDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const ReviewDate = styled.span`
  font-size: 14px;
  color: #999;
`;



const ReviewBody = styled.p`
  margin-left: 60px;
  font-size: 14px;
  font-weight: 400;
  color: #596780;
  line-height: 28px;
`;
const SeeMoreButtonContainer = styled.div`
  display: flex;
  justify-content: center; 
  width: 100%; 
  margin-top: 10px; 
`;

const SeeMoreButton = styled(Button)`
  color: #90A3BF;
  font-size: 16px;
  text-transform: none;
  padding: 0;
`;




const VehicleDetails = () => {
  const { vehicleId } = useParams();
  const [value, setValue] = useState(2);
  const navigate = useNavigate();
  const handleRentNowClick = () => {
    navigate(`/order`);
  };


  return (
    
    <VehicleDetail>
      <Header />
      <VehicleContainer>
        <ImageSection>
          <MainImage src={MainImg} alt="Vehicle" />
          <ThumbnailContainer>
            <Thumbnail src={thumbnail1} alt="Thumbnail 1" />
            <Thumbnail src={thumbnail2} alt="Thumbnail 2" />
            <Thumbnail src={thumbnail3} alt="Thumbnail 3" />
            <Thumbnail src={thumbnail4} alt="Thumbnail 4" />
            <Thumbnail src={thumbnail5} alt="Thumbnail 5" />
          </ThumbnailContainer>
        </ImageSection>

        <DetailsSection>
          <CarName>Car Model Name</CarName>
          <Description>
            NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".
          </Description>
          <Specs>
            <SpecItem>
              <span>Type Car</span>
              <span>Sport</span>
            </SpecItem>
            <SpecItem>
              <span>Capacity</span>
              <span>2 Person</span>
            </SpecItem>
            <SpecItem>
              <span>Steering</span>
              <span>Manual</span>
            </SpecItem>
            <SpecItem>
              <span>Fuel Type</span>
              <span>Gasoline</span>
            </SpecItem>
          </Specs>
          <PriceContainer>
            <Price>$80.00/ <span>days</span></Price>
            <RentButton  onClick={() => handleRentNowClick()}>Rent Now</RentButton>
          </PriceContainer>
        </DetailsSection>
      </VehicleContainer>
      <ReviewContainer>
        <ReviewContainerTop>

          <Title>Reviews</Title>
          <ReviewCount>34</ReviewCount>
        </ReviewContainerTop>

        <Reviews>
        <ReviewInfo>
          <ProfileSection>
            <ProfilePic src={profile} alt="Profile" />
            <ReviewerInfo>

              <ReviewerName>John Doe</ReviewerName>
              <ReviewerProfession>CEO at Bukalapak</ReviewerProfession>
            </ReviewerInfo>
          </ProfileSection>

          <ReviewDetails>
            <ReviewDate>October 15, 2024</ReviewDate>
            <Rating name="read-only" value={value} readOnly />
          </ReviewDetails>
        </ReviewInfo>

        <ReviewBody>
          We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.
        </ReviewBody>
        </Reviews>
        <Reviews>
        <ReviewInfo>
          <ProfileSection>
            <ProfilePic src={profile} alt="Profile" />
            <ReviewerInfo>

              <ReviewerName>John Doe</ReviewerName>
              <ReviewerProfession>CEO at Bukalapak</ReviewerProfession>
            </ReviewerInfo>
          </ProfileSection>

          <ReviewDetails>
            <ReviewDate>October 15, 2024</ReviewDate>
            <Rating name="read-only" value={value} readOnly />
          </ReviewDetails>
        </ReviewInfo>

        <ReviewBody>
          We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.
        </ReviewBody>
        </Reviews>
        <SeeMoreButtonContainer>
  <SeeMoreButton endIcon={<ExpandMoreIcon />}>
    See More
  </SeeMoreButton>
</SeeMoreButtonContainer>

      </ReviewContainer>
      <CarList title="Recent Cars" />
      <CarList title="Top Rated Cars" />
      <Footer />
    </VehicleDetail>
     
  );
};

export default VehicleDetails;
