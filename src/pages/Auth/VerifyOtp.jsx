import { useState } from 'react';
import CoverImage from '../../assets/img/Cover.png';
import logo from '../../assets/img/logo.png';
import { Button } from '@mui/material';
import styled from 'styled-components';
import OtpInput from 'react-otp-input';
const CreatePasswordContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const CoverImageWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const FormWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #fff;
  margin-top: 20px;
`;

const FormContainer = styled.div`
  width: 404px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 150px;
  margin-bottom: 20px;
`;

const FormTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 10px;
`;

const FormSubtitle = styled.p`
  font-size: 1rem;
  color: #777;
  margin-bottom: 20px;
`;

const StyledButton = styled(Button)`
  width: 404px;
  height: 56px;
`;

const FieldWrapper = styled.div`
  margin-bottom: 20px;
  width: 404px;
  display: flex;
  align-items: center;
  justify-content: center
`;




const VerifyOtp = () => {
    const [otp, setOtp] = useState('');
    return (
        <CreatePasswordContainer>
            <CoverImageWrapper>
                <img src={CoverImage} alt="Cover" />
            </CoverImageWrapper>
            <FormWrapper>
                <FormContainer>
                    <Logo src={logo} alt="Logo" />
                    <FormTitle>Create New Password</FormTitle>
                    <FormSubtitle>Please Enter your Password and Confirm Password</FormSubtitle>

                    <form noValidate autoComplete="off">
                        <FieldWrapper>
                        
                            <OtpInput
                                className="otp"
                                value={otp}
                                onChange={setOtp}
                                numInputs={6}
                                renderSeparator={<span> </span>}
                                renderInput={(props) => <input {...props} />}
                                inputStyle={{
                                    width: '2rem',
                                    height: '2rem',
                                    margin: '0 .5rem',
                                    fontSize: '1rem',
                                    borderRadius: 4,
                                    border: '1px solid rgba(0,0,0,0.3)',
                                }}
                            />
                            

                        </FieldWrapper>


                        <StyledButton variant="contained" color="primary">
                            CONTINUE
                        </StyledButton>
                    </form>


                </FormContainer>
            </FormWrapper>
        </CreatePasswordContainer>
    )
}

export default VerifyOtp

