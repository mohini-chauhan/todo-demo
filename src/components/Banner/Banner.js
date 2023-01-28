import React from "react";
import PropTypes from "prop-types";
import styles from "./Banner.module.scss";
import todo from "../../assets/todo.jpg";
import Tile from "../Tile/Tile";

const Banner = () => (
  <article className={styles.Banner}>
    <Tile backGroundImage={todo} Text="To do app" />
  </article>
);

Banner.propTypes = {};

Banner.defaultProps = {};

export default Banner;
