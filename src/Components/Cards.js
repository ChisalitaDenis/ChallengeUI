import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  ImageBackground,
  Image,
} from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import Strings from "../screens/Theme/Strings";
import Images from "../screens/Theme/Images";

const Cards = (item) => {
  const renderCards = (item) => {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground style={styles.cardPhoto} source={item.imageSource}>
          <TouchableOpacity>
            <ImageBackground
              style={styles.heartButton}
              source={Images.heartIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.milesButton}>
            <Text style={styles.milesText}>
              {item.miles}
              {Strings.cardsComponent.labels.miles}
            </Text>
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.detailsView}>
          <Text style={styles.descriptionText}>{item.description}</Text>
          <Text style={styles.priceText}>
            {Strings.cardsComponent.labels.currency}
            {item.price}
          </Text>
          <Text>{Strings.cardsComponent.labels.perDay}</Text>
        </View>
        <View style={styles.locationView}>
          <Image
            style={styles.locationIcon}
            source={Images.locationIcon}
          ></Image>
          <Text style={styles.locationText}>{item.location}</Text>
        </View>
      </View>
    );
  };

  return renderCards(item);
};

const styles = ScaledSheet.create({
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
});

export default Cards;
