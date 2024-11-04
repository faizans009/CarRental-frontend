import React, { useState } from 'react'
import Header from '../../components/Header'
import styled from 'styled-components';
import { Box, Typography } from '@mui/material';
import Footer from '../../components/Footer';
import Car from '../../assets/img/View 2.png';

const OrderPage = styled.div`
overflow: hidden; 
margin: 0;
padding: 0;
box-sizing: border-box;
background-color: #F9F9F9;
`;
const OrderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start; 
  padding: 20px;
  /* gap: 20px; */
  margin: 5px auto;
`;

const OrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  padding: 10px;
  gap: 10px;
  margin: 5px auto;
  background-color: #f9f9f9; 
`;

const RentalSummary = styled.div`
  width: 25%;
  padding: 24px;
  gap: 10px;
  margin: 5px auto;
  margin-top: 2rem;
  align-self: flex-start; 
  background-color: white; 
  border-radius: 10px;
`;


const BillingInfo = styled(Box)`
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  width: 95%;
  margin: 20px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled(Typography)`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 16px;
  color: #1A202C;
  `;
const InfoRow = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  p{
    color: #90A3BF;
    font-size: 14px;
    font-weight: 500;
}
`;
const StyledTextField = styled.input`
  width: 100%;
  padding: 20px 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  color: #333;
  outline: none;
  
  &:focus {
    border-color: #007bff;
}
&[type="time"] {
width: 49%; 
}
`;

const FlexRow = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  
  @media (max-width: 600px) {
      flex-direction: column;
    }`;

const RentalInfo = styled(Box)`
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  width: 95%;
  margin: 20px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  `;

const RadioSection = styled.div`
  margin-top: 10px;
  border-radius: 8px;
  `;

const RadioHeading = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  font-weight: 500;
  color: #333;
  `;

const FakeRadioButton = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid #3563E9;
  display: inline-block;
  margin-right: 8px;
  position: relative;
  
  &::before {
    content: '';
    width: 8px;
    height: 8px;
    background-color: #3563E9;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
`;
const Confirmation = styled(Box)`
 background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 95%;
  margin: 20px auto;
`;

const CheckboxContainer = styled.div`
  background-color: #F6F7F9;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #333;
`;

const StyledCheckbox = styled.input`
  margin-right: 10px;
  transform: scale(1.3);
`;

const RentButton = styled.button`
  background-color: ${props => (props.disabled ? '#ddd' : '#3563E9')};
  color: ${props => (props.disabled ? '#999' : 'white')};
  width: 140px;
  height: 56px;
  border: none;
  border-radius: 8px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;

  &:hover {
    background-color: ${props => (props.disabled ? '#ddd' : '#1d4cb7')};
  }
`;
const CarInfoRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const CarImage = styled.img`
  width: 132px;
  height: 108px;
  object-fit: cover;
  margin-right: 15px;
  border-radius: 10px;
`;

const CarName = styled.span`
  font-size: 32px;
  font-weight: 700;
  color: #333;
`;
const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const PriceLabel = styled.span`
  font-size: 16px;
  color: #333;
`;

const PriceValue = styled.span`
  font-size: 16px;
  color: #333;
  font-weight: 500;
`;

const TotalPriceLabel = styled(PriceLabel)`
  font-size: 20px;
  font-weight: bold;
`;

const TotalPriceValue = styled(PriceValue)`
  font-size: 32px;
  font-weight: bold;
`;


const Order = () => {
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);

    const handleCheckbox1Change = (e) => setIsChecked1(e.target.checked);
    const handleCheckbox2Change = (e) => setIsChecked2(e.target.checked);
    const isButtonDisabled = !(isChecked1 && isChecked2);
    return (
        <OrderPage>
            <Header />
            <OrderContainer>
                <OrderSummary>
                    <BillingInfo>
                        <Title variant="h5" component="h2">
                            Billing Info
                        </Title>
                        <InfoRow>
                            <p>Please enter your billing info</p>
                            <p>Step 1 of 3</p>
                        </InfoRow>
                        <form>
                            <FlexRow>
                                <StyledTextField placeholder="Name" type="text" />
                                <StyledTextField placeholder="Phone Number" type="text" />
                            </FlexRow>

                            <FlexRow>
                                <StyledTextField placeholder="Address" type="text" />
                                <StyledTextField placeholder="Town/City" type="text" />
                            </FlexRow>
                        </form>
                    </BillingInfo>
                    <RentalInfo>
                        <Title variant="h5" component="h2">
                            Rental Info
                        </Title>

                        <InfoRow>
                            <p>Please select rental date</p>
                            <p>Step 2 of 3</p>
                        </InfoRow>

                        <form>

                            <RadioSection>
                                <RadioHeading>
                                    <FakeRadioButton />
                                    Pick-Up
                                </RadioHeading>
                                <FlexRow>
                                    <StyledTextField placeholder="Location" type="text" />
                                    <StyledTextField placeholder="Date" type="date" />
                                </FlexRow>
                                <FlexRow>
                                    <StyledTextField placeholder="Time" type="time" />
                                </FlexRow>
                            </RadioSection>

                            <RadioSection>
                                <RadioHeading>
                                    <FakeRadioButton />
                                    Drop-Off
                                </RadioHeading>
                                <FlexRow>
                                    <StyledTextField placeholder="Location" type="text" />
                                    <StyledTextField placeholder="Date" type="date" />
                                </FlexRow>
                                <FlexRow>
                                    <StyledTextField placeholder="Time" type="time" />
                                </FlexRow>
                            </RadioSection>
                        </form>
                    </RentalInfo>
                    <Confirmation>
                        <Title variant="h5" component="h2">
                            Confirmation
                        </Title>
                        <InfoRow>
                            <p>We are getting to the end. Just a few clicks and your rental is ready!</p>
                            <p>Step 3 of 3</p>
                        </InfoRow>

                        <CheckboxContainer>
                            <StyledCheckbox
                                type="checkbox"
                                checked={isChecked1}
                                onChange={handleCheckbox1Change}
                            />
                            I agree with sending marketing and newsletter emails. No spam, promised!
                        </CheckboxContainer>

                        <CheckboxContainer>
                            <StyledCheckbox
                                type="checkbox"
                                checked={isChecked2}
                                onChange={handleCheckbox2Change}
                            />
                            I agree with our terms and conditions and privacy policy.
                        </CheckboxContainer>

                        <RentButton disabled={isButtonDisabled}>Rent Now</RentButton>
                    </Confirmation>


                </OrderSummary>
                <RentalSummary>
                    <Title variant="h5" component="h2">
                        Rental Summary
                    </Title>
                    <InfoRow>
                        <p>Prices may change depending on the length of the rental and the price of your rental car.</p>
                    </InfoRow>
                    <CarInfoRow>
                        <CarImage src={Car} alt="Car" />
                        <CarName>Nissan GT - R</CarName>
                    </CarInfoRow>
                    <SummaryRow>
                        <PriceLabel>Price</PriceLabel>
                        <PriceValue>$200</PriceValue>
                    </SummaryRow>

                    <SummaryRow>
                        <PriceLabel>Days</PriceLabel>
                        <PriceValue>3</PriceValue>
                    </SummaryRow>

                    <SummaryRow>
                        <TotalPriceLabel>Total Price</TotalPriceLabel>
                        <TotalPriceValue>$600</TotalPriceValue>
                    </SummaryRow>
                </RentalSummary>

            </OrderContainer>
            <Footer />
        </OrderPage>
    )
}

export default Order
