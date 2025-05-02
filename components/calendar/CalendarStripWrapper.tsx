import React from "react";
import CalendarStrip from "react-native-calendar-strip";
import moment, { Moment } from "moment";
import { styles } from "./styles";

interface CalendarStripWrapperProps {
  selectedDate: Moment;
  setSelectedDate: (date: Moment) => void;
  currentMonth: Moment;
  customDatesStylesFunc: (date: Moment) => {
    dateContainerStyle?: object;
    dateNameStyle?: object;
    dateNumberStyle?: object;
  };
}

export const CalendarStripWrapper: React.FC<CalendarStripWrapperProps> = ({
  selectedDate,
  setSelectedDate,
  currentMonth,
  customDatesStylesFunc,
}) => (
  <CalendarStrip
    scrollable
    style={styles.calendarStrip}
    calendarColor={"#FFFFFF"}
    highlightDateNumberStyle={styles.highlightDateNumber}
    highlightDateNameStyle={styles.highlightDateName}
    selectedDate={selectedDate}
    onDateSelected={date => setSelectedDate(date)}
    startingDate={moment(currentMonth).startOf("month")}
    useIsoWeekday={false}
    customDatesStyles={customDatesStylesFunc}
    highlightDateContainerStyle={styles.selectedDateContainer}
    maxDate={moment(currentMonth).endOf("month")}
    minDate={moment(currentMonth).startOf("month")}
    showMonth={false}
  />
);
