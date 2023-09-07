import React from "react";
import styled from "styled-components";
import { illustrations, keycases } from "@src/assets/images";
import { Container } from "@components";
import { device } from "@src/themes/Spacing";

const Section = styled.section`
  padding-top: 175px;
  padding-bottom: 175px;
  background-color: #ffffff;

  scroll-snap-type: y mandatory;
  scroll-margin-top: 30px;

  @media (min-width: 1348px) {
    display: flex;
    flex-direction: row;
    gap: 50px;
    align-items: center;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  @media (min-width: 1348px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 70px;
  line-height: 80px;
  margin-top: 0;
  margin-bottom: 70px;
  @media (min-width: 1348px) {
    margin-bottom: 280px;
    font-size: 60px;
    line-height: 70px;
  }
`;

const Illustration = styled.img`
  width: 330px;
  @media (max-width: 1080) {
    width: 368px;
    transform: translateY(0);
  }
`;

const RightContainer = styled.div`
  display: flex;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 30px #00000029;
  padding: 40px;
  border-radius: 20px;
  opacity: 1;
  @media ${device.md} {
    width: 70%;
  }
`;

const CardContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  gap: 25px;
  max-height: 790px;
  flex-wrap: wrap;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 0.5em;
    background-color: #e6e6e6;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;

  box-sizing: border-box;
  padding: 20px;

  /* UI Properties */
  background: #f8f8f8 0% 0% no-repeat padding-box;
  border-radius: 12px;
  opacity: 1;
  @media (min-width: 1348px) {
    width: calc((100% - 40px) / 2);
    gap: 40px;
  }
`;

const CardLeftContent = styled.div`
  width: 27%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const CardRightContent = styled.div`
  width: calc(100% - (27% + 20px));
  font-size: 35px;
  line-height: 43px;
  @media (min-width: 1348px) {
    font-size: 18px;
    line-height: 28px;
  }
`;

const CardName = styled.h1`
  margin: 0;
  text-align: left;
  font-size: 40px;
  line-height: 50px;
  margin-bottom: 30px;
  @media (min-width: 1348px) {
    margin-bottom: 20px;
    font-size: 23px;
    line-height: 28px;
    span {
      display: block;
    }
  }
`;

const CardIcon = styled.img`
  width: 140px;
  height: 100px;
  @media (min-width: 1348px) {
    width: 120px;
    height: 85px;
  }
`;

const KeyCase: React.FC = () => {
  return (
    <Container>
      <Section id="keycase">
        <LeftContainer>
          <Title>주요 사례</Title>
          <Illustration src={illustrations.Illust2} />
        </LeftContainer>
        <RightContainer>
          <CardContainer>
            <Card>
              <CardLeftContent>
                <CardName>
                  <span>셩격 검사 </span>
                  <span>서비스 기업</span>
                </CardName>
                <CardIcon src={keycases.Case1} />
              </CardLeftContent>
              <CardRightContent>
                검사 상담에 chatGPT 도입을 준비중인 이 기업은 단 한 명의 IT인력
                없이 모바일 앱 출시, 클라우드 사용 관리, 앱 업그레이드에
                성공했습니다.
              </CardRightContent>
            </Card>
            <Card>
              <CardLeftContent>
                <CardName>
                  <span>반도체</span>
                  <span> 생산 기업</span>
                </CardName>
                <CardIcon src={keycases.Case2} />
              </CardLeftContent>
              <CardRightContent>
                IT 담당자가 없는 생산관리시스템(MES)의 업그레이드와 유지보수를
                IT 인력 없이 성공했습니다. 최근 반도체 신규라인 도입을 완료하고
                추가 라인 도입을 앞두고 있습니다.
              </CardRightContent>
            </Card>
            <Card>
              <CardLeftContent>
                <CardName>
                  <span>해외 물류</span>
                  <span> 기업</span>
                </CardName>
                <CardIcon src={keycases.Case3} />
              </CardLeftContent>
              <CardRightContent>
                국내 고객의 상품을 미국 시장에 보내는 서비스를 제공하는 기업은
                IT인력의 이탈에 고민중이었습니다. 웰키의 서비스로 IT인력
                채용없이 프로젝트를 성공적으로 완료했습니다.
              </CardRightContent>
            </Card>{" "}
            <Card>
              <CardLeftContent>
                <CardName>
                  <span>K-뷰티</span>
                  <span> 기업</span>
                </CardName>
                <CardIcon src={keycases.Case4} />
              </CardLeftContent>
              <CardRightContent>
                한국에서 개발한 K-뷰티 상품의 미국 시장 진출을 위해 아마존,
                쇼피파이와 같은 판매 솔루션 연동과 개발 인력이 필요했는데, 웰키
                IT서비스로 해결했습니다.
              </CardRightContent>
            </Card>
            <Card>
              <CardLeftContent>
                <CardName>
                  <span>쇼핑몰 운영</span>
                  <span> 기업</span>
                </CardName>
                <CardIcon src={keycases.Case5} />
              </CardLeftContent>
              <CardRightContent>
                상품 판매에만 집중하고 싶은 쇼핑몰은 쇼핑몰 구축과 백엔드 시스템
                연동을 위한 IT 팀이 필요했지만 적합한 팀을 찾기 어려웠습니다.
                웰키의 도움으로 팀은 물론 비용도 합리적인 수준에서 해결했습니다.
              </CardRightContent>
            </Card>{" "}
            <Card>
              <CardLeftContent>
                <CardName>의약품 관리 기업</CardName>
                <CardIcon src={keycases.Case6} />
              </CardLeftContent>
              <CardRightContent>
                의약품 유통과 판매 관련 정보 서비스를 제공하는 사업을 운영하는
                이 기업은 IT인력의 잦은 이동과 사업에 대한 이해도 부족으로
                어려움을 겪고 있었습니다. 웰키의 서비스로 해결할 수 있었습니다.
              </CardRightContent>
            </Card>
            <Card>
              <CardLeftContent>
                <CardName>창고 서비스 기업</CardName>
                <CardIcon src={keycases.Case7} />
              </CardLeftContent>
              <CardRightContent>
                해당 기업은 분산된 창고에 어떤 상품이 있는 지를 알아야
                물류비용을 줄일 수 있었습니다. 웰키의 서비스로 시시간 상품 관리
                시스템을 개발 및 도입하여 물류비 절감을 위한 기반을
                확보했습니다.
              </CardRightContent>
            </Card>
            <Card>
              <CardLeftContent>
                <CardName>물류 관리 기업</CardName>
                <CardIcon src={keycases.Case8} />
              </CardLeftContent>
              <CardRightContent>
                물류 창고를 순환하며 상품을 집화하는 간선 차량의 비용 절감을
                위해서 해당 기사의 순환 경로를 AI로 제공하는 서비스 개발 및
                제공으로 물류비 절감을 위한 기반을 확보했습니다.
              </CardRightContent>
            </Card>
            <Card>
              <CardLeftContent>
                <CardName>해외 웹툰 서비스 기업</CardName>
                <CardIcon src={keycases.Case9} />
              </CardLeftContent>
              <CardRightContent>
                동남아 시장의 웹툰 서비스를 위한 기획, 현지 언어 적용, 확장성
                잇는 웹 서비스 구축 파트너를 찾던 웹툰 서비스 기업은 웰키에 모든
                IT업무를 맡기고 본업에 집중할 수 있었습니다.
              </CardRightContent>
            </Card>
          </CardContainer>
        </RightContainer>
      </Section>
    </Container>
  );
};

export default KeyCase;
