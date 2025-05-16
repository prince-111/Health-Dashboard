import DashboardScreen from "@/Pages/Dashboard";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DoctorCalendarStrip from "./calendar";
import AppointmentDetailsScreen from "@/components/calendar/AppointmentDetailsScreen";
import AppointmentDetails from "./AppointmentDetails";
import AddToBillScreen from "@/components/calendar/AddToBillScreen";
import BillingSummaryScreen from "@/components/calendar/BillingSummaryScreen";
import PaymentSummaryScreen from "@/components/calendar/PaymentSummaryScreen";
import PatientsDetailsScreen from "@/Pages/Patients/PatientsDetails";

const HomeScreen = () => { 

  return (
    <>
        {/* <DashboardScreen/> */} 
        {/* <DoctorCalendarStrip/> */} 
        {/* <AppointmentDetails/> */}
        {/* <AddToBillScreen/> */} 
        {/* <BillingSummaryScreen/> */}
        {/* <PaymentSummaryScreen/> */} 
        {/* <AppointmentDetailsScreen/> */}
        <PatientsDetailsScreen />
    </>
  );
};

// const styles = StyleSheet.create({
// });

export default HomeScreen;