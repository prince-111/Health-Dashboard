import { NewHeader } from '@/components/NewHeader'
import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import { BarChart } from 'react-native-gifted-charts'

interface Activity {
  date: string;
  type: string;
  duration?: string;
  steps?: number;
  calories?: number;
  completed?: boolean;
  progress?: number;
  progressColor?: string;
}

const PatientsScreen = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("1 day");

  // Mock data for the bar chart
  const barData = [
    { value: 700, label: "M" },
    { value: 978, label: "T", frontColor: "#84CC16" },
    { value: 700, label: "W" },
    { value: 900, label: "T" },
    { value: 800, label: "F" },
    { value: 650, label: "S" },
    { value: 600, label: "S" },
  ];

  // Mock data for activities with progress
  const activities: Activity[] = [
    {
      date: "12 Sep",
      type: "Light Jogging",
      duration: "25 min",
      steps: 4877,
      calories: 513,
      progress: 20,
      progressColor: "#FF4B6C",
    },
    {
      date: "12 Sep",
      type: "Extreme Hiking",
      completed: true,
      progress: 100,
      progressColor: "#84CC16",
    },
    {
      date: "10 Sep",
      type: "Walking",
      duration: "25 min",
      steps: 4877,
      calories: 513,
      progress: 30,
      progressColor: "#8B5CF6",
    },
    {
      date: "9 Sep",
      type: "Biking",
      duration: "25 min",
      steps: 4877,
      calories: 513,
      progress: 10,
      progressColor: "#4B5563",
    },
  ];

  const periods = ["1 day", "1 week", "1 month", "1 year", "All"];

  const handleBackPress = () => {
    console.log("Back button pressed");
    // navigation.goBack();
  };

  const renderPeriodFilters = () => (
    <View style={styles.periodFilters}>
      {periods.map(period => (
        <TouchableOpacity
          key={period}
          style={[
            styles.periodButton,
            selectedPeriod === period && styles.selectedPeriodButton,
          ]}
          onPress={() => setSelectedPeriod(period)}
        >
          <Text
            style={[
              styles.periodButtonText,
              selectedPeriod === period && styles.selectedPeriodButtonText,
            ]}
          >
            {period}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderProgressBar = (activity: Activity) => (
    <View style={styles.progressBarContainer}>
      <View
        style={[
          styles.progressBar,
          {
            width: activity.progress ? `${activity.progress}%` : "0%",
            backgroundColor: activity.progressColor || "#E5E7EB",
          },
        ]}
      />
      <View style={styles.progressBarBackground} />
    </View>
  );

  const renderActivityItem = (activity: Activity) => (
    <View key={`${activity.date}-${activity.type}`} style={styles.activityItem}>
      <View style={styles.activityDate}>
        <Text style={styles.activityDateDay}>
          {activity.date.split(" ")[0]}
        </Text>
        <Text style={styles.activityDateMonth}>
          {activity.date.split(" ")[1]}
        </Text>
      </View>
      <View style={styles.activityContent}>
        <Text style={styles.activityType}>{activity.type}</Text>
        {renderProgressBar(activity)}
        {activity.completed ? (
          <View style={styles.completedContainer}>
            <Image
              source={require("@/assets/checkGreen.png")}
              style={styles.completedIcon}
            />
            <View style={styles.completedBadge}>
              <Text style={styles.completedText}>
                You completed this activity.
              </Text>
            </View>
          </View>
        ) : (
          <View style={styles.activityStats}>
            <View style={styles.statItem}>
              <Image
                source={require("@/assets/stopwatch.png")}
                style={styles.statIcon}
              />
              <Text style={styles.statValue}>{activity.duration}</Text>
            </View>
            <View style={styles.statItem}>
              <Image
                source={require("@/assets/steps.png")}
                style={styles.statIcon}
              />
              <Text style={styles.statValue}>{activity.steps}</Text>
            </View>
            <View style={styles.statItem}>
              <Image
                source={require("@/assets/fire.png")}
                style={styles.statIcon}
              />
              <Text style={styles.statValue}>{activity.calories} kcal</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <NewHeader
        title=""
        onBackPress={handleBackPress}
        rightButton={false}
        settingButton={false}
      />
      <View style={styles.headerContent}>
        <Text style={styles.headerText}>Patients</Text>
        <Text style={styles.subHeaderText}>
          Check your steps history and insights in here.
        </Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.chartContainer}>
          <View style={styles.periodContainer}>{renderPeriodFilters()}</View>
          <BarChart
            data={barData}
            width={330}
            height={200}
            barWidth={26}
            spacing={20}
            hideRules={false}
            hideOrigin={false}
            xAxisColor="#E5E7EB"
            yAxisTextStyle={{ color: "#6B7280" }}
            noOfSections={4}
            maxValue={1000}
            barBorderRadius={10}
            frontColor="#E5E7EB"
            yAxisThickness={0}
            xAxisThickness={1}
          />
        </View>

        <View style={styles.activitiesSection}>
          <View style={styles.activitiesHeader}>
            <Text style={styles.activitiesTitle}>Steps History</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllButton}>See All</Text>
            </TouchableOpacity>
          </View>
          {activities.map(renderActivityItem)}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 62,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: "2%",
  },
  scrollView: {
    flex: 1,
  },
  headerContent: {
    paddingHorizontal: 16,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "800",
    color: "#313A34",
    marginVertical: 20,
  },
  subHeaderText: {
    fontSize: 16,
    fontWeight: "400",
    color: "#647067",
    marginBottom: 20,
  },
  periodFilters: {
    flexDirection: "row",
    paddingHorizontal: 16,
  },
  periodButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 8,
    borderRadius: 20,
    backgroundColor: "#F3F4F6",
  },
  selectedPeriodButton: {
    backgroundColor: "#ffffff",
    padding: 8,
  },
  periodButtonText: {
    fontSize: 14,
    fontWeight: "800",
    color: "#313A34",
  },
  selectedPeriodButtonText: {
    fontSize: 14,
    fontWeight: "800",
    color: "#313A34",
  },
  chartContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 32,
    paddingHorizontal: 16,
    paddingVertical: 24,
    marginBottom: 24,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 32,
    elevation: 2,
  },
  periodContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#F5F5F5",
    padding: 5,
    borderRadius: 15,
    marginBottom: 20,
    paddingVertical: 15,
    marginHorizontal: "1%",
  },
  activitiesSection: {
    paddingHorizontal: 16,
  },
  activitiesHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  activitiesTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#313A34",
  },
  seeAllButton: {
    fontSize: 14,
    color: "#84CC16",
    fontWeight: "700",
  },
  activityItem: {
    flexDirection: "row",
    marginBottom: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 32,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  activityDate: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 24,
    padding: 8,
    marginRight: 16,
    width: 64,
  },
  activityDateDay: {
    fontSize: 20,
    fontWeight: "800",
    color: "#313A34",
  },
  activityDateMonth: {
    fontSize: 14,
    fontWeight: "700",
    color: "#647067",
  },
  activityContent: {
    flex: 1,
  },
  activityType: {
    fontSize: 16,
    fontWeight: "800",
    color: "#313A34",
    marginBottom: 8,
  },
  activityStats: {
    flexDirection: "row",
    alignItems: "center",
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginRight: 16,
  },
   statIcon: {
     width: 20,
     height: 20,
  },
  statValue: {
    fontSize: 14,
    color: "#647067",
  },
  completedBadge: {
    // backgroundColor: "#84CC16",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    alignSelf: "flex-start",
  },
  completedContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  completedIcon: {
    width: 20,
    height: 20,
  },
  completedText: {
    color: "#313A34",
    fontSize: 14,
    fontWeight: "600",
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: "#F3F4F6",
    borderRadius: 4,
    marginVertical: 8,
    overflow: "hidden",
    position: "relative",
  },
  progressBar: {
    height: "100%",
    position: "absolute",
    left: 0,
    top: 0,
    borderRadius: 4,
    maxHeight: 10,
  },
  progressBarBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#F3F4F6",
    zIndex: -1,
    borderRadius: 4,
    height: 10,
  },
});

export default PatientsScreen