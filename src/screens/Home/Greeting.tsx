import React from "react";
import styled, { keyframes } from "styled-components";
import { illustrations } from "@src/assets/images";
import { Container } from "@components";

const GreetingContainer = styled.div`
  margin-top: 210px;
  width: 100%;
  @media (min-width: 1348px) {
    margin: 110px 0 0;
  }
`;

const GreetingContent = styled.div`
  box-sizing: border-box;
  text-align: right;
  @media (min-width: 1348px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
    padding: 0 200px;
  }
`;

const TextContainer = styled.div`
  flex-direction: column;
`;

const SubTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.notosans};
  font-weight: 600;
  margin-bottom: 36px;
  text-align: left;
  font-size: 70px;
  max-width: 66%;
  @media (min-width: 1348px) {
    max-width: fit-content;
    font-size: 40px;
  }
`;

const Title = styled.h1`
  text-align: left;
  font-size: 80px;
  line-height: 90px;

  font-weight: bold;
  font-family: ${(props) => props.theme.fonts.title};

  color: #2220ff;
  margin-bottom: 50px;

  max-width: 60%;
  @media (min-width: 1348px) {
    max-width: fit-content;
  }
  span {
    @media (max-width: 1348px) {
      font-size: max(80px, 16vw);
      line-height: max(70px, 15vw);
    }
    display: block;
    @media (min-width: 1348px) {
      display: contents;
      &:first-child {
        display: block;
      }
    }
  }
`;

const imageAnimation = keyframes`
    0% {
        opacity: 0;
        transform: translateY(0px);
    }
    100% {
        opacity: 1;
        transform: translateY(65px);
    }
`;

const imageMobileAnimation = keyframes`
    0% {
        opacity: 0;
        transform: translateY(0px);
    }
    100% {
        opacity: 1;
        transform: translateY(105px);
    }
`;

const Image = styled.img`
  width: 626px;
  @media (min-width: 1348px) {
    width: 410px;
    height: 406px;
  }

  animation: ${imageMobileAnimation} 1s forwards;
  @media (min-width: 1348px) {
    animation: ${imageAnimation} 1s forwards;
  }
`;

const Greeting: React.FC = () => {
  return (
    <GreetingContainer id="home">
      <Container>
        <GreetingContent>
          <TextContainer>
            <SubTitle>소프트웨어 서비스 프로바이더</SubTitle>
            <Title>
              <span>본업에</span>
              <span>집중</span>
              <span>하세요</span>
            </Title>
          </TextContainer>

          <Image src={illustrations.Illust1} />
        </GreetingContent>
      </Container>
    </GreetingContainer>
  );
};

export default Greeting;
