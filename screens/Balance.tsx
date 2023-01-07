import React, { FunctionComponent } from "react"
import { StatusBar } from "expo-status-bar"
import styled from "styled-components/native"


import { colors } from "../components/colors";
import { Container } from "../components/shared";

import AmountSection from "../components/Balance/AmountSection";
import BalanceCardSection from "../components/Balance/BalanceCardSection";
import ButtonSection from "../components/Balance/ButtonSection";
// types
import { RootStackParameterList } from "../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
type Props = StackScreenProps<RootStackParameterList, "Balance">;

const BalanceContainer = styled(Container)`
  background-color: ${colors.grayLight};
  width: 100%;
  padding: 25px;
  flex: 1;
`;


const Balance: FunctionComponent<Props> = ({route}) => {
  return (
    <BalanceContainer>
      <StatusBar style="dark"/>
      <AmountSection balance={route?.params?.balance}/>
      <BalanceCardSection {...route.params}/>
      <ButtonSection />
    </BalanceContainer>
  );
}
export default Balance;