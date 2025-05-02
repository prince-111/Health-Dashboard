import React from "react";
import { Modal, TouchableOpacity, FlatList, View, Text } from "react-native";
import { styles } from "./styles";

interface DoctorDropdownProps {
  showDoctorDropdown: boolean;
  setShowDoctorDropdown: (show: boolean) => void;
  doctorsList: string[];
  setSelectedDoctor: (doctor: string) => void;
}

export const DoctorDropdown: React.FC<DoctorDropdownProps> = ({
  showDoctorDropdown,
  setShowDoctorDropdown,
  doctorsList,
  setSelectedDoctor,
}) => (
  <Modal
    visible={showDoctorDropdown}
    transparent={true}
    animationType="slide"
    onRequestClose={() => setShowDoctorDropdown(false)}
  >
    <TouchableOpacity
      style={styles.modalOverlay}
      activeOpacity={1}
      onPress={() => setShowDoctorDropdown(false)}
    >
      <View style={styles.modalContent}>
        <FlatList
          data={doctorsList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.doctorOption}
              onPress={() => {
                setSelectedDoctor(item);
                setShowDoctorDropdown(false);
              }}
            >
              <Text style={styles.doctorOptionText}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </TouchableOpacity>
  </Modal>
);
