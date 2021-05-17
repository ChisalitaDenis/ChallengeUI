import React from "react";
import { TouchableOpacity, Text, View, ImageBackground } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

const BottomComponent = () => {
  return (
    <View style={styles.buttons}>
      <TouchableOpacity>
        <ImageBackground
          style={styles.button}
          source={require("../../assets/home.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <ImageBackground
          style={styles.button}
          source={require("../../assets/black-heart.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <ImageBackground
          style={styles.button}
          source={require("../../assets/mail.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <ImageBackground
          style={styles.button}
          source={require("../../assets/profile.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = ScaledSheet.create({
  buttons: {
    paddingHorizontal: "39@s",
    marginHorizontal: "25@vs",
    height: "38@vs",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  button: {
    width: "22.5@s",
    height: "21.5@vs",
    resizeMode: "contain",
  },
});

export default BottomComponent;
