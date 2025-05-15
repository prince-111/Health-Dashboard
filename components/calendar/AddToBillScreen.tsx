import { HeaderComponent } from "@/components/HeaderComponent";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
} from "react-native";

// Custom Icon Components
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

const ProductService = ( item : any) => (
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
);

//{ onContinue, onBack }
const AddToBillScreen = ({ navigation }) => {
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
      <HeaderComponent
        title={"Add to Bill"}
        rightButton={false}
        onBackPress={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.progressContainer}>
        <Image source={require("../../assets/Union.png")} />
        <Image source={require("../../assets/Union2.png")} />
        <Image source={require("../../assets/Union2.png")} />
      </View>

      <TouchableOpacity style={styles.addItemsButton}>
        <Text style={styles.addItemsText}>Add to items</Text>
      </TouchableOpacity>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          Add products, services or procedures. Prices can be changed in the
          next step
        </Text>
      </View>
      <View style={styles.searchMainContainer}>
        <View style={styles.searchContainer}>
          <Text style={styles.searchText}>Search here</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.sectionTitle}>Product & Services</Text>
      </View>
      <ScrollView style={styles.itemList}>
        <FlatList
          data={implantItems}
          renderItem={({ item }) => ProductService(item)}
          // keyExtractor={({item}:any) => item.id}
        />
        {/* {implantItems.map(item => (
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
        ))} */}
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
    padding: 6,
    margin: 4,
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
    width: "60%",
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
    backgroundColor: "#D2EFC4",
    marginHorizontal: 8,
  },
  progressDot3: {
    width: 14,
    height: 14,
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
  infoContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  searchMainContainer: {
    backgroundColor: "#fff",
  },
  infoText: {
    textAlign: "center",
    paddingTop: 14,
    fontWeight: "400",
    marginBottom: 16,
    paddingHorizontal: 32,
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
  sectionTitle: {
    backgroundColor: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 16,
    padding: 10,
  },
  itemList: {
    flex: 1,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  itemCard: {
    backgroundColor: "#f8fafc",
    borderRadius: 15,
    padding: 16,
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "700",
  },
  itemDescription: {
    fontSize: 14,
    fontWeight: "400",
    marginVertical: 4,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "700",
  },
  addButton: {
    backgroundColor: "#ffff",
    padding: 14,
    borderRadius: 13,
  },
  continueButton: {
    backgroundColor: "#84CC16",
    borderRadius: 32,
    paddingVertical: 16,
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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

export default AddToBillScreen;