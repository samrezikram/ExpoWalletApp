import React, { FunctionComponent } from "react"
import styled from "styled-components/native"
import { colors } from "../colors";
import { ScreenHeight, ScreenWidth } from "../shared";

 // components 
 import CardItem from "./CardItem";
 import { CardSectionProps } from "./types";

 const CardList = styled.FlatList`
  width: 100%;
  flex: 1;
  padding-left: 25px;
  padding-bottom: 15px;
 `;


 const CardSection: FunctionComponent<CardSectionProps> = (props) => {
  return (
    <CardList 
      data={props.data}  
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle= {{
         paddingRight: 20,
         alignItems: "center" 
      }}
      keyExtractor={({id}: any) => id.toString()}
      renderItem={({item}: any) => <CardItem {...item} />}
      />
  );
}
export default CardSection;