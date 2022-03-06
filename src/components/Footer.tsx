import styled from "styled-components";
import { ReactComponent as DiscordIcon } from "../assets/icons/discord.svg";
import { ReactComponent as TwitterIcon } from "../assets/icons/twitter.svg";
import { colors } from "../theme/colors";

export const Footer = () => {
  return (
    <Background>
      <Container>
        <Logo src={"/images/logo.png"} />
        <Title>BANISHED BEARS</Title>
        <SmallTitle>FROM THE ASHES WE RISE</SmallTitle>
        <Row>
          <DiscordIcon
            style={{
              color: colors.main.black,
              height: "25px",
              width: "25px",
              cursor: "pointer",
              marginRight: "15px",
            }}
          />
          <TwitterIcon
            style={{
              color: colors.main.black,
              height: "25px",
              width: "25px",
              cursor: "pointer",
            }}
          />
        </Row>
      </Container>
    </Background>
  );
};

const Background = styled.div`
  position: absolute;
  background-image: url("/images/background.png");
  background-repeat: repeat-x;
  background-size: contain;
  width: 100%;
  height: 39vw;
  transform: rotate(180deg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: rotate(180deg);
`;

const Logo = styled.img`
  width: 50px;
`;

const Title = styled.p`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 1000;
  font-size: 30px;
  line-height: 35px;
  letter-spacing: -0.05em;
  margin-bottom: 0px;
  margin-top: 5px;
`;

const SmallTitle = styled.p`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 0.8vw;
  text-align: center;
  letter-spacing: 0.29em;
  margin-top: 5px;
`;

const Row = styled.div`
  display: flex;
  padding-top: 10vh;
  padding-bottom: 10vh;
  & > *:hover {
    transition: transform 100ms linear;
    transform: scale(1.15);
  }
`;