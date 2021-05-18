import React from "react";
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
const { width } = Dimensions.get("window");
const mockData = [
  {
    backgroundPicture: require("../../../assets/background.png"),
    profilePicture: require("../../../assets/profilePicture.png"),
    userName: "Margaret Novakowska",
    isVerified: true,
    location: "Los Angeles",
    aboutMe:
      "Hi! I am a Margaret, I really like traveling to really different countries, most often I am looking for flats that have very friendly landlords in a good location.",
    rentHistory: [
      {
        miles: 2.3,
        description: "Sunny apartment",
        price: 233,
        location: "Los Angeles",
        imageSource: require("../../../assets/house1.jpg"),
        key: 1,
      },
      {
        miles: 2.3,
        description: "Sunny apartment",
        price: 233,
        location: "Los Angeles",
        imageSource: require("../../../assets/house1.jpg"),
        key: 2,
      },
      {
        miles: 2.3,
        description: "Sunny apartment",
        price: 233,
        location: "Los Angeles",
        imageSource: require("../../../assets/house1.jpg"),
        key: 3,
      },
    ],
  },
];

const Profile = () => {
  const renderCards = (item) => {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground style={styles.cardPhoto} source={item.imageSource}>
          <TouchableOpacity>
            <ImageBackground
              style={styles.heartButton}
              source={require("../../../assets/heart.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.milesButton}>
            <Text style={styles.milesText}>{item.miles} miles</Text>
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.detailsView}>
          <Text style={styles.descriptionText}>{item.description}</Text>
          <Text style={styles.priceText}>${item.price}</Text>
          <Text> /per day</Text>
        </View>
        <View style={styles.cardLocationView}>
          <Image
            style={styles.locationIcon}
            source={require("../../../assets/location.png")}
          ></Image>
          <Text style={styles.locationText}>{item.location}</Text>
        </View>
      </View>
    );
  };
  const renderData = (item) => {
    return (
      <View style={styles.mainView}>
        <ImageBackground
          style={styles.backgroundPictureStyle}
          source={item.backgroundPicture}
        >
          <TouchableOpacity style={styles.editProfileButton}>
            <Image source={require("../../../assets/editProfile.png")} />
          </TouchableOpacity>
          <View style={{ flexDirection: "row" }}>
            <ImageBackground
              style={styles.profilePictureStyle}
              source={item.profilePicture}
            ></ImageBackground>
            {item.isVerified == true ? (
              <Image
                style={styles.isVerifiedPin}
                source={require("../../../assets/verified.png")}
              />
            ) : null}
            <Text style={styles.userNameTextStyle}>{item.userName}</Text>
          </View>
        </ImageBackground>
        <ScrollView style={{marginTop:10}}>
          <View style={styles.locationView}>
            <Image
              style={styles.locationIcon}
              source={require("../../../assets/location.png")}
            ></Image>
            <Text style={styles.locationText}>{item.location}</Text>
          </View>
          <Text style={styles.lineText}>____</Text>
          <Text style={styles.aboutMeText}>{item.aboutMe}</Text>
          <View style={styles.historySettingsView}>
            <TouchableOpacity style={styles.historySettingsButton}>
              <Text style={styles.historySettingsText}>Rent History</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.historySettingsButton}>
              <Text style={styles.historySettingsText}>Settings</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            style={styles.cardList}
            contentContainerStyle={styles.cardListContainer}
            showsVerticalScrollIndicator={false}
            numColumns={1}
            keyExtractor={(mockData) => mockData.key}
            data={item.rentHistory}
            renderItem={({ item }) => {
              return renderCards(item);
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
    marginTop:"10@vs"
    //paddingTop: StatusBar.currentHeight,
  },
  backgroundPictureStyle: {
    width,
    height: "200@vs",
    resizeMode: "contain",
  },
  profilePictureStyle: {
    height: "78@vs",
    width: "78@s",
    borderRadius: "39@s",
    marginLeft: "25@s",
    marginTop: "64@vs",
  },
  editProfileButton: {
    height: "40@vs",
    width: "40@s",
    marginTop: "28@vs",
    marginLeft: "24@s",
    alignItems: "center",
  },
  isVerifiedPin: {
    height: "21@vs",
    width: "21@s",
    borderRadius: "17@s",
    marginLeft: "83@s",
    marginTop: "64@vs",
    position: "absolute",
  },
  userNameTextStyle: {
    height: "30@vs",
    fontSize: "22@s",
    fontWeight: "700",
    color: "rgba(46, 48, 52, 1)",
    marginLeft: "10@vs",
    marginTop: "110@vs",
  },
  locationView: {
    height: "20@vs",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "25@s",
    marginTop: "43@vs",
  },
  locationIcon: {
    width: "8@s",
    height: "9@vs",
    marginBottom: "3@vs",
  },
  locationText: {
    height: "20@vs",
    fontWeight: "400",
    paddingLeft: "4@s",
    fontSize: "12@s",
    color: "rgba(143, 146, 161, 1)",
  },
  lineText: {
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
    marginTop: "7@vs",
  },
  historySettingsView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: "23@vs",
  },
  historySettingsButton: {
    height: "28@vs",
    paddingLeft: "24@s",
    alignItems: "center",
  },
  historySettingsText: {
    fontWeight: "700",
    fontSize: "14@s",
    color: "rgba(30, 31, 32, 1)",
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
    width: "87@s",
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
    width: "150@s",
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
  cardLocationView: {
    height: "20@vs",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Profile;
