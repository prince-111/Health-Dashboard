import React, { useState, useEffect, useRef } from "react";
import {
  TouchableOpacity,
  View,
  Modal,
  StyleSheet,
  Image,
  ImageSourcePropType,
  ViewStyle,
  Text,
  TouchableWithoutFeedback,
  Animated,
  Easing,
  BackHandler,
  Dimensions,
} from "react-native";

interface FloatingActionButtonProps {
  // Button properties
  icon?: ImageSourcePropType;
  backgroundColor?: string;
  size?: number;
  position?: "bottomRight" | "bottomLeft";
  buttonStyle?: ViewStyle;
  onPress?: () => void;

  // Modal properties
  showModal?: boolean;
  setShowModal?: (show: boolean) => void;
  modalTitle?: string;
  renderModalContent?: () => React.ReactNode;
  modalHeight?: number | string;
  disableModal?: boolean;
}

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  icon,
  backgroundColor = "#4CAF50", // Default green color
  size = 56,
  position = "bottomRight",
  buttonStyle,
  onPress,
  showModal: externalShowModal,
  setShowModal: externalSetShowModal,
  modalTitle = "Add New",
  renderModalContent,
  modalHeight = "50%",
  disableModal = false,
}) => {
  // Internal state for modal if not controlled externally
  const [internalShowModal, setInternalShowModal] = useState(false);
  const showModal =
    externalShowModal !== undefined ? externalShowModal : internalShowModal;
  const setShowModal = externalSetShowModal || setInternalShowModal;

  // Animation values
  const slideAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;

  // Handle back button on Android
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        if (showModal) {
          closeModal();
          return true;
        }
        return false;
      }
    );

    return () => backHandler.remove();
  }, [showModal]);

  // Reset animations when modal closes
  useEffect(() => {
    if (!showModal) {
      slideAnim.setValue(0);
    }
  }, [showModal]);

  const handlePress = () => {
    if (onPress) {
      onPress();
    }

    if (!disableModal) {
      setShowModal(true);

      // Button scale animation (shrink on press)
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 0.85,
          duration: 100,
          useNativeDriver: true,
          easing: Easing.out(Easing.cubic),
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
          easing: Easing.elastic(1.3),
        }),
      ]).start();

      // Button rotation animation
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
        easing: Easing.bezier(0.175, 0.885, 0.32, 1.275),
      }).start();

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
    }
  };

  const closeModal = () => {
    // Reset button rotation
    Animated.timing(rotateAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
      easing: Easing.out(Easing.cubic),
    }).start();

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
      setShowModal(false);
    });
  };

  const getPositionStyle = (): ViewStyle => {
    const margin = 20; // Standard margin from edges

    switch (position) {
      case "bottomRight":
        return {
          position: "absolute",
          bottom: margin,
          right: margin,
        };
      case "bottomLeft":
        return {
          position: "absolute",
          bottom: margin,
          left: margin,
        };
      default:
        return {
          position: "absolute",
          bottom: margin,
          right: margin,
        };
    }
  };

  // Calculate modal slide animation distance based on screen height
  const slideDistance =
    typeof modalHeight === "string"
      ? SCREEN_HEIGHT * (parseInt(modalHeight) / 100)
      : typeof modalHeight === "number"
      ? modalHeight
      : SCREEN_HEIGHT * 0.5;

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

  const buttonAnimatedStyle = {
    transform: [
      { scale: scaleAnim },
      {
        rotate: rotateAnim.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "45deg"],
        }),
      },
    ],
  };

  return (
    <>
      {/* Floating Action Button */}
      <Animated.View style={[getPositionStyle(), buttonAnimatedStyle]}>
        <TouchableOpacity
          style={[
            styles.buttonContainer,
            {
              backgroundColor,
              width: size,
              height: size,
              borderRadius: size / 2,
            },
            buttonStyle,
          ]}
          onPress={handlePress}
          activeOpacity={0.85}
        >
          {icon ? (
            <Image
              source={icon}
              style={{ width: size / 2, height: size / 2, tintColor: "#FFF" }}
              resizeMode="contain"
            />
          ) : (
            <Text style={styles.plusIcon}>+</Text>
          )}
        </TouchableOpacity>
      </Animated.View>

      {/* Modal */}
      {!disableModal && (
        <Modal
          visible={showModal}
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
                { height: modalHeight },
                modalAnimatedStyle,
              ]}
            >
              {/* Handle for pull-down (UI indicator) */}
              <View style={styles.modalHandle} />

              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>{modalTitle}</Text>
                <TouchableOpacity
                  onPress={closeModal}
                  style={styles.closeButtonWrapper}
                >
                  <Text style={styles.closeButton}>✕</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.modalContent}>
                {renderModalContent && renderModalContent()}
              </View>
            </Animated.View>
          </Animated.View>
        </Modal>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4.5,
    zIndex: 999,
  },
  plusIcon: {
    fontSize: 30,
    color: "#FFF",
    fontWeight: "600",
    lineHeight: 30,
  },
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
  modalHandle: {
    width: 40,
    height: 5,
    backgroundColor: "#E0E0E0",
    borderRadius: 3,
    alignSelf: "center",
    marginBottom: 10,
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
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    fontSize: 16,
    color: "#555",
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 16,
  },
  modalContent: {
    flex: 1,
  },
});

export default FloatingActionButton;


// import React, { useState } from "react";
// import {
//   TouchableOpacity,
//   View,
//   Modal,
//   StyleSheet,
//   Image,
//   ImageSourcePropType,
//   ViewStyle,
//   Text,
//   TouchableWithoutFeedback,
//   Animated,
// } from "react-native";

