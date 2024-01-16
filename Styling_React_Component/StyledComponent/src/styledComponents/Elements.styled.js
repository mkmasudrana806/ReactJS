import styled from "styled-components";

// props pass to styled component
export const Tag = styled.span`
  display: inline-block;
  color: #fff;
  background: ${(props) => props.color};
  margin-bottom: 10px;
  padding: 5px 10px;
  border-radius: 50px;
  font-size: 0.7em;
`;

export const H1 = styled.h1`
  color: ${(props) => props.theme.H1};
`;

export const P = styled.p`
  width: 280px;
  font-size: 15px;
  line-height: 1.4;
  color: ${(props) => props.theme.A};
  margin: 20px 0;
`;

export const Image = styled.img`
  position: absolute;
  top: 30px;
  right: -20px;
  z-index: 0;
`;

export const ToggleButton = styled.div`
  position: relative;
  width: 70px;
  height: 31px;
  border-radius: 50px;
  border: 1px solid green;
  & div {
    width: 25px;
    height: 25px;
    background-color: gray;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
  }
`;
