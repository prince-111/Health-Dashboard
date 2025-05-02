import React from "react";
import { Modal, TouchableOpacity, FlatList, View, Text } from "react-native";
import { styles } from "./styles";
import { DropdownModalProps } from "./types";

export const DropdownModal: React.FC<DropdownModalProps> = ({
  visible,
  onClose,
  data,
  onSelect,
  selectedValue,
}) => {
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.modalOverlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <View style={styles.modalContent}>
          <FlatList
            data={data}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.modalItem,
                  selectedValue === item && styles.selectedModalItem,
                ]}
                onPress={() => {
                  onSelect(item);
                  onClose();
                }}
              >
                <Text
                  style={[
                    styles.modalItemText,
                    selectedValue === item && styles.selectedModalItemText,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
};
