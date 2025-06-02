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
import PatientAppointments from "@/Pages/Patients/PatientAppointments";
import InvoiceLists from "@/Pages/invoices/PatientInvoice";
import PatientInvoice from "@/Pages/invoices/PatientInvoice";
import PatientPayments from "@/Pages/Payments/PatientPayments";
import PatientViewDetails from "@/Pages/Patients/PatientViewDetails";
import SettingsScreen from "@/Pages/SettingsScreen";
import InvoiceDetails from "@/Pages/invoices/InvoiceDetails";
import MedicineDosage from "@/Pages/Patients/MedicineDosage";
import ReportScreen from "@/Pages/Reports/ReportScreen";
import AppointmentScreen from "@/Screen/AppointmentScreen";

const HomeScreen = () => { 

  return (
    <>
      {/* <DashboardScreen/> */}
      {/* <DoctorCalendarStrip/> */}
      {/* <AppointmentDetails/> */}
      {/* <AddToBillScreen/> */}
      {/* <BillingSummaryScreen/> */}
      {/* <PaymentSummaryScreen/>  */}
      {/* <AppointmentDetailsScreen/> */}
      {/* <PatientsDetailsScreen /> */}
      {/* <PatientAppointments/> */}
      {/* <PatientInvoice/> */}
      {/* <PatientPayments/> */}
      {/* <PatientViewDetails/> */}
      {/* <SettingsScreen/> */}
      {/* <InvoiceDetails/> */}
      {/* above component sends */}
      {/* <MedicineDosage/> */}
      <ReportScreen/>
      {/* <AppointmentScreen/> */}
    </>
  );
};

// const styles = StyleSheet.create({
// });

export default HomeScreen;