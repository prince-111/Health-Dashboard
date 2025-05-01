import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Svg, { Path, Rect } from "react-native-svg";
import { Ionicons } from "@expo/vector-icons";
import { BarChart, LineChart } from "react-native-gifted-charts";

const ReportsDashboard = () => {
  // Create a custom line path for the balance chart
  const createLinePath = () => {
    // Points for a simple curve that mimics the one in the image
    const points = [
      { x: 0, y: 70 },
      { x: 30, y: 60 },
      { x: 60, y: 20 },
      { x: 90, y: 80 },
      { x: 120, y: 30 },
      { x: 150, y: 50 },
    ];

    // Create SVG path
    let path = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      // Create smooth curve
      const cpx1 = points[i - 1].x + (points[i].x - points[i - 1].x) / 2;
      const cpy1 = points[i - 1].y;
      const cpx2 = points[i - 1].x + (points[i].x - points[i - 1].x) / 2;
      const cpy2 = points[i].y;
      path += ` C ${cpx1} ${cpy1}, ${cpx2} ${cpy2}, ${points[i].x} ${points[i].y}`;
    }

    // Add closure for the area fill (down to bottom and back to start)
    path += ` L ${points[points.length - 1].x} 100 L ${points[0].x} 100 Z`;

    return path;
  };

  const barData = [
    { value: 20 },
    { value: 40 },
    { value: 75 },
    { value: 97 },
    { value: 55 },
    { value: 30 },
    { value: 10 },
  ];

  const primaryData = [
    { value: 15 },
    { value: 40 },
    { value: 25 },
    { value: 30 },
    { value: 55 },
    { value: 60 },
    { value: 30 },
  ];

  const secondaryData = [
    { value: 0 },
    { value: 65 },
    { value: 10 },
    { value: 40 },
    { value: 20 },
    { value: 40 },
    { value: 50 },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Reports</Text>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons
          name="search-outline"
          size={20}
          color="#888"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search here"
          placeholderTextColor="#888"
        />
      </View>

      <View style={styles.cardsContainer}>
        <View style={[styles.card, styles.balanceCard]}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Balance</Text>
            <View style={styles.percentageContainer}>
              <Text style={styles.percentageText}>46.9%</Text>
              <Ionicons name="arrow-up-circle" size={16} color="#fff" />
            </View>
          </View>
          <Text style={styles.balanceAmount}>$5,789</Text>

          <View style={styles.chartContainer}>
            {/* <Svg height="100" width="160" viewBox="0 0 160 100">
              <Path
                d={createLinePath()}
                fill="rgba(255, 255, 255, 0.3)"
                stroke="#fff"
                strokeWidth="2"
              />
            </Svg> */}

            {/* <LineChart
              data={primaryData}
              data2={secondaryData}
              width={Dimensions.get("window").width - 30}
              height={100}
              hideRules={true}
              hideOrigin={true}
              hideYAxisText
              thickness={5}
              thickness2={5}
              curved
              curvature={0.2}
              hideDataPoints1={true}
              hideDataPoints2={true}
              color="#e0e0e0"
              color2="#ffff"
              isAnimated={true}
              animationDuration={500}
              yAxisThickness={0}
              xAxisThickness={0}
            /> */}
            <View style={styles.chartContainer}>
              <LineChart
                // areaChart
                curved
                data={primaryData}
                data2={secondaryData}
                height={90}
                // showVerticalLines
                spacing={44}
                initialSpacing={0}
                thickness1={4}
                thickness2={4}
                color1="#E2DFD2"
                color2="white"
                isAnimated={true}
                hideDataPoints
                startOpacity={0.8}
                endOpacity={0.3}
                hideRules={true}
                hideOrigin={true}
                hideYAxisText
                hideAxesAndRules={true}
              />
            </View>
          </View>
        </View>

        <View style={[styles.card, styles.heartRateCard]}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Heart Rate</Text>
            <Ionicons name="heart" size={20} color="#fff" />
          </View>
          <Text style={styles.heartRateValue}>
            97 <Text style={styles.bpmText}>bpm</Text>
          </Text>

          <View style={styles.chartContainer}>
            <BarChart
              // starting from 7 value data show
              data={barData.slice(0, 7)}
              width={180}
              height={75}
              barWidth={12}
              barBorderRadius={6}
              frontColor="#fff"
              hideRules={true}
              hideOrigin={true}
              hideYAxisText
              spacing={7}
              isAnimated={true}
              animationDuration={500}
              yAxisThickness={0}
              xAxisThickness={0}
            />
            {/* <Svg height="100" width="160" viewBox="0 0 160 100">
              <Rect x="10" y="70" width="12" height="30" fill="#fff" rx="4" />
              <Rect x="30" y="60" width="12" height="40" fill="#fff" rx="4" />
              <Rect x="50" y="40" width="12" height="60" fill="#fff" rx="4" />
              <Rect x="70" y="20" width="12" height="80" fill="#fff" rx="4" />
              <Rect x="90" y="30" width="12" height="70" fill="#fff" rx="4" />
              <Rect x="110" y="50" width="12" height="50" fill="#fff" rx="4" />
              <Rect x="130" y="65" width="12" height="35" fill="#fff" rx="4" />
            </Svg> */}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f6f6",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eef0f4",
    marginHorizontal: 16,
    paddingHorizontal: 16,
    borderRadius: 24,
    height: 50,
    marginTop: 8,
    marginBottom: 24,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  cardsContainer: {
    flexDirection: "row",
    paddingHorizontal: 14,
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    borderRadius: 20,
    padding: 16,
    paddingBottom: 0,
    height: 220,
  },
  balanceCard: {
    backgroundColor: "#7ED957",
  },
  heartRateCard: {
    backgroundColor: "#4B8AF4",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "500",
  },
  percentageContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  percentageText: {
    color: "#fff",
    fontSize: 12,
    marginRight: 4,
    fontWeight: "500",
  },
  balanceAmount: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 16,
  },
  heartRateValue: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 16,
  },
  bpmText: {
    fontSize: 16,
    fontWeight: "normal",
  },
  chartContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    width: "98%",
  },
});

export default ReportsDashboard;
