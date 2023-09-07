import { createGlobalStyle } from "styled-components";
import Fonts from "@assets/fonts";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'CWDangamAsac';
    src: url(${Fonts.CWDangamAsac}) format('otf');
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'CWDangamAsac';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/CWDangamAsac-Bold.woff') format('woff');
    font-weight: 800;
    font-style: swap;
  }
  @font-face {
    font-family: 'Noto Sans KR';
    src: url(${Fonts.NotoSansKR.thin}) format('otf');
    font-style: 100;
    font-display: swap;
  }
  @font-face {
    font-family: 'Noto Sans KR';
    src: url(${Fonts.NotoSansKR.thin}) format('otf');
    font-style: 200;
    font-display: swap;
  }
  @font-face {
    font-family: 'Noto Sans KR';
    src: url(${Fonts.NotoSansKR.light}) format('otf');
    font-style: 300;
    font-display: swap;
  }
  @font-face {
    font-family: 'Noto Sans KR';
    src: url(${Fonts.NotoSansKR.light}) format('otf');
    font-style: 400;
    font-display: swap;
  }
  @font-face {
    font-family: 'Noto Sans KR';
    src: url(${Fonts.NotoSansKR.regular}) format('otf');
    font-style: 500;
    font-display: swap;
  }
  @font-face {
    font-family: 'Noto Sans KR';
    src: url(${Fonts.NotoSansKR.medium}) format('otf');
    font-style: 600;
    font-display: swap;
  }
  @font-face {
    font-family: 'Noto Sans KR';
    src: url(${Fonts.NotoSansKR.bold}) format('otf');
    font-style: 700;
    font-display: swap;
  }
  @font-face {
    font-family: 'Noto Sans KR';
    src: url(${Fonts.NotoSansKR.bold}) format('otf');
    font-style: 800;
    font-display: swap;
  }
  @font-face {
    font-family: 'Noto Sans KR';
    src: url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap') format('webfont');
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Roboto';
    src: url(${Fonts.Roboto.thin}) format('otf');
    font-style: 100;
    font-display: swap;
  }
  @font-face {
    font-family: 'Roboto';
    src: url(${Fonts.Roboto.light}) format('otf');
    font-style: 300;
    font-display: swap;
  }
  @font-face {
    font-family: 'Roboto';
    src: url(${Fonts.Roboto.regular}) format('otf');
    font-style: 400;
    font-style: 500;
    font-display: swap;
  }
  @font-face {
    font-family: 'Roboto';
    src: url(${Fonts.Roboto.medium}) format('otf');
    font-style: 600;
    font-style: 700;
    font-display: swap;
  }
  @font-face {
    font-family: 'Roboto';
    src: url(${Fonts.Roboto.bold}) format('otf');
    font-style: 800;
    font-style: 900;
    font-display: swap;
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    font-family: ${({ theme }) => theme.fonts.text}, sans-serif;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    line-height: 1;
  }

`;

export default GlobalStyles;
