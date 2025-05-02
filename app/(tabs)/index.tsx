import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ReportCard from "../../components/ReportCard";
import { heartTopRateData } from "@/server/data/HeartRateData";
import { balanceData } from "@/server/data/BalanceData";
import AppointmentsReports from "@/components/AppointmentsReports";
import ChartView from "@/components/reports/ChartView";

export default function HomeScreen() {
  const [filterPeriod, setFilterPeriod] = useState("Monthly");
  const [paymentFilter, setPaymentFilter] = useState("Payments");
  const [activeTab, setActiveTab] = useState("booked");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={{ width: 24 }} />
        </View>

        {/* Search Section */}
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={24} color="#888" />
          <TextInput
            placeholder="Search here"
            placeholderTextColor="#888"
            onChangeText={text => console.log(text)}
            returnKeyType="search"
            autoCorrect={false}
            autoCapitalize="none"
          />
        </View>

        {/* Cards Section */}
        <View style={styles.cardsContainer}>
          {/* Balance Cards */}
          <ReportCard
            title="Balance"
            value={balanceData.value}
            percentage={balanceData.percentage}
            isPositive={balanceData.isPositive}
            bgColor="#8edd65"
            chartType="line"
          />

          {/* Heart Rate Cards */}
          <ReportCard
            title="Heart Rate"
            value={heartTopRateData.value}
            unit={heartTopRateData.unit}
            bgColor="#4d97ff"
            chartType="bar"
            iconName="heart"
          />
        </View>

        {/* Reports Section  */}
        <View style={styles.chartSection}>
          {/* <ReportsView /> */}
          <ChartView />
        </View>

        {/* Appointments Reports Section */}
        <View>
          <AppointmentsReports />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F6",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f5f9",
    marginHorizontal: 16,
    marginVertical: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 12,
  },
  searchPlaceholder: {
    color: "#64748b",
    marginLeft: 8,
  },
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 16,
    marginTop: 16,
  },
  chartSection: {
    paddingHorizontal: 16,
    marginBottom: 16,
    marginTop: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    margin: 12,
  },
  chartHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  chartTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  chartTitleText: {
    fontWeight: "bold",
    marginLeft: 6,
  },
});
