import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import ReportCard from "../../components/ReportCard";
import ChartView from "../../components/ChartView";

export default function HomeScreen() {
  const [filterPeriod, setFilterPeriod] = useState("Monthly");
  const [paymentFilter, setPaymentFilter] = useState("Payments");

  const balanceData = {
    value: "$5,789",
    percentage: 46.9,
    isPositive: true,
  };

  const heartRateData = {
    value: "97",
    unit: "bpm",
  };

  const appointmentsData = {
    count: 184,
    percentage: 46.9,
    isPositive: true,
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Reports</Text>
          <View style={{ width: 24 }} />
        </View>

        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#64748b" />
          <Text style={styles.searchPlaceholder}>Search here</Text>
        </View>

        <View style={styles.cardsContainer}>
          <ReportCard
            title="Balance"
            value={balanceData.value}
            percentage={balanceData.percentage}
            isPositive={balanceData.isPositive}
            bgColor="#8edd65"
            chartType="line"
          />
          <ReportCard
            title="Heart Rate"
            value={heartRateData.value}
            unit={heartRateData.unit}
            bgColor="#4d97ff"
            chartType="bar"
            iconName="heart"
          />
        </View>

        <View style={styles.chartSection}>
          <View style={styles.chartHeader}>
            <View style={styles.chartTitle}>
              <Ionicons name="flash" size={16} color="#10b981" />
              <Text style={styles.chartTitleText}>Reports</Text>
            </View>
            <View style={styles.filtersContainer}>
              <TouchableOpacity style={styles.filterBtn}>
                <Text style={styles.filterText}>{paymentFilter}</Text>
                <Ionicons name="chevron-down" size={16} color="#000" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterBtn}>
                <Text style={styles.filterText}>Vs {filterPeriod}</Text>
                <Ionicons name="chevron-down" size={16} color="#000" />
              </TouchableOpacity>
            </View>
          </View>

          <ChartView />
        </View>

        <View style={styles.appointmentsSection}>
          <View style={styles.appointmentsHeader}>
            <View style={styles.chartTitle}>
              <Ionicons name="flash" size={16} color="#10b981" />
              <Text style={styles.chartTitleText}>Appointments</Text>
            </View>
            <TouchableOpacity style={styles.filterBtn}>
              <Text style={styles.filterText}>{filterPeriod}</Text>
              <Ionicons name="chevron-down" size={16} color="#000" />
            </TouchableOpacity>
          </View>

          <View style={styles.appointmentsStats}>
            <Text style={styles.appointmentsCount}>
              {appointmentsData.count}
            </Text>
            <View style={styles.percentageContainer}>
              <Ionicons
                name={appointmentsData.isPositive ? "arrow-up" : "arrow-down"}
                size={16}
                color="#fff"
              />
              <Text style={styles.percentageText}>
                {appointmentsData.percentage}%
              </Text>
            </View>
          </View>

          <View style={styles.appointmentButtons}>
            <TouchableOpacity style={styles.appointmentButton}>
              <Ionicons name="call" size={20} color="#10b981" />
              <Text style={styles.appointmentButtonText}>Booked</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.appointmentButton}>
              <Ionicons name="calendar" size={20} color="#10b981" />
              <Text style={styles.appointmentButtonText}>Cancelled</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.chartSection}>
          <View style={styles.chartHeader}>
            <View style={styles.chartTitle}>
              <Ionicons name="flash" size={16} color="#10b981" />
              <Text style={styles.chartTitleText}>Reports</Text>
            </View>
            <View style={styles.filtersContainer}>
              <TouchableOpacity style={styles.filterBtn}>
                <Text style={styles.filterText}>{paymentFilter}</Text>
                <Ionicons name="chevron-down" size={16} color="#000" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterBtn}>
                <Text style={styles.filterText}>Vs {filterPeriod}</Text>
                <Ionicons name="chevron-down" size={16} color="#000" />
              </TouchableOpacity>
            </View>
          </View>

          <ChartView />
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
  filtersContainer: {
    flexDirection: "row",
  },
  filterBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f5f9",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginLeft: 8,
  },
  filterText: {
    fontSize: 12,
    marginRight: 4,
  },
  appointmentsSection: {
    paddingHorizontal: 16,
    marginBottom: 16,
    paddingVertical: 8,
    backgroundColor: "#fff",
    borderRadius: 12,
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
  appointmentsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  appointmentsStats: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  appointmentsCount: {
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 10,
  },
  percentageContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3b82f6",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  percentageText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 2,
  },
  appointmentButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  appointmentButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e0f2f1",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    width: "48%",
  },
  appointmentButtonText: {
    marginLeft: 8,
    fontWeight: "500",
  },
});

// import { Image, StyleSheet, Platform } from 'react-native';

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

// export default function HomeScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//       headerImage={
//         <Image
//           source={require('@/assets/images/partial-react-logo.png')}
//           style={styles.reactLogo}
//         />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Welcome!</ThemedText>
//         <HelloWave />
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 1: Try it</ThemedText>
//         <ThemedText>
//           Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
//           Press{' '}
//           <ThemedText type="defaultSemiBold">
//             {Platform.select({
//               ios: 'cmd + d',
//               android: 'cmd + m',
//               web: 'F12'
//             })}
//           </ThemedText>{' '}
//           to open developer tools.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 2: Explore</ThemedText>
//         <ThemedText>
//           Tap the Explore tab to learn more about what's included in this starter app.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
//         <ThemedText>
//           When you're ready, run{' '}
//           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
//           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
//         </ThemedText>
//       </ThemedView>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });
