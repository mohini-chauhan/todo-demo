import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledTile = styled.article`
  height: ${(props) => props.Height};
  width: ${(props) => props.width};
  background-image: url(${(props) => props.backGroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
`;
const StyledTextWrapperMain = styled.section`
  position: absolute;
  bottom: 30px;
  right: 88px;
  font-family: Lobster;
  font-size: 60px;
  line-height: 1.15;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  position: absolute;
  bottom: 30px;
  ${"" /* left: 79px; */}
  color: #edc9b8;
  -webkit-text-stroke: 1px sienna;
  text-shadow: 3px 3px 0 #a95a5a, -1px -1px 0 #e70808, 1px -1px 0 #db7272,
    -1px 1px 0 #be5212, 1px 1px 0 #be4848;
  @media screen and (max-width: 480px) {
    right: 30px;

    font-size: 55px;
  }
`;

const Tile = ({
  backGroundImage,
  Height = "250px",
  Text = "",
  width = "auto",
  children,
  ...props
}) => (
  <StyledTile
    backGroundImage={backGroundImage}
    Height={Height}
    width={width}
    {...props}
  >
    <StyledTextWrapperMain>{Text}</StyledTextWrapperMain>
  </StyledTile>
);

Tile.propTypes = {};

Tile.defaultProps = {};

export default Tile;
