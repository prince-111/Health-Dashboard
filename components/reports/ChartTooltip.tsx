import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

interface TooltipItem {
  value: number;
  label: string;
}

interface ChartTooltipProps {
  items: TooltipItem[];
}

export const ChartTooltip: React.FC<ChartTooltipProps> = ({ items }) => {
  const item = items[0];

  return (
    <View style={styles.tooltipContainer}>
      <Text style={styles.tooltipTitle}>{item.label}</Text>
      <View style={styles.tooltipRow}>
        <View style={[styles.tooltipDot, { backgroundColor: "#4A89F3" }]} />
        <Text style={styles.tooltipText}>Blue: {item.value}</Text>
      </View>
      <View style={styles.tooltipRow}>
        <View style={[styles.tooltipDot, { backgroundColor: "#8CD867" }]} />
        <Text style={styles.tooltipText}>
          Green: {items[1]?.value || "N/A"}
        </Text>
      </View>
    </View>
  );
};
