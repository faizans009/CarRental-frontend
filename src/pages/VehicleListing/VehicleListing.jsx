import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import styled from 'styled-components';
import { FormControl, InputLabel, MenuItem, Select, Typography, Button } from '@mui/material';
import Slider from '@mui/material/Slider';
import FaHeart from '../../assets/icons/fav.svg';
import RedHeart from '../../assets/icons/filledLike.svg';
import Car from '../../assets/img/car.png';
import PetrolPumpIcon from '../../assets/icons/gas-station.png'; 
import SteeringIcon from '../../assets/icons/steering.svg'; 
import PeopleIcon from '../../assets/icons/user.png';
import Footer from '../../components/Footer';

const VehicleContainer = styled.div`
  overflow: hidden; 
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #F9F9F9;
  align-items: center;
  min-height: 100vh;
`;

const MainSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem;
`;

const FilterCars = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  padding: 20px;
  border-radius: 8px;
  gap: 20px;
`;

const StyledFormControl = styled(FormControl)`
  &.MuiFormControl-root {
    width: 100%;
    border-radius: 8px;
  }

  .MuiInputLabel-root {
    color: #333;
  }

  .MuiSelect-select {
    background-color: #fff;
    border-radius: 4px;
  }

  .MuiMenuItem-root {
    &:hover {
      background-color: #f0f0f0;
    }
  }
`;

const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem 0;
`;

const StyledSlider = styled(Slider)`
  color: #1976d2;
  height: 8px;
  width: 300px;
  & .MuiSlider-thumb {
    height: 24px;
    width: 24px;
    background-color: white;
    border: 2px solid #1976d2;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
  }
  & .MuiSlider-track, .MuiSlider-rail {
    height: 8px;
    border-radius: 4px;
  }
`;

const TagContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  padding: 6px 20px;
  background-color: white;
  color: black;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;
const ApplyButton = styled(Button)`
  width: 100%;
  height: 59px;
  padding: 12px 0;
  background-color: #1976d2;
  color: white;
  border-radius: 10px;
  font-size: 20px;
  &:hover {
    background-color: #1565c0;
  }
`;
const CarLists = styled.div`
  
  width: 70%;
  padding: 20px;
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

const VehicleListing = () => {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [registrationCity, setRegistrationCity] = useState('');
  const [range, setRange] = useState([2500, 15000]);
  const [condition, setCondition] = useState('New');
  const [fuel, setFuel] = useState('Petrol');
  const [favorite, setFavorite] = useState(false);

  const navigate = useNavigate();

  const handleRentNowClick = (vehicleId) => {
    // Redirect to the vehicle-detail page with the vehicle ID
    navigate(`/vehicle-details/${vehicleId}`);
  };

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  const handleRangeChange = (event, newValue) => {
    setRange(newValue);
  };

  const handleMakeChange = (event) => {
    setMake(event.target.value);
  };

  const handleModelChange = (event) => {
    setModel(event.target.value);
  };

  const handleCityChange = (event) => {
    setRegistrationCity(event.target.value);
  };

  // Handle tag clicks
  const handleConditionClick = (selectedCondition) => {
    setCondition(selectedCondition);
  };

  const handleFuelClick = (selectedFuel) => {
    setFuel(selectedFuel);
  };

  return (
    <VehicleContainer>
      <Header />
      <MainSection>
        <FilterCars>
          <StyledFormControl>
            <InputLabel id="make-select-label">Make</InputLabel>
            <Select
              labelId="make-select-label"
              id="make-select"
              value={make}
              label="Make"
              onChange={handleMakeChange}
            >
              <MenuItem value={10}>Make 1</MenuItem>
              <MenuItem value={20}>Make 2</MenuItem>
              <MenuItem value={30}>Make 3</MenuItem>
            </Select>
          </StyledFormControl>

          {/* Price Range Slider */}
          <Typography variant="subtitle1" gutterBottom>
            Price Range per Day (PKR)
          </Typography>
          <SliderContainer>
            <StyledSlider
              value={range}
              onChange={handleRangeChange}
              valueLabelDisplay="auto"
              getAriaLabel={() => 'Price range'}
              min={1000}
              max={20000}
              disableSwap
            />
          </SliderContainer>

          {/* Model Dropdown */}
          <StyledFormControl>
            <InputLabel id="model-select-label">Model</InputLabel>
            <Select
              labelId="model-select-label"
              id="model-select"
              value={model}
              label="Model"
              onChange={handleModelChange}
            >
              <MenuItem value={10}>Model 1</MenuItem>
              <MenuItem value={20}>Model 2</MenuItem>
              <MenuItem value={30}>Model 3</MenuItem>
            </Select>
          </StyledFormControl>

          {/* Registration City Dropdown */}
          <StyledFormControl>
            <InputLabel id="city-select-label">Registration City</InputLabel>
            <Select
              labelId="city-select-label"
              id="city-select"
              value={registrationCity}
              label="Registration City"
              onChange={handleCityChange}
            >
              <MenuItem value={'karachi'}>Karachi</MenuItem>
              <MenuItem value={'lahore'}>Lahore</MenuItem>
              <MenuItem value={'islamabad'}>Islamabad</MenuItem>
            </Select>
          </StyledFormControl>

          {/* Condition Tag */}
          <Typography variant="subtitle1" gutterBottom>
            Condition
          </Typography>
          <TagContainer>
            <Tag onClick={() => handleConditionClick('New')} style={{ backgroundColor: condition === 'New' ? '#ccc' : 'white' }}>
              New
            </Tag>
            <Tag onClick={() => handleConditionClick('Used')} style={{ backgroundColor: condition === 'Used' ? '#ccc' : 'white' }}>
              Used
            </Tag>
          </TagContainer>

          {/* Fuel Tag */}
          <Typography variant="subtitle1" gutterBottom>
            Fuel
          </Typography>
          <TagContainer>
            {['Petrol', 'Diesel', 'CNG', 'LPG', 'Electric','Hybrid'].map((fuelType) => (
              <Tag
                key={fuelType}
                onClick={() => handleFuelClick(fuelType)}
                style={{ backgroundColor: fuel === fuelType ? '#ccc' : 'white' }}
              >
                {fuelType}
              </Tag>
            ))}
          </TagContainer>
          <ApplyButton variant="contained">
            Apply
          </ApplyButton>
        </FilterCars>
        <CarLists>
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
            {/* <RentNowButton>Rent Now</RentNowButton> */}
            <RentNowButton onClick={() => handleRentNowClick(1)}>  
          Rent Now
        </RentNowButton>
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

        </CarLists>
      </MainSection>
      <Footer/>
    </VehicleContainer>
  );
};

export default VehicleListing;
