import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
    background: #f2f6f9;
    width: 100%;
    height: 100%;
    overflow: scroll;
`;

export const Titulo = styled.Text`
    font-family: ${'WorkSans_700Bold'};
    font-size: 40px;
    letter-spacing: -1.5px;
`;

export const HomeBackground = styled(LinearGradient).attrs({
    colors: ['#ac777b', '#5090a9'],
    start: {x: 0, y: 0},
    end: {x: 1, y: 0}
})`
    flex: 1;
    justify-content: center;
    align-items: center;
`;