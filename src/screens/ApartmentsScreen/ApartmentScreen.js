import React, { useState } from "react";
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

const { width } = Dimensions.get("window");
const height = (width * 100) / 60;
const mockData = [
  {
    images: [
      { imageSource: require("../../../assets/house2.jpg") },
      { imageSource: require("../../../assets/house2v2.jpg") },
      { imageSource: require("../../../assets/house2v3.jpg") },
    ],
    summaryDescription: "Luxury apartments",
    stars: 4,
    profilePicture: require("../../../assets/profilePic.png"),
    specifications: [
      { specification: "3 Bathrooms" },
      { specification: "Wi Fi" },
      { specification: "3 Bathrooms" },
      { specification: "3 Bathrooms" },
    ],
    description:
      "Nullam hendrerit lectus non pretium fermentum. Donec faucibus sodales ante, nec finibus quam lacinia sit amet. Nunc ut posuere erat. Proin convallis odio elementum sem vestibulum",
    about: [
      { imageSource: require("../../../assets/house1.jpg") },
      { imageSource: require("../../../assets/black-heart.png") },
    ],
    price: 150,
  },
];
const ApartmentScreen = () => {
  const [currentDot, setCurrentDot] = useState(0);
    
  change = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== currentDot) {
      setCurrentDot(slide);
    }
  };
  const renderSpecs = (item) => {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={styles.specsButtonsStyle}>
          <Text style={styles.specsTextStyle}>{item.specification}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const renderImages = (item) => {
    return <Image style={styles.imageStyle} source={item.imageSource} />;
  };

  const renderData = (item) => {
    return (
      <View style={{ flex: 1, backgroundColor: "red" }}>
        <ScrollView
          scrollEnabled={true}
          showsVerticalScrollIndicator={false}
          numColumns={1}
          style={styles.mainView}
        >
          <View>
            <ScrollView
              scrollEnabled={true}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              onScroll={change}
              pagingEnabled={true}
              numRows={1}
              style={styles.imageScrollView}
            >
              {item.images.map((item, index) => {
                return renderImages(item);
              })}
            </ScrollView>
            <View style={styles.dotsStyle}>
              {new Array(item.images.length).fill(0).map((i, k) => {
                return (
                  <Text
                    key={k}
                    style={
                      k === currentDot
                        ? styles.dotsActiveTextStyle
                        : styles.dotsTextStyle
                    }
                  >
                    ⬤
                  </Text>
                );
              })}
            </View>
          </View>
          <View style={styles.summaryView}>
            <View style={styles.summaryViewInfo}>
              <Text style={styles.summaryText}>{item.summaryDescription}</Text>

              <View style={{ flexDirection: "row" }}>
                {new Array(item.stars).fill(0).map(() => {
                  return (
                    <Image
                      style={styles.starsIcons}
                      source={require("../../../assets/star.png")}
                    ></Image>
                  );
                })}
              </View>
            </View>
            <Image style={styles.profilePic} source={item.profilePicture} />
          </View>
          <Text style={styles.descriptionTitle}>Specifications</Text>
          <ScrollView
            scrollEnabled={true}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            numRows={1}
            style={styles.specsBar}
          >
            {item.specifications.map((item, index) => {
              return renderSpecs(item);
            })}
          </ScrollView>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionTextStyle}>{item.description}</Text>
          <Text style={styles.aboutTextStyle}>About this space</Text>
        </ScrollView>
        <View style={styles.bottomMenu}>
          <View style={styles.priceView}>
            <Text style={styles.priceTextSyle}>{item.price}$</Text>
            <Text style={styles.perNightTextStyle}>/night</Text>
          </View>
          <TouchableOpacity style={styles.bookingButton}>
            <Text style={styles.bookingButtonTextStyle}>Booking</Text>
          </TouchableOpacity>
        </View>
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
    paddingTop: StatusBar.currentHeight,
  },
  imageScrollView: {
    width,
    height: "345@vs",
    flexDirection: "row",
    flex: 1,
  },
  imageStyle: {
    width,
    height: "345@vs",
    borderBottomLeftRadius: "24@s",
    borderBottomRightRadius: "24@s",
    overflow: "hidden",
    resizeMode: "cover",
  },
  dotsStyle: {
    flexDirection: "row",
    position: "absolute",
    bottom: "0@vs",
    alignSelf: "center",
  },
  dotsTextStyle: {
    color: "#888",
    margin: "3@s",
  },
  dotsActiveTextStyle: {
    color: "#fff",
    margin: "3@s",
  },
  summaryView: {
    height: "55@vs",
    marginTop: "24@vs",
    marginRight: "24@vs",
    flexDirection: "row",
  },
  summaryViewInfo: {
    width: "80%",
    height: "55@vs",
    marginLeft: "24@vs",
    justifyContent: "space-between",
  },
  summaryText: {
    height: "30@vs",
    fontSize: "22@s",
    fontWeight: "bold",
    color: "rgba(46, 48, 52, 1)",
  },
  profilePic: {
    height: "40@vs",
    width: "40@s",
    borderRadius: "20@s",
    marginTop: "10@vs",
    alignSelf: "flex-end",
    overflow: "hidden",
    resizeMode: "contain",
  },
  starsIcons: {
    height: "17@vs",
    width: "18@s",
    marginTop: "7@vs",
  },
  descriptionTitle: {
    fontSize: "22@s",
    color: "rgba(46, 48, 52, 1)",
    fontWeight: "bold",
    marginTop: "24@vs",
    marginLeft: "24@s",
  },
  specsBar: {
    paddingRight: "26@s",
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: "4@s",
    marginLeft: "20@s",
    flexDirection: "row",
    flex: 1,
  },
  specsButtonsStyle: {
    height: "24@s",
    marginLeft: "8@s",
    borderRadius: "4@s",
    backgroundColor: "rgba(228, 228, 231, 0.4)",
    alignItems: "center",
  },
  specsTextStyle: {
    paddingVertical: "2@vs",
    paddingHorizontal:"12@vs",
    fontSize: "12@vs",
    color: "rgba(143, 146, 161, 1)",
  },
  descriptionTextStyle: {
    fontSize: "12@s",
    color: "rgba(143, 146, 161, 0.6)",
    fontWeight: "400",
    marginTop: "8@vs",
    marginLeft: "24@s",
    marginRight: "52@s",
  },

  aboutTextStyle: {
    fontSize: "16@s",
    color: "rgba(46, 48, 52, 1)",
    fontWeight: "700",
    marginTop: "16@vs",
    marginLeft: "24@s",
  },
  bottomMenu: {
    height: "107@vs",
    backgroundColor: "rgba(255, 255, 255, 1)",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceView: {
    height: "30@vs",
    marginLeft: "24@s",
    flexDirection: "row",
  },
  priceTextSyle: {
    fontSize: "22@s",
    fontWeight: "700",
  },
  perNightTextStyle: {
    fontSize: "12@s",
    fontWeight: "400",
    marginLeft: "2@s",
    marginTop: "10@vs",
  },
  bookingButton: {
    height: "48@vs",
    width: "152@s",
    borderRadius: "60@s",
    backgroundColor: "rgba(4, 159, 255, 1)",
    marginRight: "24@s",
    alignItems: "center",
  },
  bookingButtonTextStyle: {
    fontSize: "14@s",
    fontWeight: "700",
    marginTop: "14@vs",
    color: "rgba(255, 255, 255, 1)",
  },
});

export default ApartmentScreen;
