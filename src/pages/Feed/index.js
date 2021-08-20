import React, { useState, useEffect } from "react";
import { ScrollView, FlatList } from "react-native";

import { Feather } from "@expo/vector-icons";

import { Container } from "./styles";

import Post from "../../components/Post";
//<Feather name="camera" size={48} color="#e09b9c" />

export default () => {
  return (
    <Container>
      <ScrollView>
        <Post />
        <Post />
      </ScrollView>
    </Container>
  );
};
