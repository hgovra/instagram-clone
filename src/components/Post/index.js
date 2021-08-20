import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";

import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";

import {
  Container,
  UserBar,
  User,
  UserName,
  UserPhoto,
  PhotoBox,
  Photo,
  ActionBar,
  ActionBtn,
  ActionCounter,
  Description,
  DescriptionUserName
} from "./styles";

export default () => {
  return (
    <Container>
      <UserBar>
        <User>
          <UserPhoto></UserPhoto>
          <UserName>hgovra</UserName>
        </User>

        <MaterialCommunityIcons
          name="dots-horizontal"
          size={36}
          color="#c5c5c5"
        />
      </UserBar>

      <PhotoBox>
        <Photo
          source={{
            uri: "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
          }}
        />
      </PhotoBox>

      <ActionBar>
        <ActionBtn>
          <FontAwesome5 name="heart" size={24} color="black" />
          <ActionCounter>155</ActionCounter>
        </ActionBtn>

        <ActionBtn>
          <FontAwesome5 name="comment" size={24} color="black" />
          <ActionCounter>37</ActionCounter>
        </ActionBtn>

        <FontAwesome5 name="paper-plane" size={24} color="black" />

        <FontAwesome5 name="bookmark" size={24} color="black" style={{marginLeft: 'auto'}} />
      </ActionBar>

      <Description>
        <DescriptionUserName>hgovra</DescriptionUserName> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac augue
        ac felis lobortis ornare. Quisque sit amet tempor augue. Curabitur
        fringilla leo vel nunc ultrices, commodo congue ex euismod. Interdum et
        malesuada fames ac ante ipsum primis in faucibus. Fusce dui turpis,
        scelerisque sed venenatis eu, facilisis vel enim. Maecenas nisi nibh,
        porttitor ut maximus vitae, euismod ut ex. Quisque hendrerit feugiat mi
        in luctus. Nunc et sem non nunc sollicitudin congue. Duis erat lacus,
        consequat quis volutpat id, ullamcorper a urna.
      </Description>
    </Container>
  );
};
