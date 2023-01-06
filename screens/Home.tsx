import React, { FunctionComponent } from 'react'
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components';
import { Container } from '../components/shared';
import { colors } from '../components/colors';

const HomeContainer = styled(Container)`
  background-color: ${colors.grayLight};
  width: 100%;
  flex: 1;
`;
const Home: FunctionComponent = () => {
  return (
    <HomeContainer>
      <StatusBar style='light'/>
    </HomeContainer>
  );
};

export default Home;