import React, { useEffect, useRef } from "react";
import {
  View,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
  Easing,
  BackHandler,
  Dimensions,
  PanResponder,
} from "react-native";

interface UniversalModalProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
  height?: number | string;
}

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const UniversalModal: React.FC<UniversalModalProps> = ({
  visible,
  onClose,
  title = "Modal",
  children,
  height = "50%",
}) => {
  // Animation values
  const slideAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Calculate modal slide animation distance based on screen height
  const slideDistance =
    typeof height === "string"
      ? SCREEN_HEIGHT * (parseInt(height) / 100)
      : typeof height === "number"
      ? height
      : SCREEN_HEIGHT * 0.5;

  // Handle swipe down gesture
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: (_, gestureState) => {
        // Only respond to downward gestures
        return gestureState.dy > 10;
      },
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dy > 0) {
          // Only allow downward movement
          slideAnim.setValue(1 - gestureState.dy / slideDistance);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        // Close if dragged down more than 20% of the modal height
        if (gestureState.dy > slideDistance * 0.2 || gestureState.vy > 0.5) {
          closeModal();
        } else {
          // Otherwise snap back to open position
          Animated.spring(slideAnim, {
            toValue: 1,
            friction: 8,
            tension: 45,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  // Handle back button on Android
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        if (visible) {
          closeModal();
          return true;
        }
        return false;
      }
    );

    return () => backHandler.remove();
  }, [visible]);

  // Animate modal opening
  useEffect(() => {
    if (visible) {
      // Fade in overlay
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
        easing: Easing.out(Easing.cubic),
      }).start();

      // Slide up modal
      Animated.spring(slideAnim, {
        toValue: 1,
        friction: 7, // Less friction for smoother spring
        tension: 45, // Lower tension for less aggressive spring
        useNativeDriver: true,
      }).start();
    } else {
      // Reset animations when modal closes
      slideAnim.setValue(0);
    }
  }, [visible]);

  const closeModal = () => {
    // Fade out overlay
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
      easing: Easing.out(Easing.cubic),
    }).start();

    // Slide down modal with spring effect
    Animated.spring(slideAnim, {
      toValue: 0,
      friction: 8,
      tension: 45,
      useNativeDriver: true,
    }).start(() => {
      onClose();
    });
  };

  // Combined animations
  const modalAnimatedStyle = {
    transform: [
      {
        translateY: slideAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [slideDistance, 0],
        }),
      },
    ],
    opacity: slideAnim.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 0.95, 1],
    }),
  };

  const overlayAnimatedStyle = {
    opacity: fadeAnim,
  };

  if (!visible) return null;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      onRequestClose={closeModal}
      statusBarTranslucent
    >
      <Animated.View style={[styles.modalOverlay, overlayAnimatedStyle]}>
        {/* Close on overlay click */}
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.backdropTouchable} />
        </TouchableWithoutFeedback>

        {/* Modal content */}
        <Animated.View
          style={[
            styles.modalContainer,
            {
              height:
                typeof height === "number"
                  ? height
                  : typeof height === "string" && height.trim().endsWith("%")
                  ? height.trim() as `${number}%`
                  : SCREEN_HEIGHT * 0.5,
            },
            modalAnimatedStyle,
          ]}
        >
          {/* Draggable handle area */}
          <View {...panResponder.panHandlers} style={styles.handleArea}>
            <View style={styles.modalHandle} />
          </View>

          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>{title}</Text>
            <TouchableOpacity
              onPress={closeModal}
              style={styles.closeButtonWrapper}
            >
              <Text style={styles.closeButton}>✕</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.modalContent}>{children}</View>
        </Animated.View>
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  backdropTouchable: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  modalContainer: {
    backgroundColor: "#FFF",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
    paddingTop: 12,
    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    // Shadow for Android
    elevation: 24,
  },
  handleArea: {
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  modalHandle: {
    width: 40,
    height: 5,
    backgroundColor: "#E0E0E0",
    borderRadius: 3,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  closeButtonWrapper: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: "#f1f1f1",
    width: 36,
    height: 36,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    color: "#555",
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 16,
  },
  modalContent: {
    flex: 1,
  },
});

export default UniversalModal;
