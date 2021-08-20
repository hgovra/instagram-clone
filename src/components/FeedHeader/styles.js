import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
    background: #f2f6f9;
    padding: 20px 15px 10px;
    width: 100%;
    height: 170px;
    flex-direction: row;
    align-items: center;
`;

export const Logo = styled.Image`
    height: 60px;
    width: 211px;
    resize-mode: contain;
    margin-top: 20px
`;