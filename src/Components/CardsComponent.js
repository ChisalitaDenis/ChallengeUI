import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  FlatList,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import Strings from "../screens/Theme/Strings";
import Images from "../screens/Theme/Images";
import Cards from "./Cards";

const mockData = [
  {
    miles: 2.3,
    description: "Sunny apartment",
    price: 233,
    location: "Los Angeles",
    imageSource: Images.house1,
    key: 1,
  },
  {
    miles: 2.3,
    description: "Sunny apartment",
    price: 233,
    location: "Los Angeles",
    imageSource: Images.house1,
    key: 2,
  },
  {
    miles: 2.3,
    description: "Sunny apartment",
    price: 233,
    location: "Los Angeles",
    imageSource: Images.house1,
    key: 3,
  },
  {
    miles: 2.3,
    description: "Sunny apartment",
    price: 233,
    location: "Los Angeles",
    imageSource: Images.house1,
    key: 4,
  },
  {
    miles: 2.3,
    description: "Sunny apartment",
    price: 233,
    location: "Los Angeles",
    imageSource: Images.house1,
    key: 5,
  },
];
const otherData = [
  {
    miles: 2.3,
    description: "Sunny apartment",
    price: 233,
    location: "Los Angeles",
    noOfDays: 3,
    imageSource:Images.house1 ,
    key: 1,
  },
  {
    miles: 2.3,
    description: "Sunny apartment",
    price: 233,
    location: "Los Angeles",
    noOfDays: 3,
    imageSource: Images.house1,
    key: 2,
  },
];
const CardsComponent = () => {
  
  const renderOffers = (item) => {
    return (
      <View >
        <ImageBackground style={styles.otherOfferCard} source={item.imageSource}>
          <TouchableOpacity>
            <ImageBackground
              style={styles.heartButton}
              source={Images.heartIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.milesButton}>
            <Text style={styles.milesText}>{item.noOfDays}{Strings.cardsComponent.labels.disponibility}</Text>
          </TouchableOpacity>
          <Text style={styles.offerDescription}>{item.description}</Text>
          <View style={styles.offerLocationView}>
          <Image
            style={styles.locationIcon}
            source={Images.whiteLocationIcon}
          ></Image>
          <Text style={styles.offerLocationText}>{item.location}</Text>
        </View>
        </ImageBackground>
      </View>
    );
  };

  return (
    <ScrollView>
      <FlatList
        style={styles.cardList}
        contentContainerStyle={styles.cardListContainer}
        showsVerticalScrollIndicator={false}
        numColumns={1}
        keyExtractor={(mockData) => mockData.key}
        data={mockData}
        renderItem={({ item }) => {
          return Cards(item);
        }}
      ></FlatList>
      <Text style={styles.otherOffersText}>{Strings.cardsComponent.labels.otherOffers}</Text>
      <ScrollView
        scrollEnabled={true}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        numRows={1}
        style={styles.otherOffersScroll}
      >
        {otherData.map((item, index) => {
          return renderOffers(item);
        })}
      </ScrollView>
    </ScrollView>
  );
};

const styles = ScaledSheet.create({
  cardList: {
    width: "100%",
    height: "100%",
  },
  cardListContainer: {
    paddingHorizontal: "20@s",
  },
  cardPhoto: {
    height: "194@vs",
    width: "100%",
    borderRadius: "16@s",
    marginTop: "16@vs",
    overflow: "hidden",
    resizeMode: "contain",
  },
  heartButton: {
    width: "16@s",
    height: "16@vs",
    marginLeft: "85%",
    marginTop: "16@vs",
  },
  milesButton: {
    width: "88@s",
    height: "24@vs",
    marginLeft: "24@s",
    marginTop: "-16@vs",
    backgroundColor: "rgba(236, 107, 108, 1)",
    alignItems: "center",
    borderRadius: "4@s",
  },
  milesText: {
    fontSize: "14@s",
    color: "rgba(255, 255, 255, 1)",
    paddingVertical: "2@vs",
  },
  detailsView: {
    height: "20@vs",
    marginTop: "12@vs",
    flexDirection: "row",
    alignItems: "center",
  },
  descriptionText: {
    height: "22@vs",
    fontSize: "16@s",
    fontWeight: "700",
    flex: 7,
  },
  perDayText: {
    width: "42@s",
    height: "20@vs",
    fontSize: "12@s",
    color: "rgba(143, 146, 161, 1)",
    marginTop: "4@s",
    flex: 1,
    alignSelf: "center",
  },
  priceText: {
    width: "36@s",
    height: "20@vs",
    fontSize: "14@s",
    color: "rgba(4, 159, 255, 1)",
    flex: 1,
  },
  locationView: {
    height: "20@vs",
    flexDirection: "row",
    alignItems: "center",
  },
  locationIcon: {
    width: "8@s",
    height: "10@vs",
    marginBottom: "5@vs",
  },
  locationText: {
    height: "20@vs",
    paddingLeft: "4@s",
    fontSize: "12@s",
    color: "rgba(143, 146, 161, 1)",
  },
  otherOffersText: {
    height: "22@vs",
    marginLeft: "28@s",
    marginBottom:"16@vs",
    fontSize: "16@s",
    fontWeight: "700",
  },
  otherOffersScroll: {
    height: "194@vs",
    marginHorizontal: "10@s",
    marginBottom:"30@vs",
    flexDirection: "row",
    flex: 1,
  },
  otherOfferCard: {
    marginLeft: "14@s",
    height: "166@vs",
    width: "288@s",
    borderRadius: "16@s",
    overflow: "hidden",
    resizeMode: "contain",
  },
  offerDescription:{
    height:"22@vs",
    fontSize:"16@s",
    marginLeft:"24@s",
    marginTop:"76@vs",
    alignItems: "center",
    color:"rgba(255, 255, 255, 1)"
  },
  offerLocationView:{
    height: "20@vs",
    flexDirection: "row",
    alignItems: "center",
    marginLeft:"24@s",
    marginBottom:"8@vs"
  },
  offerLocationText: {
    height: "20@vs",
    paddingLeft: "4@s",
    fontSize: "12@s",
    color: "rgba(255, 255, 255, 1)",
  },
});

export default CardsComponent;
