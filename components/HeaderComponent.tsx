import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export const HeaderComponent = ({ title, onBackPress, rightButton }: any) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onBackPress} style={styles.iconWrapper}>
        <Image
          style={styles.imageStyle}
          source={require("../assets/backIcon.png")}
        />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      {rightButton ? (
        <TouchableOpacity
          onPress={rightButton.onPress}
          style={styles.iconWrapper}
        >
          <Image
            style={styles.imageStyle}
            source={require("../assets/bixbyTypeIcon.png")}
          />
        </TouchableOpacity>
      ) : (
        <View style={{ height: 50, width: 50 }} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 10,
    height: 56,
    // backgroundColor: "#fff",
  },
  iconWrapper: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f2f4f9",
    height: 50,
    width: 50,
    borderRadius: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  imageStyle: { height: 25, width: 25 },
});
