import { HeaderComponent } from '@/components/HeaderComponent';
import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";

interface MedicationProps {
  // You can extend this with additional props as needed
}



const MedicineDosage:React.FC<MedicationProps> = () => {
  // State for medication selection
  const [selectedMedication, setSelectedMedication] = useState({
    label: "Tablet Acetaminophen 400mg",
    value: "1",
    description: "400 mg",
  });

  // State for dosage timings
  const [morningDose, setMorningDose] = useState(false);
  const [noonDose, setNoonDose] = useState(false);
  const [nightDose, setNightDose] = useState(false);

  // State for before/after food
  const [afterFood, setAfterFood] = useState(true);

  // State for duration
  const [duration, setDuration] = useState(1);
  const [durationType, setDurationType] = useState("Days");

  // State for instructions
  const [instructions, setInstructions] = useState("");

  // Dropdown data
  const medications = [
    { label: "Tablet Acetaminophen 400mg", value: "1", description: "400 mg" },
    { label: "Tablet Ibuprofen 200mg", value: "2", description: "200 mg" },
    { label: "Tablet Aspirin 325mg", value: "3", description: "325 mg" },
  ];

  const durationTypes = [
    { label: "Days", value: "Days" },
    { label: "Weeks", value: "Weeks" },
    { label: "Months", value: "Months" },
  ];


  return (
    <View style={styles.container}>
      <HeaderComponent
        title={"Medicine"}
        rightButton={false}
        onBackPress={() => {
          // navigation.goBack();
        }}
      />
      <View style={styles.progressContainer}>
        <Image source={require("../../assets/Union2.png")} />
        <Image source={require("../../assets/Union.png")} />
        <Image source={require("../../assets/Union2.png")} />
      </View>

      <TouchableOpacity style={styles.verifyItemsButton}>
        <Text style={styles.verifyItemsText}>Set Dosage Duration</Text>
      </TouchableOpacity>

      <ScrollView style={styles.scrollContainer}>
        {/* Skip this step section */}
        <View style={styles.skipStepContainer}>
          <Text style={styles.skipStepText}>
            Skip this step by saving drug templates
          </Text>

          {/* Medication Dropdown */}
          <View style={styles.dropdownContainer}>
            <Dropdown
              style={styles.dropdown}
              data={medications}
              labelField="label"
              valueField="value"
              value={selectedMedication.value}
              onChange={item => {
                setSelectedMedication(item);
              }}
              renderItem={item => (
                <View style={styles.dropdownItem}>
                  <Text style={styles.dropdownItemLabel}>{item.label}</Text>
                  <Text style={styles.dropdownItemDescription}>
                    {item.description}
                  </Text>
                </View>
              )}
              renderLeftIcon={() => null}
              renderRightIcon={() => (
                <Image
                  style={styles.dropdownIcon}
                  source={require("../../assets/dropdown.png")}
                />
              )}
            />
          </View>
        </View>

        {/* Dosage & Frequency section */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Dosage & Frequency</Text>
            <TouchableOpacity>
              <Text style={styles.customizeText}>Customize</Text>
            </TouchableOpacity>
          </View>

          {/* Time of day selection */}
          <View style={styles.timeSelectionContainer}>
            <View style={styles.timeLabelContainer}>
              <TouchableOpacity
                style={[
                  styles.timeOption,
                  morningDose && styles.timeOptionSelected,
                ]}
                onPress={() => setMorningDose(!morningDose)}
              >
                <Text style={styles.plusIcon}>{morningDose ? "✓" : "+"}</Text>
              </TouchableOpacity>
              <Text style={styles.timeLabel}>Morning</Text>
            </View>

            <View style={styles.timeLabelContainer}>
              <TouchableOpacity
                style={[
                  styles.timeOption,
                  noonDose && styles.timeOptionSelected,
                ]}
                onPress={() => setNoonDose(!noonDose)}
              >
                <Text style={styles.plusIcon}>{noonDose ? "✓" : "+"}</Text>
              </TouchableOpacity>
              <Text style={styles.timeLabel}>Noon</Text>
            </View>

            <View style={styles.timeLabelContainer}>
              <TouchableOpacity
                style={[
                  styles.timeOption,
                  nightDose && styles.timeOptionSelected,
                ]}
                onPress={() => setNightDose(!nightDose)}
              >
                <Text style={styles.plusIcon}>{nightDose ? "✓" : "+"}</Text>
              </TouchableOpacity>
              <Text style={styles.timeLabel}>Night</Text>
            </View>
          </View>
        </View>
        {/* Before/After food selection */}
        <View style={styles.foodTimingContainer}>
          <TouchableOpacity
            style={[styles.beforeFood, !afterFood && styles.foodOptionSelected]}
            onPress={() => setAfterFood(false)}
          >
            <Text
              style={[
                styles.foodOptionText,
                !afterFood && styles.foodSelectedText,
              ]}
            >
              Before Food
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.foodOption, afterFood && styles.foodOptionSelected]}
            onPress={() => setAfterFood(true)}
          >
            <Text
              style={[
                styles.foodOptionText,
                afterFood && styles.foodSelectedText,
              ]}
            >
              After Food
            </Text>
          </TouchableOpacity>
        </View>

        {/* Durations section */}
        <View style={styles.sectionDurations}>
          <Text style={styles.sectionTitle}>Durations</Text>

          <View style={styles.durationContainer}>
            {/* Duration type dropdown */}
            <View style={styles.durationTypeContainer}>
              <Dropdown
                style={styles.durationDropdown}
                data={durationTypes}
                labelField="label"
                valueField="value"
                value={durationType}
                onChange={item => {
                  setDurationType(item.value);
                }}
                renderRightIcon={() => (
                  <Image
                    style={styles.dropdownIcon}
                    source={require("../../assets/dropdown.png")}
                  />
                )}
              />
            </View>

            {/* Duration value control */}
            <View style={styles.durationValueContainer}>
              <TouchableOpacity
                style={styles.durationButton}
                onPress={() => duration > 1 && setDuration(duration - 1)}
              >
                <Text style={styles.durationButtonText}>−</Text>
              </TouchableOpacity>

              <View style={styles.durationValueDisplay}>
                <Text style={styles.durationValue}>{duration}</Text>
              </View>

              <TouchableOpacity
                style={styles.durationButton}
                onPress={() => setDuration(duration + 1)}
              >
                <Text style={styles.durationButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Instructions section */}
        <View style={styles.sectionDurations}>
          <Text style={styles.sectionTitle}>Instructions</Text>
          <TextInput
            style={styles.instructionsInput}
            placeholder="Type here"
            multiline
            value={instructions}
            onChangeText={setInstructions}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 62,
    backgroundColor: "#E8E9E9",
    paddingHorizontal: "2%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 16,
  },
  backButtonContainer: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    marginRight: 16,
  },
  headerTitleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginBottom: 10,
    width: "70%",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    columnGap: 10,
    marginTop: 10,
  },
  infoContainer: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 8,
    marginBottom: 16,
    marginHorizontal: "2%",
  },

  activeDot: {
    backgroundColor: "#8CD867",
  },
  verifyItemsButton: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 16,
  },
  verifyItemsText: {
    color: "#000",
    fontWeight: "500",
  },
  skipStepContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    marginTop: 15,
    padding: 15,
  },
  skipStepText: {
    fontSize: 14,
    fontWeight: "400",
    color: "#000000",
    textAlign: "center",
    marginBottom: 10,
  },
  dropdownContainer: {
    backgroundColor: "#F1F5F9",
    borderRadius: 12,
    marginTop: 5,
  },
  dropdown: {
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  dropdownItem: {
    padding: 15,
    flexDirection: "column",
  },
  dropdownItemLabel: {
    fontSize: 16,
    color: "#333",
  },
  dropdownItemDescription: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
  dropdownIcon: {
    width: 24,
    height: 24,
  },
  sectionContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    marginTop: 15,
    padding: 15,

    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.18,
    // shadowRadius: 1.0,
    // elevation: 1,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  sectionDurations: {
    marginTop: 15,
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000000",
  },
  customizeText: {
    fontSize: 18,
    color: "#84CC16",
    fontWeight: "700",
  },
  timeSelectionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  timeLabelContainer: {
    width: "32%",
  },
  timeOption: {
    backgroundColor: "#F1F5F9",
    borderRadius: 10,
    // width: "30%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  timeOptionSelected: {
    backgroundColor: "#E8F4D9",
  },
  plusIcon: {
    fontSize: 24,
    fontWeight: "800",
    color: "#8CC63F",
    marginBottom: 5,
  },
  timeLabel: {
    marginTop: 5,
    textAlign: "center",
    fontSize: 16,
    color: "#333",
  },
  foodTimingContainer: {
    flexDirection: "row",
    // justifyContent: "space-between",
    gap: 14,
    // backgroundColor: "#F5F7FA",
    borderRadius: 25,
    height: 45,
    // overflow: "hidden",
    marginTop: 16,
    width: "70%",
  },
  beforeFoodText: {
    fontSize: 16,
    backgroundColor: "#F5F7FA",
    padding: 12,
    color: "#333",
    fontWeight: "500",
  },
  beforeFood: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    height: 44,
  },
  foodOption: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F7FA",
    borderRadius: 30,
    height: 44,
  },
  foodOptionSelected: {
    flex: 1,
    backgroundColor: "#8CC63F",
  },
  foodSelectedText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "500",
  },
  foodOptionText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
  durationContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  durationTypeContainer: {
    width: "30%",
    marginRight: 10,
  },
  durationDropdown: {
    height: 50,
    borderRadius: 10,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
  },
  durationValueContainer: {
    flex: 1,
    flexDirection: "row",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
  },
  durationButton: {
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  durationButtonText: {
    backgroundColor: "#F1F5F9",
    padding: 3,
    paddingHorizontal: 10,
    borderRadius: 13,
    fontSize: 24,
    color: "#666",
  },
  durationValueDisplay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  durationValue: {
    fontSize: 18,
    color: "#333",
  },
  instructionsInput: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    height: 150,
    marginTop: 10,
    color: "#333",
    textAlignVertical: "top",
  },
});

export default MedicineDosage