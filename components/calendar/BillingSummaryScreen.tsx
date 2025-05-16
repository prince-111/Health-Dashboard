import { HeaderComponent } from "@/components/HeaderComponent";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
} from "react-native";

const ArrowRightIcon = () => (
  <View
    style={{
      width: 20,
      height: 20,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <View
      style={{
        width: 7,
        height: 7,
        borderRightWidth: 2,
        borderTopWidth: 2,
        transform: [{ rotate: "45deg" }],
        borderColor: "#000",
      }}
    />
  </View>
);

//{ onContinue, onBack }
const BillingSummaryScreen = () => {

  const treatmentItems = [
    { id: 1, title: "2 Teeth", quantity: 1, price: "₹4,800.00" },
    { id: 2, title: "3-4 Teeth", quantity: 1, price: "₹4,800.00" },
    { id: 3, title: "3-4 Units", quantity: 1, price: "₹4,800.00" },
  ];


  return (
      <View style={styles.screen}>
        <HeaderComponent
          title={"Billing Summary"}
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
          <Text style={styles.verifyItemsText}>Verify items</Text>
        </TouchableOpacity>

        <ScrollView>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>
              Ensure all items are being billed correctly. Change invoiced
              amount or add discounts.
            </Text>

            <Text style={styles.sectionTitle}>Treatments & Products</Text>

            <View style={styles.treatmentList}>
              {treatmentItems.map(item => (
                <TouchableOpacity key={item.id} style={styles.treatmentItem}>
                  <View style={styles.treatmentDetails}>
                    <Text style={styles.treatmentTitle}>{item.title}</Text>
                    <Text style={styles.treatmentQuantity}>
                      x{item.quantity}
                    </Text>
                  </View>
                  <View style={styles.treatmentPrice}>
                    <Text style={styles.priceText}>{item.price}</Text>
                    <ArrowRightIcon />
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.discountContainer}>
            <TextInput
              style={styles.discountInput}
              placeholder="Add Discount Code here"
              placeholderTextColor="#777"
            />
            <TouchableOpacity style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.summaryContainer}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>GST</Text>
              <Text style={styles.summaryValue}>₹480.00</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Amount</Text>
              <Text style={styles.summaryValue}>₹4,800.00</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Invoiced Amount</Text>
              <Text style={styles.summaryValue}>₹14,800.00</Text>
            </View>
          </View>
        </ScrollView>

        <TouchableOpacity
          style={styles.continueButton}
          //   onPress={onContinue}
        >
          <Text style={styles.continueButtonText}>Continue to Next Step</Text>
          <View style={styles.arrowContainer}>
            <Image source={require("../../assets/forwardRight.png")} />
          </View>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 62,
    backgroundColor: "#E8E9E9",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
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
  infoText: {
    textAlign: "center",
    marginBottom: 16,
    paddingHorizontal: 20,
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 16,
  },
  treatmentList: {
    marginBottom: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E8E9E9",
    overflow: "hidden",
  },
  treatmentItem: {
    backgroundColor: "#f8fafc",
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E8E9E9",
  },
  treatmentDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  treatmentTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginRight: 8,
  },
  treatmentQuantity: {
    fontSize: 14,
    fontWeight: "400",
  },
  treatmentPrice: {
    flexDirection: "row",
    alignItems: "center",
  },
  priceText: {
    fontSize: 16,
    fontWeight: "600",
    marginRight: 8,
  },
  discountContainer: {
    backgroundColor: "#fff",
    padding: 12,
    flexDirection: "row",
    marginBottom: 24,
    marginHorizontal: "2%",
    borderRadius: 30,
  },
  discountInput: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    marginRight: 8,
  },
  submitButton: {
    backgroundColor: "#84CC16",
    borderRadius: 40,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  submitButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  summaryContainer: {
    backgroundColor: "#fff",
    borderRadius: 20,
    // padding: 16,
    marginBottom: 24,
    marginHorizontal: "2%",
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    padding: 14,
    borderBottomWidth: 1,
    borderColor: "#E8E9E9",
  },
  summaryLabel: {
    fontWeight: "400",
    fontSize: 16,
  },
  summaryValue: {
    fontWeight: "600",
    fontSize: 18,
  },
  continueButton: {
    backgroundColor: "#84CC16",
    borderRadius: 32,
    paddingVertical: 16,
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
    marginBottom: 16,
    marginHorizontal: "6%",
  },
  continueButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
  },
  arrowContainer: {
    width: 32,
    height: 50,
    marginEnd: 18,
  },
});

export default BillingSummaryScreen;