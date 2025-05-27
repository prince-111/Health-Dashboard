import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export const NewHeader = ({
  title,
  onBackPress,
  rightButton,
  settingButton,
  onSettingsPress,
  onRightButtonPress,
}: any) => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        onPress={onBackPress || (() => navigation.goBack())}
        style={styles.iconWrapper}
      >
        <Image
          style={styles.imageStyle}
          source={require("../assets/chevronleftW.png")}
        />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      {settingButton && (
        <TouchableOpacity
          onPress={
            typeof settingButton === "object" && settingButton.onPress
              ? settingButton.onPress
              : onSettingsPress
          }
          style={styles.iconWrapper}
        >
          <Image
            style={styles.imageStyle}
            source={require("../assets/Setting.png")}
          />
        </TouchableOpacity>
      )}

      {rightButton && (
        <TouchableOpacity
          onPress={
            typeof rightButton === "object" && rightButton.onPress
              ? rightButton.onPress
              : onRightButtonPress
          }
          style={styles.iconWrapper2}
        >
          <Image
            style={styles.imageStyle}
            source={require("../assets/bixbyTypeIcon.png")}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 10,
    height: 56,
  },
  iconWrapper: {
    alignItems: "center",
    justifyContent: "center", 
    backgroundColor: "#E3E4E3",
    height: 50,
    width: 50,
    borderRadius: 18,
  },
  iconWrapper2: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    height: 50,
    width: 50,
    borderRadius: 18,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  imageStyle: { height: 25, width: 25 },
});
