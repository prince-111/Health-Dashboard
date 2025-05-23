import { HeaderComponent } from "@/components/HeaderComponent";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Switch,
  TouchableOpacity,
  TextInput,
} from "react-native";

const SettingsScreen = () => {
  const [callerIdEnabled, setCallerIdEnabled] = React.useState(true);

  const renderSectionItem = (title: string, hasArrow: boolean = true, style?: any) => (
    <TouchableOpacity style={styles.sectionItem}>
      <Text style={styles.sectionItemText}>{title}</Text>
      {hasArrow && 
        <Image source={require("../assets/leftArrow.png")} style={styles.arrowIcon} />
      }
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <HeaderComponent title="Settings" />

        <View style={styles.searchMainContainer}>
          <View style={styles.searchContainer}>
            <TextInput style={styles.searchText} placeholder="Search here"></TextInput>
          </View>
        </View>
      </View>
      <ScrollView>
        {/* Sync and Support Section */}
        <View style={styles.section}>
          <View style={styles.syncRow}>
            <View style={styles.syncIconContainer}>
              <Image
                source={require("../assets/sync.png")}
                style={styles.syncIcon}
              />
            </View>
            <View style={styles.syncTextContainer}>
              <Text style={styles.syncTitle}>Sync Now</Text>
              <Text style={styles.syncSubtitle}>
                Last synced - 24 minutes ago
              </Text>
            </View>
          </View>

          <View style={styles.supportRow}>
            <View style={styles.supportIconContainer}>
              <Image
                source={require("../assets/sms.png")}
                style={styles.supportIcon}
              />
            </View>
            <View style={styles.supportTextContainer}>
              <Text style={styles.supportTitle}>Support</Text>
              <Text style={styles.supportSubtitle}>
                App version 11.9.0 (1438)
              </Text>
            </View>
          </View>
        </View>

        {/* Caller ID Section */}
        <View style={styles.section}>
          <View style={styles.callerIdRow}>
            <Text style={styles.callerIdText}>Caller ID</Text>
            <Switch
              trackColor={{ false: "#D1D5DB", true: "#10B981" }}
              thumbColor="#ffffff"
              onValueChange={() => setCallerIdEnabled(!callerIdEnabled)}
              value={callerIdEnabled}
            />
          </View>
          {renderSectionItem("Ray")}
          {renderSectionItem("Cashless Settings")}
        </View>

        {/* Account Section */}
        <View style={styles.section}>
          {renderSectionItem("Account")}
          {renderSectionItem("Notifications")}
        </View>

        {/* Other Options Section */}
        <View style={styles.section}>
          {renderSectionItem("Invite Friends")}
          {renderSectionItem("Rate us on Playstore")}
          {renderSectionItem("Privacy Policy")}
          {renderSectionItem("Open-source licences")}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 62,
    paddingHorizontal: "2%",
    backgroundColor: "#E8E9E9",
  },
  headerContainer: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    borderBottomLeftRadius: 29,
    borderBottomRightRadius: 29,
    marginBottom: 8,
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
  section: {
    marginVertical: 10,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    overflow: "hidden",
  },
  sectionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: "#e0e0e0",
  },
  sectionItemText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#27272A",
  },
  arrowIcon: {
    width: 20,
    height: 20,
    // tintColor: "#8e8e93",
  },
  syncRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: "#e0e0e0",
  },
  syncIconContainer: {
    backgroundColor: "#D9F99D",
    marginRight: 12,
    padding: 12,
    borderRadius: 50,
  },
  syncIcon: {
    width: 24,
    height: 24,
  },
  syncTextContainer: {
    flex: 1,
  },
  syncTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#27272A",
  },
  syncSubtitle: {
    fontSize: 14,
    fontWeight: "400",
    color: "#27272A",
    marginTop: 2,
  },
  supportRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  supportIconContainer: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 50,
    marginRight: 12,
  },
  supportIcon: {
    width: 24,
    height: 24,
  },
  supportTextContainer: {
    flex: 1,
  },
  supportTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#27272A",
  },
  supportSubtitle: {
    fontSize: 12,
    fontWeight: "400",
    color: "#27272A",
    marginTop: 2,
  },
  callerIdRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: "#e0e0e0",
  },
  callerIdText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#27272A",
  },
});

export default SettingsScreen;
