import { HeaderComponent } from "@/components/HeaderComponent";
import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Modal,
  FlatList,
  Button,
  Image,
} from "react-native";

const PatientViewDetails = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    abhaId: "",
    bloodGroup: "",
    weight: "",
    height: "",
    gender: "",
    dob: "",
    occupation: "",
    referredBy: "",
    streetAddress: "",
    pincode: "",
    city: "",
    allergies: "",
    habits: "",
    medicalHistory: "",
  });

  const [focusedField, setFocusedField] = useState(null);
  const [showGenderDropdown, setShowGenderDropdown] = useState(false);
  const [showReferredByDropdown, setShowReferredByDropdown] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const genders = ["Male", "Female", "Other", "Prefer not to say"];
  const referredByOptions = [
    "Self",
    "Doctor",
    "Hospital",
    "Friend/Family",
    "Other",
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFocus = field => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  // Basic date picker using React Native's built-in DatePickerAndroid (for Android)
  // Note: For iOS, you would need a different approach or a library
  const showDatePickerModal = () => {
    setShowDatePicker(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent
        title="Patient View Details"
        rightButton={false}
        onBackPress={() => {
          // navigation.goBack();
        }}
      />

      <ScrollView
        style={styles.listContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Full Name */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={[
              styles.input,
              focusedField === "fullName" && styles.focusedInput,
            ]}
            placeholder="Enter full name"
            value={formData.fullName}
            onChangeText={text => handleInputChange("fullName", text)}
            onFocus={() => handleFocus("fullName")}
            onBlur={handleBlur}
          />
        </View>

        {/* Phone Number */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={[
              styles.input,
              focusedField === "phoneNumber" && styles.focusedInput,
            ]}
            placeholder="Enter phone number"
            value={formData.phoneNumber}
            onChangeText={text => handleInputChange("phoneNumber", text)}
            keyboardType="phone-pad"
            onFocus={() => handleFocus("phoneNumber")}
            onBlur={handleBlur}
          />
        </View>

        {/* ABHA ID */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>ABHA ID</Text>
          <TextInput
            style={[
              styles.input,
              focusedField === "abhaId" && styles.focusedInput,
            ]}
            placeholder="Enter ABHA ID"
            value={formData.abhaId}
            onChangeText={text => handleInputChange("abhaId", text)}
            onFocus={() => handleFocus("abhaId")}
            onBlur={handleBlur}
          />
        </View>

        {/* Blood Group */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Blood Group</Text>
          <TextInput
            style={[
              styles.input,
              focusedField === "bloodGroup" && styles.focusedInput,
            ]}
            placeholder="e.g. O-"
            value={formData.bloodGroup}
            onChangeText={text => handleInputChange("bloodGroup", text)}
            onFocus={() => handleFocus("bloodGroup")}
            onBlur={handleBlur}
          />
        </View>

        {/* Weight and Height Row */}
        <View>
          <View style={[styles.inputContainer, styles.flex1]}>
            <Text style={styles.label}>Weight (kg)</Text>
            <TextInput
              style={[
                styles.input,
                focusedField === "weight" && styles.focusedInput,
              ]}
              placeholder="e.g. 60"
              value={formData.weight}
              onChangeText={text => handleInputChange("weight", text)}
              keyboardType="numeric"
              onFocus={() => handleFocus("weight")}
              onBlur={handleBlur}
            />
          </View>

          <View style={[styles.inputContainer, styles.flex1]}>
            <Text style={styles.label}>Height (ft)</Text>
            <TextInput
              style={[
                styles.input,
                focusedField === "height" && styles.focusedInput,
              ]}
              placeholder="e.g. 5.5"
              value={formData.height}
              onChangeText={text => handleInputChange("height", text)}
              keyboardType="numeric"
              onFocus={() => handleFocus("height")}
              onBlur={handleBlur}
            />
          </View>
        </View>

        {/* Gender Dropdown */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Gender</Text>
          <TouchableOpacity
            style={[
              styles.input,
              styles.dropdownTrigger,
              focusedField === "gender" && styles.focusedInput,
            ]}
            onPress={() => {
              setShowGenderDropdown(true);
              handleFocus("gender");
            }}
          >
            <Text
              style={
                formData.gender ? styles.selectedValue : styles.placeholder
              }
            >
              {formData.gender || "Select gender"}
            </Text>
            <Image
              source={require("../../assets/dropdown.png")} // Add your own dropdown icon image
              style={styles.dropdownIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Gender Dropdown Modal */}
        <Modal
          visible={showGenderDropdown}
          transparent={true}
          animationType="fade"
        >
          <View style={styles.modalOverlay}>
            <View style={styles.dropdownContainer}>
              <FlatList
                data={genders}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.dropdownItem}
                    onPress={() => {
                      handleInputChange("gender", item);
                      setShowGenderDropdown(false);
                    }}
                  >
                    <Text>{item}</Text>
                  </TouchableOpacity>
                )}
              />
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setShowGenderDropdown(false)}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Date of Birth */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Date of Birth</Text>
          <TouchableOpacity
            style={[
              styles.input,
              styles.dropdownTrigger,
              focusedField === "dob" && styles.focusedInput,
            ]}
            onPress={() => {
              setShowDatePicker(true);
              handleFocus("dob");
            }}
          >
            <Text>{formData.dob || "Select date"}</Text>
            <Image
              source={require("../../assets/calendar.png")} // Add your own calendar icon image
              style={styles.dropdownIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Simple Date Picker Modal */}
        {showDatePicker && (
          <Modal
            visible={showDatePicker}
            transparent={true}
            animationType="fade"
          >
            <View style={styles.modalOverlay}>
              <View style={styles.datePickerContainer}>
                <Text style={styles.datePickerTitle}>Select Date</Text>
                <View style={styles.datePickerButtons}>
                  <Button
                    title="Cancel"
                    onPress={() => setShowDatePicker(false)}
                  />
                  <Button
                    title="OK"
                    onPress={() => {
                      // In a real app, you would implement actual date selection here
                      handleInputChange("dob", new Date().toLocaleDateString());
                      setShowDatePicker(false);
                    }}
                  />
                </View>
              </View>
            </View>
          </Modal>
        )}

        {/* Occupation */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Occupation</Text>
          <TextInput
            style={[
              styles.input,
              focusedField === "occupation" && styles.focusedInput,
            ]}
            placeholder="Enter occupation"
            value={formData.occupation}
            onChangeText={text => handleInputChange("occupation", text)}
            onFocus={() => handleFocus("occupation")}
            onBlur={handleBlur}
          />
        </View>

        {/* Referred By Dropdown */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Referred By</Text>
          <TouchableOpacity
            style={[
              styles.input,
              styles.dropdownTrigger,
              focusedField === "referredBy" && styles.focusedInput,
            ]}
            onPress={() => {
              setShowReferredByDropdown(true);
              handleFocus("referredBy");
            }}
          >
            <Text
              style={
                formData.referredBy ? styles.selectedValue : styles.placeholder
              }
            >
              {formData.referredBy || "Select referral source"}
            </Text>
            <Image
              source={require("../../assets/dropdown.png")} // Add your own dropdown icon image
              style={styles.dropdownIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Referred By Dropdown Modal */}
        <Modal
          visible={showReferredByDropdown}
          transparent={true}
          animationType="fade"
        >
          <View style={styles.modalOverlay}>
            <View style={styles.dropdownContainer}>
              <FlatList
                data={referredByOptions}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.dropdownItem}
                    onPress={() => {
                      handleInputChange("referredBy", item);
                      setShowReferredByDropdown(false);
                    }}
                  >
                    <Text>{item}</Text>
                  </TouchableOpacity>
                )}
              />
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setShowReferredByDropdown(false)}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Street Address */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Street Address</Text>
          <TextInput
            style={[
              styles.input,
              focusedField === "streetAddress" && styles.focusedInput,
            ]}
            placeholder="Enter street address"
            value={formData.streetAddress}
            onChangeText={text => handleInputChange("streetAddress", text)}
            onFocus={() => handleFocus("streetAddress")}
            onBlur={handleBlur}
          />
        </View>

        {/* Pincode and City Row */}
          <View style={[styles.inputContainer, styles.flex1]}>
            <Text style={styles.label}>City</Text>
            <TextInput
              style={[
                styles.input,
                focusedField === "city" && styles.focusedInput,
              ]}
              placeholder="Enter city"
              value={formData.city}
              onChangeText={text => handleInputChange("city", text)}
              onFocus={() => handleFocus("city")}
              onBlur={handleBlur}
            />
          </View>

          <View style={[styles.inputContainer, styles.flex1]}>
            <Text style={styles.label}>Pincode</Text>
            <TextInput
              style={[
                styles.input,
                focusedField === "pincode" && styles.focusedInput,
              ]}
              placeholder="Enter pincode"
              value={formData.pincode}
              onChangeText={text => handleInputChange("pincode", text)}
              keyboardType="numeric"
              onFocus={() => handleFocus("pincode")}
              onBlur={handleBlur}
            />
          </View>

        {/* Allergies */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Allergies</Text>
          <TextInput
            style={[
              styles.input,
              focusedField === "allergies" && styles.focusedInput,
            ]}
            placeholder="List any allergies"
            value={formData.allergies}
            onChangeText={text => handleInputChange("allergies", text)}
            onFocus={() => handleFocus("allergies")}
            onBlur={handleBlur}
          />
        </View>

        {/* Habits */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Habits</Text>
          <TextInput
            style={[
              styles.input,
              focusedField === "habits" && styles.focusedInput,
            ]}
            placeholder="e.g. Smoking, Alcohol"
            value={formData.habits}
            onChangeText={text => handleInputChange("habits", text)}
            onFocus={() => handleFocus("habits")}
            onBlur={handleBlur}
          />
        </View>

        {/* Medical History */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Medical History</Text>
          <TextInput
            style={[
              styles.input,
              styles.multilineInput,
              focusedField === "medicalHistory" && styles.focusedInput,
            ]}
            placeholder="Describe medical history"
            value={formData.medicalHistory}
            onChangeText={text => handleInputChange("medicalHistory", text)}
            multiline={true}
            numberOfLines={4}
            onFocus={() => handleFocus("medicalHistory")}
            onBlur={handleBlur}
          />
        </View>

        {/* Save Changes Button */}
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => console.log("Form data:", formData)}
        >
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
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
  listContainer: {
    backgroundColor: "#fff",
    marginTop: 20,
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
    fontWeight: "500",
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  focusedInput: {
    borderColor: "#4CAF50",
    borderWidth: 2,
  },
  flex1: {
    flex: 1,
  },
  dropdownTrigger: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 10,
  },
  dropdownContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    width: "80%",
    maxHeight: "50%",
    alignSelf: "center",
    marginTop: "30%",
  },
  dropdownItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  placeholder: {
    color: "#999",
  },
  selectedValue: {
    color: "#000",
  },
  dropdownIcon: {
    width: 20,
    height: 20,
  },
  multilineInput: {
    height: 100,
    textAlignVertical: "top",
    paddingTop: 12,
  },
  saveButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 40,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  closeButton: {
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    alignItems: "center",
  },
  closeButtonText: {
    color: "#4CAF50",
    fontWeight: "bold",
  },
  datePickerContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 20,
    width: "80%",
  },
  datePickerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  datePickerButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default PatientViewDetails;
