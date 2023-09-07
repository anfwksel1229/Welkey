import { businesses, WEFF } from "@src/assets/images";
import { Container } from "@components";
import React from "react";
import styled from "styled-components";

const Section = styled.section<{ column?: boolean }>`
  display: flex;
  width: 100%;
  padding-top: 140px;
  padding-bottom: 60px;
  scroll-margin-top: 110px;

  justify-content: space-between;

  @media (max-width: 1348px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const HeadLineContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  @media (min-width: 1348px) {
    width: 60%;
    height: 259px;
  }
`;
const Title = styled.h1`
  margin-bottom: 10px;
  text-align: left;

  font-size: 80px;
  line-height: 90px;
`;
const SubTitle = styled.h2`
  margin: 0;
  text-align: left;

  font-weight: 500;
  line-height: 80px;

  font-size: 60px;
`;

const UnderLine = styled.span`
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: #000000;
  text-underline-offset: 10px;
  text-decoration-thickness: 0.3rem;

  @media (min-width: 1348px) {
    text-decoration-thickness: 0.2rem;
  }
`;

const Context = styled.div`
  margin: 0;
  text-align: left;
  letter-spacing: 0px;
  font-size: 40px;
  line-height: 60px;
  word-break: keep-all;

  width: 100%;
  @media (min-width: 1348px) {
    font-size: 25px;
    line-height: 37px;
    text-align: right;
    span {
      display: block;
    }
  }
`;

const Footer = styled.div`
  padding-top: 175px;
  padding-bottom: 100px;
  background: transparent linear-gradient(180deg, #f4f4f4 0%, #ffffff 100%) 0%
    0% no-repeat padding-box;
`;

const CompanyInfo = styled.div`
  text-align: left;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
`;

const Address = styled.div`
  margin: 0;
  margin-top: 20px;
  font-size: 20px;
`;

const Logo = styled.img`
  width: 150px;
  height: 40px;

  margin: 0;
  margin-bottom: 10px;
  object-fit: cover;
  object-position: center;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 99;
  padding-top: 40px;
  padding-bottom: 40px;
  margin-bottom: 200px;
  background: #f8f8f8 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 30px #00000029;
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 25px;

  justify-content: center;
  align-items: center;

  @media (min-width: 1348px) {
    flex-wrap: nowrap;
  }
`;

const BusinessImage = styled.img`
  width: 310px;
  height: 330px;

  border-radius: 20px;

  object-fit: cover;
  object-position: center;
  @media (min-width: 1348px) {
    width: calc((100% - 150px) / 3) !important;
  }
`;

const BusinessTitle = styled.p`
  font-weight: 600;
  font-size: 40px;
  line-height: 60px;
  @media (min-width: 1348px) {
    font-size: 20px;
    line-height: 28px;
  }
`;

const BusinessAddress = styled.p`
  font-size: 40px;
  line-height: 60px;
  font-weight: 400;

  @media (min-width: 1348px) {
    margin-left: 0;
    font-size: 20px;
    line-height: 28px;
  }
`;

const Welkey: React.FC = () => {
  return (
    <>
      <Container>
        <Section id="welkey">
          <HeadLineContainer>
            <Title>웰키,</Title>
            <SubTitle>
              <UnderLine>한-미 클러스터</UnderLine>
            </SubTitle>
            <SubTitle>
              <UnderLine>라운드 테이블</UnderLine> 초청
            </SubTitle>
          </HeadLineContainer>
          <Context>
            <span>
              중소벤처기업부, 창업진흥원, 한국마이크로소프트의 초청으로
            </span>
            <span>
              대한민국을 대표하는 IT 중소기업으로 대통령 방미와 함께 추진된
            </span>
            <span>
              한-미 경제 클러스터 라운드 테이블에 초청받아 자체 기술력과 향후
              계획을
            </span>
            <span>
              미국 현지 산업계, 투자 관계자와 공유하고 네트워크를 확장하는
              자리에 참석했습니다.
            </span>
            <span>
              AI, 빅데이터 기술을 가진 소프트웨어 서비스 제공 기업으로
            </span>
            <span>
              현지 관계자들에게 피칭을 하며 초개인화(Hyper Personalization)
              기능을 품은
            </span>
            <span>
              로컬 트래블 전문 홍보/판매 앱{" "}
              <strong style={{ fontWeight: "bold" }}>모디(MODI)</strong>를
              홍보했습니다.
            </span>
          </Context>
        </Section>
      </Container>
      <ContentContainer>
        <Container>
          <ContentWrap>
            <BusinessImage
              src={businesses.Business1}
              style={{
                width: "70%",
              }}
            />
            <BusinessImage
              src={businesses.Business2}
              style={{
                width: "26%",
              }}
            />
            <BusinessImage
              src={businesses.Business3}
              style={{
                width: "40%",
              }}
            />
            <BusinessImage
              src={businesses.Business4}
              style={{
                width: "56%",
              }}
            />
          </ContentWrap>
        </Container>
      </ContentContainer>
      <Footer>
        <Container>
          <CompanyInfo>
            <Logo src={WEFF} />
            <Address>
              <BusinessTitle>웰키아이앤씨 주식회사</BusinessTitle>
              <BusinessAddress>
                서울특별시 중구 청계천로 40, 8층 10호(다동, 한국관광공사
                서울센터)
              </BusinessAddress>
              <BusinessAddress> corp@dayoff.ai</BusinessAddress>
            </Address>
          </CompanyInfo>
        </Container>
      </Footer>
    </>
  );
};

export default Welkey;
