import FloatingButton from '@/components/FloatingButton';
import { HeaderComponent } from '@/components/HeaderComponent';
import UniversalModal from '@/components/UniversalModal';
import React, { useState } from 'react'
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  Switch,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import PatientPaymentLists from './PatientPaymentLists';
import AddToBillScreen from '@/components/calendar/AddToBillScreen';
import PatientInvoiceLists from '@/components/PatientInvoiceLists';
import { TextInput } from 'react-native';
import AddPatientPayment from './AddPatientPayment';


const PatientPayments = () => {

    const [showModal, setShowModal] = useState(false);
      const [currentAction, setCurrentAction] = useState<"add" | "edit" | null>(
        null
      );
      const [isActive, setIsActive] = useState(false);

      const [formData, setFormData] = useState({
        patient: "Bruce",
        date: "05/18/2025",
        treatment: "",
        amount: "0",
        invoiceNumber: "",
        advancePayment: false,
        paymentMethod: "",
      });

      const [focusedField, setFocusedField] = useState(null);

      const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
      };

      const handleFocus = field => {
        setFocusedField(field);
      };

      const handleBlur = () => {
        setFocusedField(null);
      };
    
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
    

    const paymentData = [
      {
        id: "1",
        doctor: "Dr. Abdul Moiz",
        date: "Monday, 26 July",
        invoiceNum: "INV9001",
        amount: "5000",
        receiptNum: "REC-20250516-None",
        method: "Cash",
      },
      {
        id: "2",
        doctor: "Dr. Sarah Khan",
        date: "Tuesday, 27 July",
        invoiceNum: "INV9002",
        amount: "3000",
        receiptNum: "REC-20250516-None",
        method: "Cash",
      },
      {
        id: "3",
        doctor: "Dr. Imran Ali",
        date: "Wednesday, 28 July",
        invoiceNum: "INV9003",
        amount: "4500",
        receiptNum: "REC-20250516-None",
        method: "Cash",
      },
      {
        id: "4",
        doctor: "Dr. Nadia Siddiqui",
        date: "Thursday, 29 July",
        invoiceNum: "INV9004",
        amount: "6000",
        receiptNum: "REC-20250516-None",
        method: "Cash",
      },
    ];


  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent
        title="Patient's Payment"
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
          data={paymentData}
          renderItem={({ item }) => (
            <PatientPaymentLists
              item={item}
              // handleOpenEditModal={handleOpenEditModal}
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
        title={currentAction === "add" ? "New Payment" : "Edit Payment"}
        height="85%"
      >
        {currentAction === "add" && (
          <>
         <AddPatientPayment 
          handleCloseModal={handleCloseModal}
         />
          </>
        )}
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
export default PatientPayments