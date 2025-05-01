import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface CalendarViewProps {
  month: string;
  selectedDate: Date;
  onMonthChange: (month: string) => void;
  onDateSelect: (date: Date) => void;
}

const CalendarView = ({
  month,
  selectedDate,
  onMonthChange,
  onDateSelect,
}: CalendarViewProps) => {
  // Demo data for calendar dates
  const days = [
    { day: "Sun", date: 20, disabled: true },
    { day: "Mon", date: 21, disabled: false },
    { day: "Tue", date: 22, disabled: false },
    { day: "Wed", date: 23, disabled: false },
    { day: "Thu", date: 24, disabled: false },
    { day: "Fri", date: 25, disabled: false },
    { day: "Sat", date: 26, disabled: false },
    { day: "Sun", date: 27, disabled: false },
    { day: "Mon", date: 28, disabled: true },
  ];

  const prevMonth = () => {
    // Logic to go to previous month
    onMonthChange("March 2025");
  };

  const nextMonth = () => {
    // Logic to go to next month
    onMonthChange("April 2025");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={prevMonth}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.monthText}>{month}</Text>
        <TouchableOpacity onPress={nextMonth}>
          <Ionicons name="chevron-forward" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.daysContainer}
      >
        {days.map((item, index) => {
          const isSelected =
            selectedDate.getDate() === item.date && !item.disabled;

          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.dayItem,
                isSelected && styles.selectedDayItem,
                item.disabled && styles.disabledDayItem,
              ]}
              disabled={item.disabled}
              onPress={() => onDateSelect(new Date(2023, 3, item.date))}
            >
              <Text
                style={[
                  styles.dayText,
                  isSelected && styles.selectedDayText,
                  item.disabled && styles.disabledDayText,
                ]}
              >
                {item.day}
              </Text>
              <Text
                style={[
                  styles.dateText,
                  isSelected && styles.selectedDateText,
                  item.disabled && styles.disabledDateText,
                ]}
              >
                {item.date}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  monthText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  daysContainer: {
    paddingHorizontal: 12,
  },
  dayItem: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 70,
    marginHorizontal: 4,
  },
  selectedDayItem: {
    backgroundColor: "#8edd65",
    borderRadius: 8,
  },
  disabledDayItem: {
    opacity: 0.4,
  },
  dayText: {
    fontSize: 14,
    marginBottom: 6,
  },
  selectedDayText: {
    color: "#fff",
  },
  disabledDayText: {
    color: "#a1a1aa",
  },
  dateText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  selectedDateText: {
    color: "#fff",
  },
  disabledDateText: {
    color: "#a1a1aa",
  },
});

export default CalendarView;
