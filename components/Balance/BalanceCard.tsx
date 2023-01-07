import React, { FunctionComponent } from "react"; 
import styled from "styled-components/native";

import { View } from "react-native";
import { BalanceCardProps } from "./types";

// components
import { ScreenHeight, ScreenWidth } from "../shared";
import { colors } from "../colors";

const CardBackground = styled.ImageBackground`
  height: 75%;
  width: 100%;
  resize-mode: cover;
  background-color: ${colors.accent};
  border-radius: 25px; 
  overflow: hidden;
`;

const TouchableView = styled.View`
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  flex: 1;
`;

const CardRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Logo = styled.Image`
  width: 100%;
  height: 80%;
  resize-mode: contain;
  flex: 1;
`;
// types
import cardBG from "./../../assets/bgs/background_transparent.png";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import BigText from "../Texts/BigText";


const BalanceCard: FunctionComponent<BalanceCardProps> = (props) => {

  return (

    <CardBackground source={cardBG}>
        <TouchableView>
          <CardRow>
            <RegularText textStyles={{ color: colors.white }}>
            ****** {props?.accountNo?.slice(6,10)}
            </RegularText>
          </CardRow>
          <CardRow>
            <View style={{flex: 3 }}>
              <SmallText textStyles={{color: colors.white}}>
                Total balance
              </SmallText>
              <RegularText textStyles={{color: colors.white}}>
               $ {props?.balance}
              </RegularText>
            </View>
            <Logo source={props.logo} />
          </CardRow>
        </TouchableView>     
    </CardBackground>  
  );
};

export default BalanceCard;