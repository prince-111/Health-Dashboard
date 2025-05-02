import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface CalendarHeaderProps {
  currentMonthYearText: string;
  goToPreviousMonth: () => void;
  goToNextMonth: () => void;
  selectedDoctor: string;
  setShowDoctorDropdown: (show: boolean) => void;
}

export const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  currentMonthYearText,
  goToPreviousMonth,
  goToNextMonth,
  selectedDoctor,
  setShowDoctorDropdown,
}) => (
  <View>
    <View style={styles.doctorSelector}>
      <Text style={styles.doctorSelectorLabel}>Doctors</Text>
      <TouchableOpacity
        style={styles.doctorDropdownButton}
        onPress={() => setShowDoctorDropdown(true)}
      >
        <Text>{selectedDoctor}</Text>
        <Text style={styles.dropdownArrow}>▼</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.monthNavigation}>
      <TouchableOpacity
        onPress={goToPreviousMonth}
        style={styles.navButtonContainer}
      >
        <Text style={styles.navButton}>{"<"}</Text>
      </TouchableOpacity>
      <Text style={styles.monthYear}>{currentMonthYearText}</Text>
      <TouchableOpacity
        onPress={goToNextMonth}
        style={styles.navButtonContainer}
      >
        <Text style={styles.navButton}>{">"}</Text>
      </TouchableOpacity>
    </View>
  </View>
);
