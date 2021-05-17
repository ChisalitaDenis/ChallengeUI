import React, { useState } from "react";
import {
  Image,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { ScaledSheet } from "react-native-size-matters";

const HeaderComponent = () => {
  const [text, onChangeText] = useState("");
  return (
    <View style={styles.parentContainer}>
      <TouchableOpacity style={styles.filterSearch}>
        <Image
          style={styles.filterSearch}
           source={require("../../assets/Icon.png")}
        />
      </TouchableOpacity>
      <View style={styles.searchBar}>
        <Image style={styles.searchIcon} source={require('../../assets/Shape.png')} />
        <TextInput
          autoCorrect={false}
          placeholder="Search via City"
          style={styles.textStyle}
          onChangeText={onChangeText}
          value={text}
        ></TextInput>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  parentContainer: {
    paddingRight:"48@s",
    height: "84@vs",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  filterSearch: {
    width: "40@s",
    height: "40@vs",
    paddingLeft:"20@s"
  },
  searchBar: {
    width: "271@s",
    height: "40@vs",
    backgroundColor: "rgba(228, 228, 231, 0.4)",
    marginLeft:"14@s",
    paddingRight:"24@s",
    alignItems: "center",
    flexDirection: "row",
    borderRadius:"48@s"
  },
  textStyle: {
    flex: 1,
    paddingHorizontal: "10@s",
    color: "black",
  },
  searchIcon: {
    width: "15.56@s",
    height: "14.58@vs",
    marginLeft:"15@s"
  },
});

export default HeaderComponent;
