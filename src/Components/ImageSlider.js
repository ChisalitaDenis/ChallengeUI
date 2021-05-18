import React from "react";
import { View, ScrollView,Text, ImageBackground,Image } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

const images = [
  { imageSource: require("../../assets/house2.jpg") },
  { imageSource: require("../../assets/house2v2.jpg") },
  { imageSource: require("../../assets/house2v3.jpg") },
];
const ImageSlider = () => {
  const renderImages = (item) => {
    return (
      <Image style={styles.imageStyle} source={item.imageSource}/>
    
      
    );
  };
  return (
    <ScrollView
      scrollEnabled={true}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      pagingEnabled={true}
      numRows={1}
      style={styles.imageScrollView}
    >
      {images.map((item, index) => {
        return renderImages(item);
      })}
      
    </ScrollView>
  );
};

const styles = ScaledSheet.create({
  imageScrollView: {
    width:"100%",
    height:"375@vs",
    flexDirection: "row",
    flex:1
  },
  imageStyle: {
    width:"345@s",
    height:"375@vs",
    borderRadius: "24@s",
    overflow: "hidden",
    resizeMode: "contain",
  },
});

export default ImageSlider;
