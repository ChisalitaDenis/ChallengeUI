import React from "react";
import { View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import HeadComp from "../../Components/HeadComp";
import ChipsComponents from "../../Components/ChipsComponents";
import CardsComponent from "../../Components/CardsComponent";
import BottomComponent from "../../Components/BottomComponent";

const HomeScreen = () => {
  return (
    <View style={styles.homeView}>
      <View style={styles.navigationHeader}>
        <HeadComp />
      </View>
      <View style={styles.chips}>
        <ChipsComponents />
      </View>
      <View style={styles.mainCards}>
        <CardsComponent/>
      </View>
      <View>
        <BottomComponent/>
      </View>
    </View>
  );
};
const styles = ScaledSheet.create({
  homeView: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    flex:1
  },
  navigationHeader: {
    height: "85@vs",
    
  },
  chips: {
    height: "24@vs",
  },
  mainCards: {
    alignItems: "center",
    marginTop:"32@vs",
    flex:1
  },
  bottomNavigation:{
    height:"130@vs",
    backgroundColor:"rgba(0, 0, 0, 0.08)"
  }
});

export default HomeScreen;
