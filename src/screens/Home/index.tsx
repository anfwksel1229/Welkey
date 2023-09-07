import illustrations from "@src/assets/images/illustrations";
import { WEFF } from "@src/assets/images";
import { Container } from "@components";
import React from "react";
import styled from "styled-components";
import Greeting from "./Greeting";

const HomeContainer = styled.div`
  padding-top: 350px;

  @media (min-width: 1348px) {
    padding-top: 60px;
  }
  @media (min-width: 1348px) {
    height: 480px;
  }

  background: transparent
    linear-gradient(180deg, #f4f4f4 0%, #ffffff 66%, #f4f4f4 100%) 0% 0%
    no-repeat padding-box;
  @media (min-width: 1348px) {
    background: transparent linear-gradient(180deg, #f4f4f4 0%, #ffffff 100%) 0%
      0% no-repeat padding-box;
  }
`;

const ContentContainer = styled.div`
  @media (min-width: 1348px) {
    padding-left: 200px;
    padding-right: 200px;
  }
`;

const Content = styled.div<{ margin?: number }>`
  text-align: left;
  letter-spacing: 0px;

  margin-bottom: ${(props) => props.margin || 0}px;

  font-size: 40px;
  line-height: 50px;
  @media (min-width: 1348px) {
    font-size: 20px;
    line-height: 28px;
  }

  font-family: "Noto Sans KR", sans-serif;
`;

const Title = styled.div<{ margin?: number }>`
  text-align: left;
  letter-spacing: 0px;

  margin-bottom: ${(props) => props.margin || 0}px;

  font-family: "Noto Sans KR", sans-serif;

  font-size: 40px;
  line-height: 50px;
  @media (min-width: 1348px) {
    font-size: 25px;
    line-height: 37px;
  }
`;

const ImageBox = styled.div`
  margin-top: 250px;
  padding-bottom: 100px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  @media (min-width: 1348px) {
    display: none;
  }
  img {
    &:first-child {
      width: 50%;
      max-width: auto;
    }
    &:last-child {
      height: 40px;
    }
  }
`;

const Img = styled.img`
  /* max-width: 311px; */
`;

const Separator = styled.div``;

const Home: React.FC = () => {
  return (
    <>
      <Greeting />
      <HomeContainer>
        <Container>
          <ContentContainer>
            <Content margin={30}>
              <Separator>
                변하지 않으면 도태됩니다. 사업환경은 변하고 여러분의 사업도
                변합니다.
              </Separator>
              <Separator>
                그때마다 소프트웨어도 민첩하게 여러분의 사업을 지원해야 합니다.
              </Separator>
              <Separator>
                여러분은 준비되었나요? 기획자, 개발자 구하고 관리하기 바빠
                본업을 놓치고 있지는 않나요?
              </Separator>
            </Content>

            <Content margin={30}>
              <Separator>
                웰키아이앤씨는 고객의 사업에 맞는 소프트웨어 기획, UI/UX 디자인,
              </Separator>
              <Separator>
                개발, 운영, 업그레이드 모든 전 과정을 서비스합니다.
              </Separator>
            </Content>
            <Title style={{ fontWeight: "bold" }}>
              IT와 소프트웨어는 웰키에 맡기고, 본업에 집중하세요.
            </Title>
            <ImageBox>
              <Img src={illustrations.Illust5} />
              <Img style={{ maxWidth: "200px" }} src={WEFF} />
            </ImageBox>
          </ContentContainer>
        </Container>
      </HomeContainer>
    </>
  );
};

export default Home;
