import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  StatusBar,
  FlatList,
} from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import Strings from "../../screens/Theme/Strings";
import Images from "../../screens/Theme/Images";
import Cards from "../../Components/Cards";
const { width } = Dimensions.get("window");

const mockData = [
  {
    backgroundPicture: Images.holderBackgroundPic,
    profilePicture: Images.holderProfilePic,
    userName: "Jack Nicolson",
    isVerified: true,
    location: "Los Angeles",
    review: {
      stars: 5,
      noOfReviews: 433,
    },
    speakerOf: ["Deutsch", "English", "Russian"],
    aboutMe:
      "I am a Jack and I have 6 apartments for rent short and long term, I invite tenants who appreciate the convenience of use and nice aesthetic interiors",
    apartmentsForRent: [
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
    ],
  },
];
const HolderProfile = () => {
  const renderStars = (item) => {
    return new Array(item.stars).fill(0).map(() => {
      return <Image style={styles.starsIcons} source={Images.starIcon}></Image>;
    });
  };
  const renderData = (item) => {
    return (
      <View style={styles.mainView}>
        <ImageBackground
          style={styles.backgroundPictureStyle}
          source={item.backgroundPicture}
        >
          <TouchableOpacity style={styles.backButton}>
            <Image source={Images.backButton} />
          </TouchableOpacity>
          <View style={{ flexDirection: "row" }}>
            <ImageBackground
              style={styles.profilePictureStyle}
              source={item.profilePicture}
            ></ImageBackground>
            {item.isVerified == true ? (
              <Image
                style={styles.isVerifiedPin}
                source={Images.verifiedIcon}
              />
            ) : null}
          </View>
        </ImageBackground>
        <ScrollView style={styles.mainScrollView}>
          <Text style={styles.userNameTextStyle}>{item.userName}</Text>
          <View style={styles.locationView}>
            <Image
              style={styles.locationIcon}
              source={Images.locationIcon}
            ></Image>
            <Text style={styles.locationText}>{item.location}</Text>
          </View>
          <View style={styles.reviewView}>
            {renderStars(item.review)}
            <Text style={styles.reviewsText}>
              {item.review.noOfReviews}
              {Strings.holderprofile.labels.review}
            </Text>
          </View>
          <View style={styles.languagesView}>
            <Image source={Images.languageIcon} />
            <Text style={styles.languagesText}>
              {Strings.holderprofile.labels.speaks}
              {item.speakerOf.join(", ")}
            </Text>
          </View>
          <View style={styles.contactView}>
            <TouchableOpacity>
              <Image source={Images.messageIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.callButton}>
              <Image source={Images.callIcon} />
            </TouchableOpacity>
          </View>
          <Text style={styles.lineText}>{Strings.profile.labels.line}</Text>
          <Text style={styles.aboutMeText}>{item.aboutMe}</Text>
          <Text style={styles.forRent}>
            {Strings.holderprofile.labels.myApartments}
          </Text>
          <FlatList
            style={styles.cardList}
            contentContainerStyle={styles.cardListContainer}
            showsVerticalScrollIndicator={false}
            numColumns={1}
            keyExtractor={(mockData) => mockData.key}
            data={item.apartmentsForRent}
            renderItem={({ item }) => {
              return Cards(item);
            }}
          ></FlatList>
        </ScrollView>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.mainView}>
      {mockData.map((item, index) => {
        return renderData(item);
      })}
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  mainView: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    flex: 1,
    marginTop: "10@vs",
  },
  backgroundPictureStyle: {
    width,
    height: "200@vs",
    resizeMode: "contain",
  },
  profilePictureStyle: {
    height: "78@vs",
    width: "78@s",
    borderRadius: "38@s",
    marginLeft: "24@s",
    marginTop: "64@vs",
  },
  backButton: {
    height: "40@vs",
    width: "40@s",
    marginTop: "28@vs",
    marginLeft: "24@s",
    alignItems: "center",
  },
  isVerifiedPin: {
    height: "21@vs",
    width: "21@s",
    borderRadius: "16@s",
    marginLeft: "82@s",
    marginTop: "64@vs",
    position: "absolute",
  },
  mainScrollView: { marginTop: "16@vs" },
  userNameTextStyle: {
    height: "30@vs",
    fontSize: "22@s",
    fontWeight: "700",
    color: "rgba(46, 48, 52, 1)",
    marginLeft: "24@vs",
    marginTop: "16@vs",
  },
  locationView: {
    height: "20@vs",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "24@s",
  },
  locationIcon: {
    width: "8@s",
    height: "10@vs",
    marginBottom: "4@vs",
  },
  locationText: {
    height: "20@vs",
    fontWeight: "400",
    paddingLeft: "4@s",
    fontSize: "12@s",
    color: "rgba(143, 146, 161, 1)",
  },
  reviewView: {
    flexDirection: "row",
    marginLeft: "24@s",
    marginTop: "8@vs",
  },
  reviewsText: {
    height: "20@vs",
    fontSize: "12@s",
    fontWeight: "400",
    marginLeft: "8@s",
    color: "rgba(143, 146, 161, 1)",
  },
  languagesView: {
    height: "20@vs",
    marginTop: "10@vs",
    marginLeft: "24@s",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  languagesText: {
    marginLeft: "14@s",
    color: "rgba(143, 146, 161, 1)",
  },
  contactView: {
    marginLeft: "24@s",
    marginTop: "24@vs",
    flexDirection: "row",
  },
  callButton: {
    marginLeft: "16@s",
  },
  lineText: {
    marginLeft: "24@s",
    fontWeight: "400",
    fontSize: "20@s",
    color: "rgba(46, 48, 52, 0.2)",
    marginLeft: "24@s",
  },
  aboutMeText: {
    fontWeight: "400",
    fontSize: "12@s",
    color: "rgba(143, 146, 161, 1)",
    marginLeft: "24@s",
    marginTop: "8@vs",
    paddingRight: "80@s",
  },
  forRent: {
    fontSize: "16@s",
    color: "rgba(46, 48, 52, 1)",
    fontWeight: "700",
    marginTop: "24@vs",
    marginLeft: "24@s",
  },
  cardList: {
    width: "100%",
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
  locationCard: {
    height: "20@vs",
    flexDirection: "row",
    alignItems: "center",
  },
  locationCardIcon: {
    width: "8@s",
    height: "10@vs",
    marginBottom: "5@vs",
  },
  locationCardText: {
    height: "20@vs",
    paddingLeft: "4@s",
    fontSize: "12@s",
    color: "rgba(143, 146, 161, 1)",
  },
});

export default HolderProfile;
