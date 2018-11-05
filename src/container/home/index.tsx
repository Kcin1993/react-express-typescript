import React, { Component } from "react";
import { compose } from "recompose";
import styled from "styled-components";
import { connect } from "react-redux";
import { StoreState } from "../../store/reducers/index";

type Props = {};

const Home: React.StatelessComponent<Props> = (props: Props) => {
  return <HomeWrap>Home</HomeWrap>;
};

const mapStateToProps = (state: StoreState) => ({
  products: state.products
});

export default compose(
  connect(
    mapStateToProps,
    null
  )
)(Home);

const HomeWrap = styled.div``;
