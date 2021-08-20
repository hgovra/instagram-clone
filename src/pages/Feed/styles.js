import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
    width: 100%;
    height: 100%;
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