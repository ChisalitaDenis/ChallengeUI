import React from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { ScaledSheet } from "react-native-size-matters";
const mockData=[
    {
        backgroundPicture: require("../../../assets/house2.jpg"),
        profilePicture: require("../../../assets/profilePic.png"),
        isVerified: true,
        location:"Los Angeles",
        description:"Hi! I am a Margaret, I really like traveling to really different countries, most often I am looking for flats that have very friendly landlords in a good location.",
        rentHistory:[{
            
        }]
    }
];

const Profile = () => {
    return(<SafeAreaView style={styles.mainView}>
        {mockData.map((item, index) => {
        return renderData(item);
      })}
    </SafeAreaView>)
};

const styles = ScaledSheet.create({
  mainView: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});

export default Profile;
