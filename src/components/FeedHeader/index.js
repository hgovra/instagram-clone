import React, { useState, useEffect } from "react";

import { Feather, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

import { Container, Logo } from "./styles";

import LogoImg from "../../../assets/instagram.png";

export default () => {
  return (
    <Container>
      <Logo source={LogoImg} />

      <Feather name="camera" size={32} color="#000000" style={{marginLeft: 'auto'}} />
      <MaterialIcons name="live-tv" size={32} color="#db9193" style={{marginLeft: 15}} />
      <FontAwesome5 name="paper-plane" size={28} color="#4166ac" style={{marginLeft: 13}} />
    </Container>
  );
};
