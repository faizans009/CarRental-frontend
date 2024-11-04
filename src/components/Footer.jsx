import styled from 'styled-components';
import logo from '../assets/img/logo.png';

const FooterContainer = styled.div`
padding: 5px 72px;
background-color: #081630;
width: 100%;

`;
const FooterMain = styled.div`
margin: 66px 0;
display: flex;
justify-content: space-between;
`;

const FooterLeft = styled.div`
font-size: 16px;
font-weight: 500;
color: white;
line-height: 24px;
p{
    width: 400px;
    margin-top: 24px;
    line-height: 24px;
    letter-spacing: 5px;
}
`;
const FooterRight = styled.div`
display: flex;
justify-content: space-between;
gap: 50px;
`;
const FooterLinks = styled.div`
h4{
    font-size: 20px;
    font-weight: 700;
    color: white;
    margin-bottom: 24px;
}
ul{
    list-style: none;
    padding: 0;
    margin: 0;
}
li{
    margin-bottom: 12px;
    a{
        color: white;
        text-decoration: none;
        font-size: 16px;
        font-weight: 500;
    }
    
}
`;
const CopyRight = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: white;
  margin:50px 0;
  `;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterMain>
                <FooterLeft>
                    <img src={logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur. Sit mi dolor nullam faucibus molestie. Quis mauris at eget risus mattis ornare. Nec lorem in et sapien tristique neque vivamus. Egestas tempus facilisis in habitant vitae.</p>
                </FooterLeft>
                <FooterRight>
                    <FooterLinks>
                        <h4>About</h4>
                        <ul>
                            <li><a href="#">How it works</a></li>
                            <li><a href="#">TermsandConditions</a></li>
                            <li><a href="#">PrivacyPolicy</a></li>
                            <li><a href="#">AboutUs</a></li>
                        </ul>
                    </FooterLinks>
                    <FooterLinks>
                        <h4>Important Links</h4>
                        <ul>
                            <li><a href="#">VehicleListing</a></li>
                            <li><a href="#">ContactUs</a></li>
                        </ul>
                    </FooterLinks>
                    <FooterLinks>
                        <h4>Socials</h4>
                        <ul>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Facebook</a></li>
                        </ul>
                    </FooterLinks>

                </FooterRight>

            </FooterMain>
            <hr />
            <CopyRight>©2023 CharterCar. All rights reserved</CopyRight>


        </FooterContainer>
    )
}

export default Footer
