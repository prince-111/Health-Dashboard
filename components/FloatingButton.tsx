import React, { useRef, useEffect } from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  ImageSourcePropType,
  ViewStyle,
  Text,
  Animated,
  Easing,
} from "react-native";

interface FloatingActionButtonProps {
  icon?: ImageSourcePropType;
  backgroundColor?: string;
  size?: number;
  position?: "bottomRight" | "bottomLeft";
  buttonStyle?: ViewStyle;
  onPress: () => void;
  isActive: boolean;
}

const FloatingButton: React.FC<FloatingActionButtonProps> = ({
  icon,
  backgroundColor = "#4CAF50",
  size = 56,
  position = "bottomRight",
  buttonStyle,
  onPress,
  isActive,
}) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;

  // Sync rotation with isActive prop
  useEffect(() => {
    Animated.timing(rotateAnim, {
      toValue: isActive ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
      easing: Easing.out(Easing.cubic),
    }).start();
  }, [isActive]);

  const handlePress = () => {
    // Button scale animation
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.9,
        duration: 80,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 120,
        useNativeDriver: true,
        easing: Easing.elastic(1),
      }),
    ]).start();

    onPress();
  };

  const getPositionStyle = (): ViewStyle => {
    const margin = 20;
    switch (position) {
      case "bottomRight":
        return { bottom: margin, right: margin };
      case "bottomLeft":
        return { bottom: margin, left: margin };
      default:
        return { bottom: margin, right: margin };
    }
  };

  const buttonAnimatedStyle = {
    transform: [
      { scale: scaleAnim },
      {
        rotate: rotateAnim.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "135deg"], // Changed to 135° for better X formation
        }),
      },
    ],
  };

  return (
    <Animated.View
      style={[styles.container, getPositionStyle(), buttonAnimatedStyle]}
    >
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor,
            width: size,
            height: size,
            borderRadius: size / 2,
          },
          buttonStyle,
        ]}
        onPress={handlePress}
        activeOpacity={0.9}
      >
        {icon ? (
          <Image
            source={icon}
            style={{ width: size / 2, height: size / 2, tintColor: "#FFF" }}
            resizeMode="contain"
          />
        ) : (
          <View style={styles.iconContainer}>
            <View
              style={[
                styles.line,
                { transform: [{ rotate: isActive ? "45deg" : "0deg" }] },
              ]}
            />
            <View
              style={[
                styles.line,
                { transform: [{ rotate: isActive ? "-45deg" : "90deg" }] },
              ]}
            />
          </View>
        )}
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  iconContainer: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  line: {
    position: "absolute",
    width: 20,
    height: 2,
    backgroundColor: "white",
  },
});

export default FloatingButton;
