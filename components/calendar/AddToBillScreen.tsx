import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

// Custom Icon Components
const BackIcon = () => (
  <View
    style={{
      width: 24,
      height: 24,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <View
      style={{
        width: 10,
        height: 10,
        borderLeftWidth: 2,
        borderBottomWidth: 2,
        transform: [{ rotate: "45deg" }],
        borderColor: "#000",
      }}
    />
  </View>
);

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

const ChevronRightIcon = () => (
  <View
    style={{
      width: 24,
      height: 24,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <View
      style={{
        width: 8,
        height: 8,
        borderRightWidth: 2,
        borderTopWidth: 2,
        transform: [{ rotate: "45deg" }],
        borderColor: "#fff",
      }}
    />
  </View>
);

// Step 1: Add to Bill Screen
//{ onContinue, onBack }
const AddToBillScreen = () => {
  const implantItems = [
    {
      id: 1,
      title: "1 Implant",
      description: "PROCERA ALUMINA/ZIRCONIA CROWN",
      price: "₹12,000.00",
    },
    {
      id: 2,
      title: "1 Implant",
      description: "PROCERA ALUMINA/ZIRCONIA CROWN",
      price: "₹12,000.00",
    },
    {
      id: 3,
      title: "1 Implant",
      description: "PROCERA ALUMINA/ZIRCONIA CROWN",
      price: "₹12,000.00",
    },
    {
      id: 4,
      title: "1 Implant",
      description: "PROCERA ALUMINA/ZIRCONIA CROWN",
      price: "₹12,000.00",
    },
    {
      id: 5,
      title: "1 Implant",
      description: "PROCERA ALUMINA/ZIRCONIA CROWN",
      price: "₹12,000.00",
    },
    {
      id: 6,
      title: "1 Implant",
      description: "PROCERA ALUMINA/ZIRCONIA CROWN",
      price: "₹12,000.00",
    },
  ];

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <TouchableOpacity
          //  onPress={onBack}
          style={styles.backButton}
        >
          <BackIcon />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add to Bill</Text>
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.progressDot1} />
        <View style={styles.progressDot2} />
        <View style={styles.progressDot3} />
      </View>

      <TouchableOpacity style={styles.addItemsButton}>
        <Text style={styles.addItemsText}>Add to items</Text>
      </TouchableOpacity>

      <Text style={styles.infoText}>
        Add products, services or procedures. Prices can be changed in the next
        step
      </Text>

      <View style={styles.searchContainer}>
        <Text style={styles.searchText}>Search here</Text>
      </View>

      <Text style={styles.sectionTitle}>Product & Services</Text>

      <ScrollView style={styles.itemList}>
        {implantItems.map(item => (
          <View key={item.id} style={styles.itemCard}>
            <View style={styles.itemDetails}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
            <TouchableOpacity style={styles.addButton}>
              <PlusIcon />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.continueButton}
        //   onPress={onContinue}
      >
        <Text style={styles.continueButtonText}>Continue to Next Step</Text>
        <View style={styles.arrowContainer}>
          <ChevronRightIcon />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 62,
    padding: 6,
    margin: 10,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  backButton: {
    marginRight: 16,
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
  },
  progressDot1: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#8CD867",
    marginHorizontal: 8,
  },
  progressDot2: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#D2EFC4",
    marginHorizontal: 8,
  },
  progressDot3: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#D2EFC4",
    marginHorizontal: 8,
  },
  addItemsButton: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 16,
  },
  addItemsText: {
    color: "#000",
    fontWeight: "500",
  },
  infoText: {
    textAlign: "center",
    color: "#666",
    marginBottom: 16,
    paddingHorizontal: 32,
  },
  searchContainer: {
    backgroundColor: "#e0e0e5",
    borderRadius: 24,
    padding: 12,
    marginBottom: 16,
  },
  searchText: {
    color: "#888",
    marginLeft: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 16,
  },
  itemList: {
    flex: 1,
    marginBottom: 20,
  },
  itemCard: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  itemDescription: {
    fontSize: 12,
    color: "#777",
    marginVertical: 4,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "bold",
  },
  addButton: {
    padding: 8,
  },
  continueButton: {
    backgroundColor: "#8CD867",
    borderRadius: 32,
    paddingVertical: 16,
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 16,
  },
  continueButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  arrowContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 16,
    padding: 4,
  },
});

export default AddToBillScreen;
