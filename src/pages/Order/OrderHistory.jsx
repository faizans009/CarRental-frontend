import React from 'react'
import Header from '../../components/Header'
import styled from 'styled-components';
import Footer from '../../components/Footer';
import Car from '../../assets/img/car.png';
import PetrolPumpIcon from '../../assets/icons/gas-station.png'; 
import SteeringIcon from '../../assets/icons/steering.svg'; 
import PeopleIcon from '../../assets/icons/user.png';

const HistoryPage = styled.div`
overflow: hidden; 
margin: 0;
padding: 0;
box-sizing: border-box;
background-color: #F9F9F9;
`;
const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 20px;
  margin: 5px auto;
  height: 800px;
  `;
  const HistoryTop = styled.div`
  display: block;
  
  `;
const Title = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
  text-align: center;
  `;

const Description = styled.p`
  font-size: 16px;
  color: #666;
  text-align: center;
`;


const HistoryDetails = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 50px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
`;

const Order = styled.div`
  display: flex;
  width: 45%;
  flex-direction: column;
  gap: 10px;
  background-color: white;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CarInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const CarName = styled.h3`
  font-size: 18px;
  color: #333;
  margin: 0;
`;

const CarType = styled.span`
  font-size: 14px;
  color: #888;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 10px;

  button {
    padding: 8px 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const MiddleSection = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-around;
  padding: 15px 0;
  position: relative;
`;

const CarImage = styled.img`
  width: 169px;
  height: 79px;
  object-fit: cover;
  border-radius: 8px;
`;

const LocationInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 14px;
  color: #666;
  text-align: center;
  margin-right: 50px;
`;


const PickupDropoff = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;
  align-items: flex-start;
`;

const SeparatorLine = styled.div`
  width: 150px;
  background-color: #ccc;
  height: 1px;
  margin: 10px;
  margin-right: 5px;
`;

const DaysInfo = styled.div`
  position: absolute;
  right: -50px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
`;

const Specs = styled.div`
  display: flex;
  gap: 20px;
  font-size: 14px;
  color: #666;
`;

const SpecItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  image{
    width: 14px;
    height: 14px;
  }
`;

const PriceInfo = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

const OrderHistory = () => {
  return (
    <HistoryPage>
        <Header/>
      <HistoryContainer>
        <HistoryTop>

      <Title>History</Title>
      <Description>Here you can see the history of rent cars that you used.</Description>
        </HistoryTop>
        <HistoryDetails>
      <Order>
        <TopSection>
          <CarInfo>
            <CarName>Car Name</CarName>
            <CarType>Sports</CarType>
          </CarInfo>
          <ActionButtons>
            <button style={{ backgroundColor: "#ff6b6b", color: "white" }}>Cancel</button>
            <button style={{ backgroundColor: "#3563e9", color: "white" }}>Return</button>
          </ActionButtons>
        </TopSection>
        <MiddleSection>
          <CarImage src={Car} alt="Car" />
          <LocationInfo>
            <PickupDropoff>
              <div>
                <h4>London Bridge</h4>
                <p>Pickup point</p>
              </div>
              <SeparatorLine />
              <DaysInfo>4 Days</DaysInfo>
              <div>
                <h4>King George</h4>
                <p>Drop Off</p>
              </div>
            </PickupDropoff>
          </LocationInfo>
        </MiddleSection>
        <BottomSection>
          <Specs>
            <SpecItem>
              <img src={PetrolPumpIcon} alt="Tank" />
              <span> 50L</span>
            </SpecItem>
            <SpecItem>
              <img src={SteeringIcon} alt="Steering" />
              <span>Manual</span>
            </SpecItem>
            <SpecItem>
              <img src={PeopleIcon} alt="Capacity" />
              <span>5 People</span>
            </SpecItem>
          </Specs>
          <PriceInfo>$99/day</PriceInfo>
        </BottomSection>
      </Order>
      <Order>
        <TopSection>
          <CarInfo>
            <CarName>Car Name</CarName>
            <CarType>Sports</CarType>
          </CarInfo>
          <ActionButtons>
            <button style={{ backgroundColor: "#ff6b6b", color: "white" }}>Cancel</button>
            <button style={{ backgroundColor: "#3563e9", color: "white" }}>Return</button>
          </ActionButtons>
        </TopSection>
        <MiddleSection>
          <CarImage src={Car} alt="Car" />
          <LocationInfo>
            <PickupDropoff>
              <div>
                <h4>London Bridge</h4>
                <p>Pickup point</p>
              </div>
              <SeparatorLine />
              <DaysInfo>4 Days</DaysInfo>
              <div>
                <h4>King George</h4>
                <p>Drop Off</p>
              </div>
            </PickupDropoff>
          </LocationInfo>
        </MiddleSection>
        <BottomSection>
          <Specs>
            <SpecItem>
              <img src={PetrolPumpIcon} alt="Tank" />
              <span> 50L</span>
            </SpecItem>
            <SpecItem>
              <img src={SteeringIcon} alt="Steering" />
              <span>Manual</span>
            </SpecItem>
            <SpecItem>
              <img src={PeopleIcon} alt="Capacity" />
              <span>5 People</span>
            </SpecItem>
          </Specs>
          <PriceInfo>$99/day</PriceInfo>
        </BottomSection>
      </Order>
    </HistoryDetails>
      </HistoryContainer>
      <Footer/>
    </HistoryPage>
  )
}

export default OrderHistory
