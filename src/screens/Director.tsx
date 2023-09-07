import React from "react";
import styled, { keyframes } from "styled-components";
import { directors, illustrations } from "@src/assets/images";
import { Container } from "@components";

const Section = styled.section`
  background-color: #ffffff;
  scroll-snap-type: y mandatory;
  scroll-margin-top: 70px;
  overflow-x: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 1348px) {
    overflow: hidden;

    margin: 0 200px;
  }
`;

const contentMoveUp = keyframes`
  0% {
     margin-bottom: 0px;
  }
  100% {
     margin-bottom: 20px;
  }
`;

const contentMoveDown = keyframes`
  0% {
     margin-top: 0px;
  }
  100% {
     margin-top: 20px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1348px) {
    margin-bottom: 50px;
  }
  @media (min-width: 1348px) {
    gap: 50px;
  }
`;

const HeaderContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
  padding-top: 220px;
  @media (min-width: 1348px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin: 0 100px;
  }
`;

const Title = styled.h1`
  margin: 0;
  width: 633px;
  height: 159px;
  text-align: left;
  font-size: 60px;
  line-height: 70px;
`;

const SubTitle = styled.p`
  margin: 0;
  margin-top: 20px;

  font-family: ${(props) => props.theme.fonts.notosans};
  font-size: 25px;
  line-height: 37px;
  text-align: left;

  @media (max-width: 1348px) {
    line-break: anywhere;
    font-size: min(2.2rem, 5vw);
    line-height: min(3rem, 7vw);
  }
  @media (min-width: 1348px) {
    width: 708px;
    height: 111px;
  }
  span {
    display: block;
    @media (min-width: 1348px) {
      display: inline-block;
    }
  }
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 410px;
  height: 400px;
  transform: translate(40px, -5%);
  @media (min-width: 1348px) {
    position: static;
    transform: none;
  }
`;

const Avatar = styled.img`
  width: 86%;
  aspect-ratio: 1;
  margin-bottom: 30px;
`;

const Content = styled.div<{ top: number; left: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  flex-shrink: 0;

  padding-top: 50px;

  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 30px #00000029;
  border-radius: 20px;

  > :last-child {
    padding-top: min(2rem, 2.5vh);
    padding-bottom: 100px;
  }

  @media (min-width: 1348px) {
    width: calc((100% - 150px) / 3);
    flex-shrink: 1;
  }
`;

const Name = styled.h2`
  margin: 0;
  display: flex;
  align-items: flex-end;
  width: 100%;
  padding-left: 15%;
  padding-right: 15%;
  margin-bottom: 10px;
  font-size: 40px;
  line-height: 59px;
  @media (min-width: 1348px) {
    font-size: 25px;
    line-height: 37px;
  }
  p {
    white-space: nowrap;
  }
  span {
    width: 100%;
    height: 1px;
    background-color: #707070;
    margin-bottom: 20px;
    margin-left: 10px;
    @media (min-width: 1348px) {
      margin-bottom: 10px;
    }
  }
`;
const Context = styled.div`
  text-align: left;
  font-size: 32px;
  line-height: 45px;
  padding-left: 10%;
  padding-right: 10%;

  margin: auto;
  @media (min-width: 1348px) {
    font-size: 18px;
    line-height: 28px;
    padding-left: 15%;
    padding-right: 15%;
  }
`;

const Separator = styled.div``;

const DirectorContainer = styled.div`
  display: flex;
  gap: 20px;

  padding: 30px 0;
  margin-bottom: 150px;

  flex-direction: row;
  justify-content: space-between;

  ::-webkit-scrollbar {
    display: none;
  }

  > :nth-child(2n) {
    animation: ${contentMoveDown} ease-in-out 1s forwards;
  }

  > :nth-child(2n + 1) {
    animation: ${contentMoveUp} ease-in-out 1s forwards;
  }
`;

const Spector = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const Director: React.FC = () => {
  return (
    <>
      <Container>
        <Spector id="director"></Spector>
        <HeaderContainer>
          <TitleContainer>
            <Title>
              BOARD <Separator>OF DIRECTORS</Separator>
            </Title>
            <SubTitle>
              <span>대한민국, 미국, 싱가포르의 </span>
              <span>대표적인 기업 근무 경험을 기반으로 </span>
              <span>벤처 사업을 운영한 경험을 보유한 이사진들이 </span>
              <span>벤처기업의 스타일과 속도로 </span>{" "}
              <span>고객의 소프트웨어 서비스를 운영합니다.</span>
            </SubTitle>
          </TitleContainer>

          <Image src={illustrations.Illust4} />
        </HeaderContainer>
      </Container>
      <Section>
        <Container>
          <DirectorContainer>
            <Content top={3910} left={141}>
              <Avatar src={directors.Director1} />
              <Name>
                <p>신수경</p> <span></span>
              </Name>
              <Context>
                삼성증권, 한국투자증권을 비롯, 토스증권, 카카오페이증권
                소프트웨어 개발에 참여한 핀테크 및 B2B 전문 개발자입니다.
              </Context>
              <Context>
                20년 경력을 기반으로 한 네트워크로 사업운영, 개발자 확보와
                운영을 담당하고 있습니다.
              </Context>
            </Content>

            <Content top={3950} left={560}>
              <Avatar src={directors.Director2} />
              <Name>
                <p>김보규</p> <span></span>
              </Name>
              <Context>
                오라클(썬마이크로시스템즈)부터 B2B 시스템 기획 및 구축 컨설팅
                사업은 물론 마케팅 컨설팅 사업 전문가입니다.
              </Context>
              <Context>
                기업 B2B 시스템 구축 경험을 기반으로 다수의 기업에 서비스를
                제공하고 있습니다.
              </Context>
            </Content>
            <Content top={3910} left={980}>
              <Avatar src={directors.Director3} />
              <Name>
                <p>강영준</p> <span></span>
              </Name>
              <Context>
                엘지이노텍의 경험을 바탕으로 B2B 서비스를 운영, 기업의 서비스
                개발과 구축을 위한 노하우를 고객에게 제공합니다.
              </Context>
              <Context>
                다수의 기업에 사업 운영 노하우를 제공하여 협력과 공동 성장의
                기회를 제공하고 있습니다.
              </Context>
            </Content>
            <Content top={3950} left={1399}>
              <Avatar src={directors.Director4} />
              <Name>
                <p>박건우</p> <span></span>
              </Name>
              <Context>
                개발자 경력과 마케팅 경력을 동시에 가진 업계에 보기 드문
                프로젝트 매니저입니다. 기업이 어떤 서비스를 하려고 하는 지, 그
                속에서 어떤 소프트웨어가 필요한 지 고객이 미처 알기 전에
                제공합니다.
              </Context>
              <Context>
                고객 서비스 기획, 개발팀 리더와 팀 운영관리를 맡고 있습니다.
              </Context>
            </Content>
          </DirectorContainer>
        </Container>
      </Section>
    </>
  );
};

export default Director;
