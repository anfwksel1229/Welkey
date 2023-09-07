import React from "react";
import styled from "styled-components";
import { illustrations, partners } from "@src/assets/images";
import { Container } from "@components";

const Section = styled.section`
  margin: 220px 0;

  scroll-margin-top: 110px;

  background-color: #ffffff;

  @media (min-width: 1348px) {
    margin-right: 100px;
    margin-left: 100px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  position: relative;

  width: 100%;

  padding-top: 3rem;
  margin-bottom: 16rem;
`;
const Title = styled.h1`
  height: 229px;
  text-align: left;
  font-size: 60px;
  line-height: 70px;

  @media (max-width: 1348px) {
    padding-top: 12rem;
  }
`;

const Image = styled.img`
  width: 421px;
  height: 400px;

  position: absolute;

  top: 3rem;
  right: 0;
`;

const PartnerBadgeContainer = styled.div`
  display: grid;
  @media (max-width: 1348px) {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
  }
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  justify-items: center;
  align-items: center;

  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 30px #00000029;
  border-radius: 20px;

  /* grid-gap: 50px; */
  padding: min(30px, 2vw) min(50px, 5vw);
  @media (max-width: 1348px) {
    padding: max(60px, 8vh) min(50px, 5vw);
    gap: 15px;
  }
`;

const PartnerIcon = styled.img`
  padding: 50px;

  @media (max-width: 1348px) {
    transform: scale(1.2);
  }
  object-fit: contain;
  object-position: center;
`;

const Separator = styled.div``;

const Spector = styled.div`
  position: absolute;
  top: -120px;
  left: 0;
`;

const Partner: React.FC = () => {
  return (
    <>
      <Container>
        <Spector id="partner"></Spector>
        <Section>
          <HeaderContainer>
            <Title>
              산업계 <Separator>주요 파트너들과</Separator> 함께 합니다
            </Title>
            <Image src={illustrations.Illust3} />
          </HeaderContainer>

          <PartnerBadgeContainer>
            <PartnerIcon src={partners.BusinessCanvas} />
            <PartnerIcon src={partners.SapiensIslandCorp} />
            <PartnerIcon src={partners.Spigen} />
            <PartnerIcon src={partners.Priday} />
            <PartnerIcon src={partners.KoreaTourism} />
            <PartnerIcon src={partners.Microsoft} />
            <PartnerIcon src={partners.Happo} />
            <PartnerIcon src={partners.KoreaStartUp} />
          </PartnerBadgeContainer>
        </Section>
      </Container>
    </>
  );
};

export default Partner;
