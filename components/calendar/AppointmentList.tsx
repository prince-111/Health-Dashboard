import React from "react";
import { FlatList, View, Text } from "react-native";
import { AppointmentCard } from "./AppointmentCard";
import { styles } from "./styles";
import { Appointment } from "./AppointmentCard";

interface AppointmentListProps {
  appointments: Appointment[];
}

export const AppointmentList: React.FC<AppointmentListProps> = ({
  appointments,
}) => (
  <FlatList
    data={appointments}
    renderItem={({ item }) => <AppointmentCard item={item} />}
    keyExtractor={item => item.id}
    style={styles.appointmentsContainer}
    showsVerticalScrollIndicator={false}
    ListEmptyComponent={
      <View style={styles.emptyListContainer}>
        <Text style={styles.emptyListText}>No appointments for this date</Text>
      </View>
    }
  />
);
