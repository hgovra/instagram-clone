import styled from "styled-components/native";
import { Dimensions } from "react-native";

export const Container = styled.View`
  padding: 15px;
`;

export const UserBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const User = styled.View`
  flex: 1;
  margin-right: 5px;
  flex-direction: row;
  align-items: center;
`;
export const UserPhoto = styled.Image`
  margin: 10px 5px;
  border-radius: 20px;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background-color: #ceadbd;
`;
export const UserName = styled.Text`
  font-family: "WorkSans_700Bold";
  font-size: 18px;
  margin-left: 5px;
`;

export const PhotoBox = styled.View.attrs({
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 1,
  shadowRadius: 5,
  elevation: 20,
})`
  margin: 10px 5px;
  border-radius: 20px;
  height: ${Dimensions.get("window").width}px;
  background-color: #ffffff;
`;

export const Photo = styled.Image`
  flex: 1;
  resize-mode: cover;
  border-radius: 20px;
`;

export const ActionBar = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 10px 5px;
`;
export const ActionBtn = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
`;
export const ActionCounter = styled.Text`
  font-family: "WorkSans_700Bold";
  font-size: 14px;
  margin-left: 8px;
`;

export const Description = styled.Text`
    font-family: "WorkSans_500Medium";
    font-size: 14px;
    letter-spacing: -0.5px;
    margin: 3px;
    line-height: 18px;
`;
export const DescriptionUserName = styled.Text`
    font-family: "WorkSans_700Bold";
    font-size: 16px;
    `;