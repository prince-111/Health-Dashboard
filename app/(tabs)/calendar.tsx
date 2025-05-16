import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import moment, { Moment } from "moment";
import {
  appointmentsCalendarData,
  doctorsList,
} from "@/server/data/CalendarData";

import { styles } from "@/components/calendar/styles";
// import { Appointment } from "@/components/calendar/AppointmentCard";
import { CalendarHeader } from "@/components/calendar/CalendarHeader";
import { CalendarStripWrapper } from "@/components/calendar/CalendarStripWrapper";
import { AppointmentList } from "@/components/calendar/AppointmentList";
import { DoctorDropdown } from "@/components/calendar/DoctorDropdown";
import { HeaderComponent } from "@/components/HeaderComponent";

const DoctorCalendarStrip: React.FC = ({navigation}) => {
  const [selectedDate, setSelectedDate] = useState<Moment>(
    moment("2025-04-24")
  );
  const [currentMonth, setCurrentMonth] = useState<Moment>(
    moment("2025-04-24")
  );
  const [selectedDoctor, setSelectedDoctor] = useState<string>("All Doctors");
  const [showDoctorDropdown, setShowDoctorDropdown] = useState<boolean>(false);
  const [appointments, setAppointments] = useState<
    {
      id: string;
      patientName: string;
      doctor: string;
      date: string;
      timeSlot: string;
      color: string;
    }[]
  >([]);

  useEffect(() => {
    const formattedDate = selectedDate.format("YYYY-MM-DD");
    const filteredAppointments = appointmentsCalendarData.filter(
      appointment => {
        const dateMatches = appointment.date === formattedDate;
        const doctorMatches =
          selectedDoctor === "All Doctors" ||
          appointment.doctor === selectedDoctor;
        return dateMatches && doctorMatches;
      }
    );
    setAppointments(filteredAppointments);
  }, [selectedDate, selectedDoctor]);

  const goToPreviousMonth = () => {
    const prevMonth = moment(currentMonth).subtract(1, "month");
    setCurrentMonth(prevMonth);
    updateSelectedDateForMonth(prevMonth);
  };

  const goToNextMonth = () => {
    const nextMonth = moment(currentMonth).add(1, "month");
    setCurrentMonth(nextMonth);
    updateSelectedDateForMonth(nextMonth);
  };

  const updateSelectedDateForMonth = (month: Moment) => {
    const firstDayOfMonth = moment(month).startOf("month");
    const appointmentsInMonth = appointmentsCalendarData.filter(
      appointment =>
        moment(appointment.date).format("YYYY-MM") === month.format("YYYY-MM")
    );

    if (appointmentsInMonth.length > 0) {
      appointmentsInMonth.sort((a, b) => moment(a.date).diff(moment(b.date)));
      setSelectedDate(moment(appointmentsInMonth[0].date));
    } else {
      setSelectedDate(firstDayOfMonth);
    }
  };

  const customDatesStylesFunc = (date: Moment) => {
    const formattedDate = date.format("YYYY-MM-DD");
    const hasAppointments = appointmentsCalendarData.some(
      appointment => appointment.date === formattedDate
    );
    const isSelectedDate =
      selectedDate && formattedDate === selectedDate.format("YYYY-MM-DD");

    if (isSelectedDate) {
      return {
        dateContainerStyle: styles.selectedDateContainer,
        dateNameStyle: { color: "white" },
        dateNumberStyle: { color: "white" },
      };
    } else if (hasAppointments) {
      return {
        dateContainerStyle: {
          borderWidth: 1,
          borderColor: "#84CC16",
          borderRadius: 8,
        },
      };
    }
    return {};
  };

  const currentMonthYearText = currentMonth.format("MMMM YYYY");

  return (
    <SafeAreaView style={styles.container}>
     <HeaderComponent
        title={"Calendar"}
        rightButton={false}
        onBackPress={() => {
          navigation.goBack();
        }}
      />
      <DoctorDropdown
        showDoctorDropdown={showDoctorDropdown}
        setShowDoctorDropdown={setShowDoctorDropdown}
        doctorsList={doctorsList}
        setSelectedDoctor={setSelectedDoctor}
      />
      <CalendarHeader
        currentMonthYearText={currentMonthYearText}
        goToPreviousMonth={goToPreviousMonth}
        goToNextMonth={goToNextMonth}
        selectedDoctor={selectedDoctor}
        setShowDoctorDropdown={setShowDoctorDropdown}
      />
      <CalendarStripWrapper
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        currentMonth={currentMonth}
        customDatesStylesFunc={customDatesStylesFunc}
      />
      <AppointmentList appointments={appointments} />
    </SafeAreaView>
  );
};

export default DoctorCalendarStrip;
