import { HeaderComponent } from "@/components/HeaderComponent";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  Dimensions,
  StatusBar,
} from "react-native";

const { width, height } = Dimensions.get("window");

const InvoiceDetails = () => {
  // Receipt item component
  const ReceiptItem = ({
    title,
    quantity,
    price,
  }: {
    title: string;
    quantity: string;
    price: string;
  }) => (
    <View style={styles.receiptItem}>
      <View>
        <Text style={styles.itemTitle}>{title}</Text>
      </View>
      <View>
        <Text style={styles.itemQuantity}>{quantity}</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.itemPrice}>{price}</Text>
        {/* <Text style={styles.leftArrow}>{">"}</Text> */}
        <Image
          style={styles.leftArrow}
          source={require("../../assets/leftArrow.png")}
        />
      </View>
    </View>
  );

  // Receipt detail row component
  const DetailRow = ({ label, value }: { label: string; value: string }) => (
    <View style={styles.detailRow}>
      <Text style={styles.detailLabel}>{label}</Text>
      <Text style={styles.detailValue}>{value}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#E8E9E9" barStyle="dark-content" />

      {/* Header */}
      <HeaderComponent
        title="Invoice Details"
        onBackPress={() => {}}
        rightButton={null}
      />

      {/* Main Layout */}
      <View style={styles.contentContainer}>
        {/* First white rounded rectangle */}
        <View style={styles.whiteRoundedContainer}>
          {/* Gray rounded rectangle inside white container */}
          <View style={styles.grayRoundedContainer} />
        </View>

        {/* Receipt Content Container */}
        <View style={styles.receiptContainer}>
          {/* Receipt Header with dashed line */}
          <View style={styles.receiptHeader}>
            <View style={styles.dashedLine} />
          </View>

          {/* Receipt Main Background with ScrollView */}
          <ImageBackground
            source={require("../../assets/Subtract.png")}
            style={styles.receiptBg}
            resizeMode="stretch"
          >
            <ScrollView
              style={styles.scrollView}
              contentContainerStyle={styles.scrollContent}
              showsVerticalScrollIndicator={false}
            >
              {/* Mock Items - Add more items to test scrolling */}
              <View style={styles.itemsContainer}>
                <ReceiptItem title="2 Teeth" quantity="x1" price="₹4,800.00" />
                <ReceiptItem
                  title="3-4 Teeth"
                  quantity="x1"
                  price="₹4,800.00"
                />
                <ReceiptItem
                  title="3-4 Units"
                  quantity="x1"
                  price="₹4,800.00"
                />
                <ReceiptItem title="2 Teeth" quantity="x1" price="₹4,800.00" />
              </View>

              {/* Invoice details section */}
              <View style={styles.invoiceDetailsContainer}>
                <DetailRow label="Invoice ID" value="INV8602" />
                <DetailRow
                  label="Transaction Time"
                  value="Aug 23, 2023 • 11:00 AM"
                />
                <DetailRow label="Reference No." value="#39734567" />
              </View>

              {/* Bottom dashed line */}
              <View style={styles.dashedLine} />

              {/* Tax and total section */}
              <View style={styles.totalSection}>
                <DetailRow label="Tax" value="Cafeteria" />
                <DetailRow label="Sub total" value="$256" />
              </View>

              <View style={styles.totalContainer}>
                <View style={styles.dashedLine} />
                <View style={styles.totalRow}>
                  <Text style={styles.totalLabel}>Total</Text>
                  <Text style={styles.totalAmount}>$256</Text>
                </View>
              </View>

              {/* Extra padding to ensure content isn't hidden by buttons */}
              <View style={{ height: 100 }} />
            </ScrollView>
          </ImageBackground>
        </View>
      </View>

      {/* Fixed Action Buttons */}
      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity style={styles.shareButton}>
          <Image
            source={require("../../assets/shareImg.png")}
            style={styles.actionIcon}
          />
          <Text style={styles.shareButtonText}>Share</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.downloadButton}>
          <Text style={styles.downloadButtonText}>Download</Text>
          <Image
            source={require("../../assets/downWimg.png")}
            style={styles.actionIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 62,
    backgroundColor: "#E8E9E9",
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  whiteRoundedContainer: {
    height: 65,
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  grayRoundedContainer: {
    height: 45,
    width: "94%",
    backgroundColor: "#F6F8FA",
    borderRadius: 15,
  },
  receiptContainer: {
    flex: 1,
    marginTop: -30,
    overflow: "hidden",
    marginHorizontal: 20,
  },
  receiptHeader: {
    height: 50,
    backgroundColor: "#fff",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    justifyContent: "center",
    zIndex: 1,
  },
  receiptBg: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    marginTop: -1,
    marginBottom: 30,
    paddingBottom: 90,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 10,
    overflow: "hidden",
  },
  dashedLine: {
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "#ccc",
    marginVertical: 12,
    marginHorizontal: 20,
    height: 0,
  },
  itemsContainer: {
    backgroundColor: "#f8fafc",
    // margin: 12,
    marginHorizontal: 12,
    marginBottom: 15,
    padding: 12,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  receiptItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000000",
    flex: 1,
  },
  itemQuantity: {
    fontSize: 14,
    fontWeight: "400",
    color: "#000000",
    // marginHorizontal: 10,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000000",
    textAlign: "right",
  },
  leftArrow: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  invoiceDetailsContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  detailLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: "#94A3B8",
  },
  detailValue: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
  },
  totalSection: {
    marginHorizontal: 20,
    marginBottom: 5,
  },
  totalContainer: {
    marginHorizontal: 10,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000000",
  },
  totalAmount: {
    fontSize: 22,
    fontWeight: "800",
    color: "#84CC16",
  },
  actionButtonsContainer: {
    position: "absolute",
    bottom: 20,
    left: 16,
    right: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  shareButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
    width: "47%",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  downloadButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#84CC16",
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 25,
    width: "47%",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  shareButtonText: {
    fontSize: 16,
    fontWeight: "800",
    color: "#334155",
    marginLeft: 5,
  },
  downloadButtonText: {
    fontSize: 16,
    fontWeight: "800",
    color: "#FFFFFF",
    marginRight: 5,
  },
  actionIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },
});

export default InvoiceDetails;
