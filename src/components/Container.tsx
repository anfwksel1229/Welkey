import styled from "styled-components";

const Container = styled.div<{ full?: boolean }>`
  position: relative;
  max-width: 1798px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 80px;
  padding-right: 80px;
  height: ${(full) => (full ? "100%" : "fit-content")};
`;

export default Container;
