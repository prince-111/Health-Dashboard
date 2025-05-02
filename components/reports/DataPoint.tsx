import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { ChartDataPoint } from "./types";

interface DataPointProps {
  item: ChartDataPoint;
}

export const DataPoint: React.FC<DataPointProps> = ({ item }) => {
  if (!item.showDataPoint) return null;

  return (
    <View style={styles.customDataPointContainer}>
      <View
        style={[
          styles.customDataPoint,
          { backgroundColor: item.dataPointColor || "#8CD867" },
        ]}
      >
        <Text style={styles.customDataPointText}>{item.dataPointText}</Text>
      </View>
    </View>
  );
};
