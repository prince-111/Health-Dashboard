import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { PieChart } from "react-native-gifted-charts";

const StorageInfo = () => {
  // Define storage data
  const storageUsedMB = 819.42;
  const storageAvailableMB = 204.57;
  const totalStorageGB = 1;

  // Calculate percentage used
  const totalMB = storageUsedMB + storageAvailableMB;
  const percentageUsed = parseFloat(((storageUsedMB / totalMB) * 100).toFixed(0));
  const percentageAvailable = 100 - percentageUsed;

  // Pie chart data
  const pieData = [
    {
      value: percentageUsed,
      color: '#FFFFFF',
      focused: true,
    },
    {
      value: percentageAvailable,
      color: "#FFFFFF4A",
    },
  ];

  return (
    // <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.storageHeader}>Storage Overview</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{totalStorageGB} GB Total</Text>
          </View>
        </View>

        <View style={styles.contentContainer}>
          {/* Left section: Storage details */}
          <View style={styles.detailsSection}>
            <View>
              <View style={styles.detailHeader}>
                <View style={[styles.dot, { backgroundColor: '#FFFFFF' }]} />
                <Text style={styles.detailLabel}>Storage Used</Text>
              </View>
              <Text style={styles.detailValue}>{storageUsedMB.toFixed(2)} MB</Text>
              <Text style={styles.detailPercentage}>{percentageUsed}%</Text>
            </View>

            <View style={styles.separator} />

            <View>
              <View style={styles.detailHeader}>
                <View style={[styles.dot, { backgroundColor: 'rgba(255, 255, 255, 0.3)' }]} />
                <Text style={styles.detailLabel}>Available Space</Text>
              </View>
              <Text style={styles.detailValue}>{storageAvailableMB.toFixed(2)} MB</Text>
              <Text style={styles.detailPercentage}>{percentageAvailable}%</Text>
            </View>
          </View>

          {/* Right section: Pie Chart */}
          <View style={styles.chartSection}>
            <View style={styles.chartWrapper}>
              <PieChart
                donut
                innerRadius={70}
                data={pieData}
                centerLabelComponent={() => {
                  return (
                    <View style={styles.centerLabel}>
                      <Text style={styles.centerLabelPercentage}>
                        {percentageUsed}%
                      </Text>
                      <Text style={styles.centerLabelText}>Used</Text>
                    </View>
                  );
                }}
                radius={90}
                strokeWidth={0}
                backgroundColor="#70B705"
              />
            </View>
          </View>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#70B705",
    borderRadius: 20,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
    marginBottom: 20,
    marginTop: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  storageHeader: {
    fontSize: 20,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  badge: {
    backgroundColor: "#FFFFFF4A",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
  },
  badgeText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  chartSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  chartWrapper: {
    backgroundColor: "#70B705",
    borderRadius: 100,
    padding: 5,
  },
  detailsSection: {
    flex: 1,
    paddingRight: 24,
  },

  detailHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  detailValue: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  detailPercentage: {
    fontSize: 14,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  separator: {
    height: 1,
    backgroundColor: "#FFFFFF4A",
    marginVertical: 16,
  },
  centerLabel: {
    alignItems: "center",
    justifyContent: "center",
  },
  centerLabelPercentage: {
    fontSize: 24,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  centerLabelText: {
    fontSize: 14,
    color: "#FFFFFF",
    marginTop: 4,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: "#FFFFFF4A",
    paddingTop: 16,
  },
  footerText: {
    fontSize: 14,
    color: "#FFFFFF",
    fontWeight: "500",
  },
});

export default StorageInfo;
