import { NewHeader } from "@/components/NewHeader";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BarChart } from "react-native-gifted-charts";
import { Dropdown } from "react-native-element-dropdown";
import StorageInfo from "./StorageInfo";
import ReportCard from "@/components/ReportCard";
import { balanceData } from "@/server/data/BalanceData";
import { heartTopRateData } from "@/server/data/HeartRateData";
import ChartView from "@/components/reports/ChartView";
import { appointmentStats, reportsData, revenueStats } from "@/server/data/ReportsData";
import { processedData } from "@/helper/valueBasedColor";
import { styles } from "./ReportsStyle";

const monthData = [
  { label: 'Monthly', value: 'monthly' },
  { label: 'Weekly', value: 'weekly' },
  { label: 'Daily', value: 'daily' },
];

const ReportScreen = () => {
  const navigation = useNavigation();
  const [selectedPeriod, setSelectedPeriod] = useState("1 week");
  const [selectedMonth, setSelectedMonth] = useState('monthly');
  const periods = ["1 day", "1 week", "1 month", "1 year", "All"];


  const handleSettingsPress = () => {
    console.log("Settings button pressed");
    // navigation.navigate('SettingsScreen');
  };

  const handleBackPress = () => {
    console.log("Back button pressed");
    // navigation.goBack();
  };

  // Render Appointments Section
  const renderAppointmentsSection = () => (
    <View style={styles.statsCard}>
      <View style={styles.statsHeader}>
        <View style={styles.statsTitle}>
          <View style={styles.statsItemIcon}>
            <Image source={require("../../assets/flash.png")} style={styles.statsIconImage} />
          </View>
          <Text style={styles.statsTitleText}>Appointments</Text>
        </View>
        <Dropdown
          style={styles.dropdown}
          data={monthData}
          maxHeight={300}
          labelField="label"
          valueField="value"
          value={selectedMonth}
          onChange={item => setSelectedMonth(item.value)}
          placeholder="Select period"
          containerStyle={styles.dropdownContainer}
          selectedTextStyle={styles.dropdownSelectedText}
          renderRightIcon={() => (
            <Image
              source={require("../../assets/dropdown.png")}
              style={styles.dropdownIcon}
            />
          )}
        />
      </View>

      <View style={styles.statsMainNumber}>
        <Text style={styles.statsNumberText}>{appointmentStats.total}</Text>
        <View style={styles.growthBadge}>
          <Image
            source={require("../../assets/arrowTopRight.png")}
            style={styles.growthIcon}
          />
          <Text style={styles.growthText}>{appointmentStats.growth}%</Text>
        </View>
      </View>

      <View style={styles.statsGrid}>
        <View style={styles.statsRow}>
          <View style={styles.statsItem}>
            <View style={styles.statsItemIcon}>
              <Image
                source={require("../../assets/phone.png")}
                style={styles.statsIconImage}
              />
            </View>
            <View>
              <Text style={styles.statsItemValue}>{appointmentStats.booked}</Text>
              <Text style={styles.statsItemLabel}>Booked</Text>
            </View>
          </View>
          <View style={styles.statsItem}>
            <View style={styles.statsItemIcon}>
              <Image
                source={require("../../assets/close-circle.png")}
                style={styles.statsIconImage}
              />
            </View>
            <View>
              <Text style={styles.statsItemValue}>{appointmentStats.cancelled}</Text>
              <Text style={styles.statsItemLabel}>Cancelled</Text>
            </View>
          </View>
        </View>
        <View style={styles.statsRow}>
          <View style={styles.statsItem}>
            <View style={styles.statsItemIcon}>
              <Image
                source={require("../../assets/profile.png")}
                style={styles.statsIconImage}
              />
            </View>
            <View>
              <Text style={styles.statsItemValue}>{appointmentStats.newPatients}</Text>
              <Text style={styles.statsItemLabel}>New Patients</Text>
            </View>
          </View>
          <View style={styles.statsItem}>
            <View style={styles.statsItemIcon}>
              <Image
                source={require("../../assets/patientProfile.png")}
                style={styles.statsIconImage}
              />
            </View>
            <View>
              <Text style={styles.statsItemValue}>{appointmentStats.repeatPatients}</Text>
              <Text style={styles.statsItemLabel}>Repeat Patients</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );

  // Render Revenue Section
  const renderRevenueSection = () => (
    <View style={styles.statsCard}>
      <View style={styles.statsHeader}>
        <View style={styles.statsTitle}>
          <Image
            source={require("../../assets/flash.png")}
            style={styles.statsIcon}
          />
          <Text style={styles.statsTitleText}>Revenue</Text>
        </View>
        <Dropdown
          style={styles.dropdown}
          data={monthData}
          maxHeight={300}
          labelField="label"
          valueField="value"
          value={selectedMonth}
          onChange={item => setSelectedMonth(item.value)}
          placeholder="Select period"
          containerStyle={styles.dropdownContainer}
          selectedTextStyle={styles.dropdownSelectedText}
          renderRightIcon={() => (
            <Image
              source={require("../../assets/dropdown.png")}
              style={styles.dropdownIcon}
            />
          )}
        />
      </View>

      <View style={styles.statsMainNumber}>
        <Text style={styles.statsNumberText}>{revenueStats.total}</Text>
        <View style={styles.growthBadge}>
          <Image
            source={require("../../assets/arrowTopRight.png")}
            style={styles.growthIcon}
          />
          <Text style={styles.growthText}>{revenueStats.growth}%</Text>
        </View>
      </View>

      <View style={styles.revenueCardsContainer}>
        <View style={styles.revenueCard}>
          <View style={styles.revenueCardHeader}>
            <View style={styles.revenueIconContainer}>
              <Image
                source={require("../../assets/money-recive.png")}
                style={styles.revenueIcon}
              />
            </View>
            <Text style={styles.revenueLabel}>Paid</Text>
          </View>
          <View style={styles.revenueValueContainer}>
            <Text style={styles.revenueValue}>{revenueStats.paid}</Text>
          </View>
        </View>

        <View style={styles.revenueCard}>
          <View style={styles.revenueCardHeader}>
            <View style={styles.revenueIconContainer}>
              <Image
                source={require("../../assets/timer.png")}
                style={styles.revenueIcon}
              />
            </View>
            <Text style={styles.revenueLabel}>Pending</Text>
          </View>
          <View style={styles.revenueValueContainer}>
            <Text style={styles.revenueValue}>{revenueStats.pending}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContent}>
        <NewHeader
          title="Report"
          onBackPress={handleBackPress}
          rightButton={false}
          settingButton={{
            onPress: handleSettingsPress,
          }}
        />

        <View style={styles.contentContainer}>
          {/* Period Selection */}
          <View style={styles.periodContainer}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.periodScrollContainer}
            >
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
                      styles.periodText,
                      selectedPeriod === period && styles.selectedPeriodText,
                    ]}
                  >
                    {period}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>This Week</Text>
        <View style={styles.popularContainer}>
          <Text style={styles.popularText}>Most Popular</Text>
          <Image
            source={require("../../assets/filterGreen.png")}
            style={styles.arrowImage}
          />
        </View>
      </View>

      <ScrollView
        style={styles.reportsContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Reports List */}
        {reportsData.map(item => (
          <TouchableOpacity key={item.id} style={styles.reportItem}>
            <View style={styles.reportHeader}>
              <View style={styles.leftSection}>
                <Text style={styles.dateText}>{item.date}</Text>
                <View style={styles.leftSectionName}>
                  <Text style={styles.nameText}>{item.name}</Text>
                </View>
              </View>
              <View style={styles.rightSection}>
                <View style={styles.timeContainer}>
                  <Text style={styles.timeText}>{item.time}</Text>
                  <TouchableOpacity style={styles.arrowContainer}>
                    <Image
                      source={require("../../assets/chevronright.png")}
                      style={styles.arrowImage}
                    />
                    {/* <Text style={styles.arrowText}>→</Text> */}
                  </TouchableOpacity>
                </View>

                <View style={styles.chartContainer}>
                  <BarChart
                    data={
                      processedData.find(report => report.id === item.id)
                        ?.chartData.slice(0, 10) || []
                    }
                    width={160}
                    height={60}
                    barWidth={12}
                    barBorderRadius={4}
                    hideRules={true}
                    hideOrigin={true}
                    hideYAxisText={true}
                    spacing={4}
                    isAnimated={true}
                    animationDuration={500}
                    yAxisThickness={0}
                    xAxisThickness={0}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}

        {/* Balance & HearRate Section  */}
        <View style={styles.cardsContainer}>
          <ReportCard
            title="Balance"
            value={balanceData.value}
            percentage={balanceData.percentage}
            isPositive={balanceData.isPositive}
            bgColor="#84CC16"
            chartType="line"
          />

          <ReportCard
            title="Heart Rate"
            value={heartTopRateData.value}
            unit={heartTopRateData.unit}
            bgColor="#3B82F6"
            chartType="bar"
            iconName="heart"
          />
        </View>

        {/* Report Revenue Section  */}
        <View style={styles.chartSection}>
          <ChartView />
        </View>

        {/* Appointments Section */}
        {renderAppointmentsSection()}

        {/* Revenue Section */}
        {renderRevenueSection()}

        {/* Storage Info */}
        <StorageInfo />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReportScreen;
