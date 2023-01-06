import React, { FunctionComponent } from 'react'
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components';
import { Container, ScreenWidth } from '../components/shared';
import { colors } from '../components/colors';

import CardSection from "../components/Cards/CardSection"


// card Logos
import visa from "./../assets/cards/visa_white.png" 
import mastercard from "./../assets/cards/mc.png"
import TransactionSection from '../components/Transactions/TransactionSecion';

const HomeContainer = styled(Container)`
  background-color: ${colors.grayLight};
  width: ${ScreenWidth}px;
  flex: 1;
`;
const Home: FunctionComponent = () => {

  const cardsData = [
    {
      id: 11, 
      accountNo: "3845757744",
      balance: 20000.15,
      alias: "Work Debit",
      logo: visa
    },
    {
      id: 12, 
      accountNo: "3845730203",
      balance: 12000.01, 
      alias: "Personal Prepaid",
      logo: mastercard
    },
    {
      id: 13, 
      accountNo: "3845238847",
      balance: 5600.83, 
      alias: "School Prepaid",
      logo: visa
    }
  ];

  const transactionData = 
  [
    {
      id: 1,
      amount: "-$86.00",
      date: "14 Sep 2021",
      title: "Taxi",
      subtitle: "Uber car",
      art: {
        background: colors.primary,
        icon: "car"
      }
    },
    {
      id: 2,
      amount: "-$286.00",
      date: "14 Sep 2021",
      title: "Shopping",
      subtitle: "Ali express",
      art: {
        background: colors.tertiary, 
        icon: "cart"
      }
    },
    {
      id: 3, 
      amount: "-$586.00",
      date: "14 Aug 2021", 
      title: "Travel",
      subtitle: "Emirates",
      art: {
        background: colors.accent, 
        icon: "airplane"
      }
    }
  ]

  return (
    <HomeContainer>
      <StatusBar style='light'/>
        <CardSection data={cardsData}/>
        <TransactionSection data={transactionData}/>
    </HomeContainer>
  );
};

export default Home;