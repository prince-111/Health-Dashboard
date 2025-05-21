import { HeaderComponent } from "@/components/HeaderComponent";
import React, { useState } from "react";
import { Image } from "react-native";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const PlusIcon = () => (
  <View
    style={{
      width: 24,
      height: 24,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <View style={{ width: 12, height: 2, backgroundColor: "#000" }} />
    <View
      style={{
        width: 2,
        height: 12,
        backgroundColor: "#000",
        position: "absolute",
      }}
    />
  </View>
);

const PaymentSummaryScreen = ({ navigation }) => {
  const [selectedCard, setSelectedCard] = useState("visa");

  const cards = [
    {
      id: "visa",
      image: require("../../assets/visa.png"),
      name: "Usman Zafar",
      lastDigits: "7267",
      selected: true,
    },
    {
      id: "mastercard",
      image: require("../../assets/masterCard.png"),
      name: "Usman Zafar",
      lastDigits: "7267",
      selected: false,
    },
  ];

  return (
    <View style={styles.screen}>
      <HeaderComponent
        title={"Payment Summary"}
        rightButton={false}
        onBackPress={() => {
          navigation.goBack();
        }}
      />

      <View style={styles.progressContainer}>
        <Image source={require("../../assets/Union2.png")} />
        <Image source={require("../../assets/Union2.png")} />
        <Image source={require("../../assets/Union.png")} />
      </View>

      <TouchableOpacity style={styles.recordPaymentButton}>
        <Text style={styles.recordPaymentText}>Record payment</Text>
      </TouchableOpacity>
      <ScrollView>
        <View style={styles.invoiceContainer}>
          <View>
            <Text style={styles.invoiceText}>
              Save the payment made against your invoice. Partial Payment?
              Simply tap to edit the amount.
            </Text>
          </View>
          <View style={styles.invoiceRow}>
            <Text style={styles.invoiceLabel}>INV8602</Text>
            <Text style={styles.invoiceDate}>20 Mar, 2024</Text>
          </View>
          <View style={styles.invoiceRow}>
            <Text style={styles.invoiceLabel}>Invoiced Amount</Text>
            <Text style={styles.invoiceAmount}>₹14,800.00</Text>
          </View>
          <View style={styles.invoiceRow}>
            <Text style={styles.invoiceLabel}>Payment Amount</Text>
            <Text style={styles.invoiceAmount}>₹14,800.00</Text>
          </View>
        </View>

        <View style={styles.paymentMethodsContainer}>
          <View style={styles.paymentMethodButton}>
            <Image source={require("../../assets/gPay.png")} />
          </View>
          <View style={styles.paymentMethodButton}>
            <Image source={require("../../assets/applePay.png")} />
          </View>
          <View style={styles.paymentMethodButton}>
            <Image source={require("../../assets/vimeo.png")} />
          </View>
          <View style={styles.paymentMethodButton}>
            <Image source={require("../../assets/strip.png")} />
          </View>
          <View style={styles.paymentMethodButton}>
            <Image source={require("../../assets/cards.png")} />
          </View>
        </View>

        <View style={styles.cardsContainer}>
          {cards.map(card => (
            <TouchableOpacity
              key={card.id}
              style={[
                styles.cardItem,
                selectedCard === card.id && styles.selectedCard,
              ]}
              onPress={() => setSelectedCard(card.id)}
            >
              <View style={styles.cardInfo}>
                <Image source={card.image} />
                <View>
                  <Text style={styles.cardName}>{card.name}</Text>
                  <Text style={styles.cardNumber}>
                    ********{card.lastDigits}
                  </Text>
                </View>
              </View>
              {selectedCard === card.id && (
                <View style={styles.checkCircle}>
                  <Image source={require("../../assets/CheckIcon.png")} />
                </View>
              )}
            </TouchableOpacity>
          ))}

          <TouchableOpacity>
            <View style={styles.addCardButton}>
              <PlusIcon />
              <View>
                <Text style={styles.addCardText}>Add new card</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.securityNotice}>
          <Image
            // style={styles.securityIcon}
            source={require("../../assets/security.png")}
          />
          <Text style={styles.securityText}>
            Adhere entirely to the data security standards of the payment card
            industry.
          </Text>
        </View>

        <View style={styles.collectPaymentButton}>
          <Text style={styles.collectPaymentText}>Collect Payment</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 62,
    backgroundColor: "#E8E9E9",
    paddingHorizontal: "2%",
  },
  headerTitleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginBottom: 10,
    width: "60%",
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
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    columnGap: 10,
    marginTop: 10,
  },
  progressDot1: {
    width: 14,
    height: 14,
    borderRadius: 12,
    backgroundColor: "#8CD867",
    marginHorizontal: 8,
  },
  progressDot2: {
    width: 14,
    height: 14,
    borderRadius: 12,
    backgroundColor: "#8CD867",
    marginHorizontal: 8,
  },
  progressDot3: {
    width: 14,
    height: 14,
    borderRadius: 12,
    backgroundColor: "#D2EFC4",
    marginHorizontal: 8,
  },
  activeDot: {
    backgroundColor: "#8CD867",
  },
  recordPaymentButton: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 16,
  },
  recordPaymentText: {
    color: "#000",
    fontWeight: "500",
  },
  invoiceContainer: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 16,
    marginBottom: 24,
  },
  invoiceText: {
    textAlign: "center",
    marginBottom: 38,
    fontSize: 14,
    fontWeight: "400",
  },
  invoiceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  invoiceLabel: {
    fontWeight: "400",
    fontSize: 16,
  },
  invoiceDate: {
    fontWeight: "600",
    fontSize: 16,
  },
  invoiceAmount: {
    fontWeight: "600",
    fontSize: 16,
  },
  paymentMethodsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 16,
    columnGap: 10,
    rowGap: 14,
  },
  paymentMethodButton: {
    backgroundColor: "#fff",
    borderRadius: 6,
    width: "22%",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  paymentMethodText: {
    fontWeight: "500",
  },
  cardsContainer: {
    marginBottom: 16,
  },
  cardItem: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectedCard: {
    backgroundColor: "#EFF6FF",
  },
  cardInfo: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
  },
  cardType: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0044CC",
  },
  cardName: {
    fontSize: 16,
    fontWeight: "700",
    marginVertical: 4,
  },
  cardNumber: {
    fontSize: 14,
    fontWeight: "600",
    color: "#71717A",
  },
  checkCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#8CD867",
    justifyContent: "center",
    alignItems: "center",
  },
  addCardButton: {
    backgroundColor: "#fff",
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    marginBottom: 16,
    width: 150,
    padding: 12,
    borderRadius: 308,
  },
  addCardText: {
    fontSize: 14,
    color: "#475569",
    fontWeight: "600",
    marginLeft: 8,
  },
  securityNotice: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    backgroundColor: "#F2F9EB",
    padding: 17,
    borderRadius: 8,
    height: 74,
  },
  securityText: {
    marginLeft: 8,
    fontSize: 13,
    fontWeight: "500",
    color: "#001809",
    flex: 1,
  },
  collectPaymentButton: {
    backgroundColor: "#84CC16",
    borderRadius: 34,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: 16,
    opacity: 0.8,
  },
  collectPaymentText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default PaymentSummaryScreen;
