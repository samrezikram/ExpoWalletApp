import React, { FunctionComponent } from "react";
import styled from "styled-components/native"

//cons
import { Ionicons } from "@expo/vector-icons"

// custom components
import { colors } from "../colors";

const StyledView = styled.View`
  height: 45px;
  width: 45px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

// types
import { TransactionAviProps } from "./types";
import { Colors } from "react-native/Libraries/NewAppScreen";

const TransactionAvi: FunctionComponent<TransactionAviProps> = (props) => {
  return (
    <StyledView style={{backgroundColor: props.background}}>
      <Ionicons name={props.icon} size={25} color={Colors.white}/>
    </StyledView>
  );
};

export default TransactionAvi;