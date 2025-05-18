import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { HeaderComponent } from "../HeaderComponent";

interface InvoiceItem {
  invoiceId: string;
  amount: string;
  isPaid: boolean;
  paymentMethod?: string;
  paidAmount?: string;
  items: number;
}

interface AppointmentDetail {
  doctor: string;
  timeSlot: string;
  invoices?: InvoiceItem[];
  services?: {
    name: string;
    amount: string;
  }[];
}

interface AppointmentDay {
  date: string;
  details: AppointmentDetail[];
}

interface AppointmentSummaryProps {
  patientName: string;
  patientId: string;
  appointmentCount: number;
  appointmentDays: AppointmentDay[];
  onBackPress: () => void;
}

const AppointmentSummary: React.FC<AppointmentSummaryProps> = ({
  patientName,
  patientId,
  appointmentCount,
  appointmentDays,
  onBackPress,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent
        title={"Appointment Summary"}
        rightButton={false}
        onBackPress={onBackPress}
      />
      <ScrollView>
        {/* Patient Info */}
        <View style={styles.patientInfoContainer}>
          <View style={styles.patientInfo}>
            <Image
              style={styles.avatar}
              source={require("../../assets/avatar.png")}
            />
            {/* <View style={styles.avatarContainer}>
              <View style={styles.avatar} />
            </View> */}
            <View style={styles.patientDetails}>
              <Text style={styles.appointmentCount}>
                {appointmentCount} Appointments
              </Text>
              <Text style={styles.patientName}>{patientName}</Text>
              <Text style={styles.patientLabel}>Patient</Text>
            </View>
          </View>
          <Text style={styles.patientId}>{patientId}</Text>
        </View>

        {/* Appointment Days */}
        {appointmentDays.map((day, dayIndex) => (
          <View key={`day-${dayIndex}`} style={styles.appointmentDayContainer}>
            <Text style={styles.dateHeader}>{day.date}</Text>

            {day.details.map((detail, detailIndex) => (
              <React.Fragment key={`detail-${dayIndex}-${detailIndex}`}>
                {/* Doctor Appointment */}
                <View style={styles.timelineItem}>
                  <View style={styles.timelineDot} />
                  <View style={styles.appointmentItem}>
                    <Text style={styles.doctorName}>{detail.doctor}</Text>
                    <View style={styles.timeSlot}>
                      <Text style={styles.timeSlotText}>{detail.timeSlot}</Text>
                    </View>
                  </View>
                </View>

                {/* Invoices */}
                {detail.invoices &&
                  detail.invoices.map((invoice, invoiceIndex) => (
                    <View
                      key={`invoice-${dayIndex}-${detailIndex}-${invoiceIndex}`}
                      style={styles.timelineItem}
                    >
                      <View style={styles.timelineDot} />
                      <View style={styles.invoiceContainer}>
                        <View style={styles.invoiceRow}>
                          <Text style={styles.invoiceId}>
                            {invoice.invoiceId}
                          </Text>
                          <Text style={styles.invoiceItemCount}>
                            {invoice.items} item
                          </Text>
                        </View>
                        <View style={styles.invoiceRow}>
                          <Text style={styles.invoiceLabel}>
                            {invoice.isPaid ? "Paid:" : "Invoiced:"}{" "}
                            {invoice.amount}
                          </Text>
                          {invoice.isPaid && invoice.paymentMethod && (
                            <Text style={styles.paymentMethod}>
                              {invoice.paymentMethod}
                            </Text>
                          )}
                        </View>
                      </View>
                    </View>
                  ))}

                {/* Services */}
                {detail.services &&
                  detail.services.map((service, serviceIndex) => (
                    <View
                      key={`service-${dayIndex}-${detailIndex}-${serviceIndex}`}
                      style={styles.timelineItem}
                    >
                      <View style={styles.timelineDot} />
                      <View style={styles.serviceContainer}>
                        <Text style={styles.serviceName}>{service.name}</Text>
                        <Text style={styles.serviceAmount}>
                          {service.amount}
                        </Text>
                      </View>
                    </View>
                  ))}
              </React.Fragment>
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 62,
    paddingHorizontal: "2%",
    backgroundColor: "#E8E9E9",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    // backgroundColor: "#fff",
  },
  backButton: {
    padding: 8,
  },
  backIcon: {
    fontSize: 24,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 8,
  },
  patientInfoContainer: {
    backgroundColor: "#fff",
    padding: 16,
    marginTop: 10,
    marginBottom: 8,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  patientInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  avatar: {
    width: 95,
    height: 95,
    borderRadius: 30,
  },
  patientDetails: {
    justifyContent: "center",
  },
  appointmentCount: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  patientName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 2,
  },
  patientLabel: {
    fontSize: 14,
    color: "#666",
  },
  patientId: {
    fontSize: 14,
    color: "#666",
  },
  appointmentDayContainer: {
    marginBottom: 16,
  },
  dateHeader: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 16,
  },
  timelineItem: {
    flexDirection: "row",
    paddingLeft: 16,
    marginBottom: 8,
  },
  timelineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#4CAF50",
    marginRight: 12,
    marginTop: 12,
  },
  appointmentItem: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: "500",
  },
  timeSlot: {
    backgroundColor: "#f0f0f0",
    borderRadius: 16,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  timeSlotText: {
    fontSize: 12,
    color: "#666",
  },
  invoiceContainer: {
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    padding: 16,
    flex: 1,
  },
  invoiceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  invoiceId: {
    fontSize: 16,
    fontWeight: "500",
  },
  invoiceItemCount: {
    fontSize: 14,
  },
  invoiceLabel: {
    fontSize: 14,
    color: "#666",
  },
  paymentMethod: {
    fontSize: 14,
    color: "#666",
  },
  serviceContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  serviceName: {
    fontSize: 16,
    fontWeight: "500",
  },
  serviceAmount: {
    fontSize: 16,
    fontWeight: "500",
  },
});

export default AppointmentSummary;
