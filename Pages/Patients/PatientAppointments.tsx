import { PatientAppointmentsList } from '@/components/PatientAppointmentsList';
import FloatingButton from '@/components/FloatingButton';
import { HeaderComponent } from '@/components/HeaderComponent';
import React, { useState } from 'react'
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import UniversalModal from '@/components/UniversalModal';

const PatientAppointments = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentAction, setCurrentAction] = useState<"add" | "edit" | null>(
    null
  );

  const [isActive, setIsActive] = useState(false);

  const handleOpenAddModal = () => {
    setCurrentAction("add");
    setShowModal(true);
  };

  const handleOpenEditModal = () => {
    setCurrentAction("edit");
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const appointments = [
    {
      id: "1",
      doctor: "Dr. Abdul Moiz",
      specialty: "Plastic Surgeon",
      date: "Monday, 26 July",
      time: "09:00 - 10:00",
    },
    {
      id: "2",
      doctor: "Dr. Abdul Moiz",
      specialty: "Plastic Surgeon",
      date: "Monday, 26 July",
      time: "09:00 - 10:00",
    },
    {
      id: "3",
      doctor: "Dr. Abdul Moiz",
      specialty: "Plastic Surgeon",
      date: "Monday, 26 July",
      time: "09:00 - 10:00",
    },
  ];

  const renderModalContent = () => {
    if (currentAction === "add") {
      return (
        <View style={styles.formContainer}>
          <Text style={styles.label}>This is the ADD form</Text>
          <View style={styles.inputPlaceholder}>
            <Text style={styles.placeholderText}>Name Input</Text>
          </View>
          <View style={styles.inputPlaceholder}>
            <Text style={styles.placeholderText}>Description Input</Text>
          </View>
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Add Item</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (currentAction === "edit") {
      return (
        <View style={styles.formContainer}>
          <Text style={styles.label}>This is the EDIT form</Text>
          <View style={styles.inputPlaceholder}>
            <Text style={styles.placeholderText}>Edit Name (prefilled)</Text>
          </View>
          <View style={styles.inputPlaceholder}>
            <Text style={styles.placeholderText}>
              Edit Description (prefilled)
            </Text>
          </View>
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Update Item</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return null;
  };

  const handleButtonPress = () => {
    setIsActive(!isActive); // Toggle the active state
    handleOpenAddModal(); // Open your modal
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent
        title="Patient Appointments"
        rightButton={false}
        onBackPress={() => {
          // navigation.goBack();
        }}
      />
      {/* <View style={styles.searchMainContainer}>
        <View style={styles.searchContainer}>
          <Text style={styles.searchText}>Search here</Text>
        </View>
      </View> */}

      <View style={styles.FilterContainer}>
        <Text style={styles.allList}>{/* All List(3) */}</Text>

        <View style={styles.filterImageContainer}>
          <Image
            style={styles.filterImage}
            source={require("../../assets/filter.png")}
          />
          <Text style={styles.filter}>Filter</Text>
        </View>
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={appointments}
          renderItem={({ item }) => (
            <PatientAppointmentsList
              item={item}
              handleOpenEditModal={handleOpenEditModal}
            />
          )}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
      </View>

      <UniversalModal
        visible={showModal}
        onClose={handleCloseModal}
        title={currentAction === "add" ? "Add Appointment" : "Edit Appointment"}
        height="60%"
      >
        {renderModalContent()}
      </UniversalModal>

      <FloatingButton onPress={handleButtonPress} isActive={isActive} />
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
  searchMainContainer: {
    backgroundColor: "#fff",
    borderRadius: 20,
    marginTop: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1F5F9",
    borderRadius: 24,
    padding: 12,
    margin: 8,
    marginBottom: 16,
    height: 60,
  },
  searchText: {
    color: "#888",
    marginLeft: 8,
  },
  listContainer: {
    backgroundColor: "#fff",
    paddingTop: 12,
    paddingBottom: 4,
    height: "82%",
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  FilterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  allList: {
    fontSize: 14,
    fontWeight: "400",
  },
  filter: {
    fontSize: 18,
    fontWeight: "600",
  },
  filterImageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    alignItems: "center",
    backgroundColor: "#F0F0F5",
    borderRadius: 12,
    padding: 10,
  },
  filterImage: {
    width: 20,
    height: 20,
  },
});


export default PatientAppointments;