// interface FloatingActionButtonProps {
//   // Button properties
//   icon?: ImageSourcePropType;
//   backgroundColor?: string;
//   size?: number;
//   position?: "bottomRight" | "bottomLeft" | "topRight" | "topLeft" | "center";
//   buttonStyle?: ViewStyle;
//   onPress?: () => void;

//   // Modal properties
//   showModal?: boolean;
//   setShowModal?: (show: boolean) => void;
//   modalTitle?: string;
//   renderModalContent?: () => React.ReactNode;
//   modalHeight?: number | string;
//   disableModal?: boolean;
// }

// const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
//   icon,
//   backgroundColor = "#84CC16",
//   size = 56,
//   position = "bottomRight",
//   buttonStyle,
//   onPress,
//   showModal: externalShowModal,
//   setShowModal: externalSetShowModal,
//   modalTitle = "Heading Name",
//   renderModalContent,
//   modalHeight = "50%",
//   disableModal = false,
// }) => {
//   // Internal state for modal if not controlled externally
//   const [internalShowModal, setInternalShowModal] = useState(false);
//   const showModal =
//     externalShowModal !== undefined ? externalShowModal : internalShowModal;
//   const setShowModal = externalSetShowModal || setInternalShowModal;

//   // Animation for modal slide up
//   const [animation] = useState(new Animated.Value(0));

//   const handlePress = () => {
//     if (onPress) {
//       onPress();
//     }

//     if (!disableModal) {
//       setShowModal(true);
//       Animated.timing(animation, {
//         toValue: 1,
//         duration: 300,
//         useNativeDriver: true,
//       }).start();
//     }
//   };

//   const closeModal = () => {
//     Animated.timing(animation, {
//       toValue: 0,
//       duration: 100,
//       useNativeDriver: true,
//     }).start(() => {
//       setShowModal(false);
//     });
//   };

//   const getPositionStyle = (): ViewStyle => {
//     switch (position) {
//       case "bottomRight":
//         return { bottom: 20, right: 20 };
//       case "bottomLeft":
//         return { bottom: 20, left: 20 };
//       case "topRight":
//         return { top: 20, right: 20 };
//       case "topLeft":
//         return { top: 20, left: 20 };
//       case "center":
//         return {
//           bottom: "50%",
//           right: "50%",
//           transform: [{ translateX: size / 2 }, { translateY: size / 2 }],
//         };
//       default:
//         return { bottom: 20, right: 20 };
//     }
//   };

//   const slideAnimation = {
//     transform: [
//       {
//         translateY: animation.interpolate({
//           inputRange: [0, 1],
//           outputRange: [300, 0],
//         }),
//       },
//     ],
//   };

//   return (
//     <>
//       {/* Floating Action Button */}
//       <TouchableOpacity
//         style={[
//           styles.buttonContainer,
//           getPositionStyle(),
//           {
//             backgroundColor,
//             width: size,
//             height: size,
//             borderRadius: size / 2,
//           },
//           buttonStyle,
//         ]}
//         onPress={handlePress}
//         activeOpacity={0.8}
//       >
//         {icon ? (
//           <Image
//             source={icon}
//             style={{ width: size / 2, height: size / 2, tintColor: "#FFF" }}
//             resizeMode="contain"
//           />
//         ) : (
//           <Text style={styles.plusIcon}>+</Text>
//         )}
//       </TouchableOpacity>

//       {/* Modal */}
//       {!disableModal && (
//         <Modal
//           visible={showModal}
//           transparent
//           animationType="none"
//           onRequestClose={closeModal}
//         >
//           <TouchableWithoutFeedback onPress={closeModal}>
//             <View style={styles.modalOverlay}>
//               <TouchableWithoutFeedback>
//                 <Animated.View
//                   style={[
//                     styles.modalContainer,
//                     { height: typeof modalHeight === "number" ? modalHeight : (modalHeight as `${number}%` | "auto") },
//                     slideAnimation,
//                   ]}
//                 >
//                   <View style={styles.modalHeader}>
//                     <Text style={styles.modalTitle}>{modalTitle}</Text>
//                     <TouchableOpacity onPress={closeModal}>
//                       <Text style={styles.closeButton}>✕</Text>
//                     </TouchableOpacity>
//                   </View>
//                   <View style={styles.modalContent}>
//                     {renderModalContent && renderModalContent()}
//                   </View>
//                 </Animated.View>
//               </TouchableWithoutFeedback>
//             </View>
//           </TouchableWithoutFeedback>
//         </Modal>
//       )}
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   buttonContainer: {
//     position: "absolute",
//     justifyContent: "center",
//     alignItems: "center",
//     elevation: 5,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 3 },
//     shadowOpacity: 0.3,
//     shadowRadius: 3,
//     zIndex: 999,
//   },
//   plusIcon: {
//     fontSize: 30,
//     color: "#FFF",
//     fontWeight: "600",
//   },
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//     justifyContent: "flex-end",
//   },
//   modalContainer: {
//     backgroundColor: "#FFF",
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     padding: 20,
//   },
//   modalHeader: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 15,
//     paddingBottom: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: "#E5E5E5",
//   },
//   modalTitle: {
//     fontSize: 18,
//     fontWeight: "600",
//     // color: "#333",
//   },
//   closeButton: {
//     fontSize: 22,
//     color: "#777",
//     padding: 5,
//   },
//   modalContent: {
//     flex: 1,
//   },
// });

// export default FloatingActionButton;
