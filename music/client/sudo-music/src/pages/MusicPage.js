import React from "react";
import styled from "styled-components";
import Button from "../components/Button";

const MusicPagesWrapper = styled.div``;
const ButtonsContainer = styled.div`
display: grid;
  grid-template-columns: 154px 154px;
  grid-auto-rows: auto;
  grid-gap: 20px;
  width: 100vw;
  margin: 16px auto 0px auto;
  justify-content: center;`;

  function MusicPage(props) {
      const ButtonInfo = [
          { name: 'Search', path: '/artists/{artist_id}', icon: null },
      ]
  }
