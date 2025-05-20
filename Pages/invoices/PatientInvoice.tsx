import { AppointmentItem } from '@/components/PatientAppointmentsList';
import FloatingButton from '@/components/FloatingButton';
import { HeaderComponent } from '@/components/HeaderComponent'
import PatientInvoiceLists from '@/components/PatientInvoiceLists';
import UniversalModal from '@/components/UniversalModal';
import React, { useState } from 'react'
import { SafeAreaView, Text, View, StyleSheet, Image, FlatList } from "react-native";
import InvoiceScreen from './AddPatientInvoice';
import InvoiceAddScreen from './AddPatientInvoice';

const PatientInvoice = () => {
  
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

  const handleButtonPress = () => {
    setIsActive(!isActive); 
    handleOpenAddModal(); 
  };


  const invoiceData = [
    {
      id: "1",
      doctor: "Dr. Abdul Moiz",
      date: "Monday, 26 July",
      invoiceNum: "INV9001",
      amount: "5000",
      patientNum: "P6498",
      note: "Detient teeth removal Detient teeth removal Detient teeth removal Detient teeth removal Detient teeth removal",
    },
    {
      id: "2",
      doctor: "Dr. Sarah Khan",
      date: "Tuesday, 27 July",
      invoiceNum: "INV9002",
      amount: "3000",
      patientNum: "P7392",
      note: "Scaling and polishing of teeth",
    },
    {
      id: "3",
      doctor: "Dr. Imran Ali",
      date: "Wednesday, 28 July",
      invoiceNum: "INV9003",
      amount: "4500",
      patientNum: "P8541",
      note: "Cavity filling and cleaning",
    },
    {
      id: "4",
      doctor: "Dr. Nadia Siddiqui",
      date: "Thursday, 29 July",
      invoiceNum: "INV9004",
      amount: "6000",
      patientNum: "P9684",
      note: "Tooth extraction and removal of gum tissue",
    },
  ];
  

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent
        title="Patient's Inovice"
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
          data={invoiceData}
          renderItem={({ item }) => (
            <PatientInvoiceLists
              item={item}
              handleOpenEditModal={handleOpenEditModal}
            />
          )}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
        />
      </View>

      <UniversalModal
        visible={showModal}
        onClose={handleCloseModal}
        title={currentAction === "add" ? "Create Invoice" : "Edit Invoice"}
        height="90%"
      >
        {/* {renderModalContent()} */}
        <InvoiceAddScreen />
      </UniversalModal>

      <FloatingButton onPress={handleButtonPress} isActive={isActive} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 62,
    paddingHorizontal: "2%",
    backgroundColor: "#E8E9E9",
  },
  contentContainer: {
    paddingBottom: 20,
    paddingHorizontal: 12,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
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
  list: {
    flex: 1,
    width: "100%",
  },
});

export default PatientInvoice;