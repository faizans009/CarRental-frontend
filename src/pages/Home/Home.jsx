import styled from 'styled-components';
import Header from '../../components/Header';
import BannerImg from "../../assets/img/banner lambo 1.png"
import BannerImg2 from "../../assets/img/Group 24.png"
import flexibility from "../../assets/img/flexibility.png"
import trust from "../../assets/img/trusted.png"
import travel from "../../assets/img/travel.png"
import driver from "../../assets/img/driver.png"
import CarList from '../../components/CarList';
import Footer from '../../components/Footer';

const HomeContainer = styled.div`
overflow: hidden; 
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #F9F9F9;
`;
const MainBanner = styled.div`
  height: 500px;
  padding: 0 5rem;
  padding-bottom: 1.5rem;
  display: flex;
  align-items: end;
  background-color: white;
  `;
const Banner1 = styled.div`
display: flex;
flex-direction: column;
align-items: end;  
position: relative;
margin-left: -10rem;
`;
const BannerData = styled.div`
padding: 0;
h1{
  font-size: 32px;
  font-weight: 700;
}
p{
  font-size: 26px;
  font-weight: 400;
  width: 70%;
  margin-bottom: 0.5rem;
}
button{
  font-size: 20px;
  width: 210px;
  height: 59px;
  border-radius:15px;
  background-color: #3563E9;
  border-color: #3563E9;
  color: white;
  
}
`;
const Banner2 = styled.div`
display: flex;
align-items: center;
`;
const BannerData2 = styled.div`
padding: 0;
margin-left: 5rem;
h1{
  font-size: 32px;
  font-weight: 700;
}
p{
  font-size: 20px;
  font-weight: 400;
  width: 60%;
  margin-bottom: 0.5rem;
}
`;
const TravelExperienceSection = styled.div`
  height: 500px;
  margin:85px 80px;
  border-radius: 10px;
  padding: 4rem;
  padding-bottom: 1.5rem;
  display: flex;
  flex-direction: column;

  background-color: white;
  h1{
    font-size: 32px;
    font-weight: 600;
    text-align: center;
  }
  `;
const ExperienceDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 5rem;
  margin-top: 5rem;
  `;
const ExperienceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h3{
    font-size: 30px;
    font-weight: 600;
    color: #3563E9;
    text-align: center;
  }
  p{
    color: #00000099;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    width: 350px;
  }
  `;
const DriverSection = styled.div`
  background-image: url(${driver});
  margin:40px 80px;
  height: 500px; 
  background-size: cover; 
  background-position: center; 
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
h1{
  font-size: 40px;
  font-weight: 600;
  color: white;
}
p{
  font-size: 30px;
  font-weight: 400;
  color: white;
  
}
`;
const SearchBox = styled.div`
  display: flex;
  align-items: center;
  /* gap: 10px; */
  background-color: white;
  padding: 5px;
  width: max-content;
  border-radius: 10px;

  input {
    padding: 10px;
    font-size: 30px;
    font-weight: 500;
    width: 700px;
    border: none;
  }

  button {
    padding: 10px 20px;
    width: 170px;
    height: 81px;
    font-size: 30px;
    background-color: #21408E;
    border-radius: 10px;
    color: #fff;
    border: none;
    cursor: pointer;
  }
`;
const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <MainBanner>
        <img src={BannerImg} alt="" />
        <Banner1>
          <BannerData>
            <h1>safer ,faster and comfortable</h1>
            <p>Get in touch with our luxury cars</p>
            <button>Rent Now</button>
          </BannerData>
        </Banner1>
      </MainBanner>
      <Banner2>
        <img src={BannerImg2} alt="" />
        <BannerData2>
          <h1>Rent a Car</h1>
          <p>We pride ourselves in always going the extra mile for our customers.</p>
        </BannerData2>
      </Banner2>
      <CarList title="Recent Cars" />
      <TravelExperienceSection>
        <h1>Fell the best experience with our luxury car</h1>
        <ExperienceDetail>
          <ExperienceCard>
            <img src={flexibility} alt="" />
            <div>
              <h3>Book with flexibility</h3>
              <p>Easily find car and book with no change fees.</p>
            </div>
          </ExperienceCard>
          <ExperienceCard>
            <img src={trust} alt="" />
            <div>
              <h3>Trusted and free</h3>
              <p>We’re completely free to use – no hidden charges or fees..</p>
            </div>
          </ExperienceCard>
          <ExperienceCard>
            <img src={travel} alt="" />
            <div>
              <h3>We know travel</h3>
              <p>With 10 years of experience, we're ready to help find your perfect car</p>
            </div>
          </ExperienceCard>
        </ExperienceDetail>

      </TravelExperienceSection>
      <DriverSection>
        <div>
          <h1>become a driver</h1>
          <h1>Your time. Your goals. You're the <br />boss.</h1>
        </div>
        <search>
          <p>suscribe and joins us</p>
          <SearchBox>
            <input
              type="email"
              placeholder="Email"

            />
            <button>
              Next
            </button>
          </SearchBox>
        </search>

      </DriverSection>
      <Footer />



    </HomeContainer>
  )
}

export default Home
