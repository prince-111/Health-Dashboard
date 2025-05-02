import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { ChartFiltersProps } from "./types";

export const ChartFilters: React.FC<ChartFiltersProps> = ({
  paymentType,
  setPaymentType,
  timeFilter,
  setTimeFilter,
  selectedMonth,
  setSelectedMonth,
}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.titleContainer}>
        <Ionicons name="flash" size={16} color="#10b981" />
        <Text style={styles.title}>Reports</Text>
      </View>
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setPaymentType(paymentType)}
        >
          <Text style={styles.filterButtonText}>{paymentType}</Text>
          <Text style={styles.chevron}>▼</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setTimeFilter(timeFilter)}
        >
          <Text style={styles.filterButtonText}>{timeFilter}</Text>
          <Text style={styles.chevron}>▼</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
