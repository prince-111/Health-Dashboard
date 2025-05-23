import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 62,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: "2%",
  },
  headerContent: {
    paddingTop: 10,
    backgroundColor: "#FFFFFF",
    borderBottomLeftRadius: 48,
    borderBottomRightRadius: 48,
    shadowColor: "#696969",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingVertical: 20,
    marginBottom: 20,
    paddingHorizontal: "2%",
  },
  contentContainer: {
    // flex: 1,
    // paddingHorizontal: 10,
  },
  // Period Selection Styles
  periodContainer: {
    paddingVertical: 16,
    marginTop: 20,
  },
  periodScrollContainer: {
    paddingHorizontal: 14,
  },
  periodButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#f5f5f5",
    marginHorizontal: 4,
  },
  selectedPeriodButton: {
    backgroundColor: "#e8f5e8",
  },
  periodText: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
  },
  selectedPeriodText: {
    color: "#4CAF50",
    fontWeight: "600",
  },

  // Reports List Styles
  reportsContainer: {
    flex: 1,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#313A34",
  },
  popularContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  popularText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#647067",
    marginRight: 8,
  },
  trendIcon: {
    fontSize: 16,
  },

  reportItem: {
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#c5c5c5",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 30,
    elevation: 8,
    marginVertical: 20,
    marginTop: 0,
  },

  reportHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  leftSection: {
    flex: 1,
    paddingRight: 16,
  },
  rightSection: {
    alignItems: "flex-end",
  },
  leftSectionName: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dateText: {
    fontSize: 14,
    fontWeight: "800",
    color: "#647067",
    marginBottom: 4,
  },
  nameText: {
    fontSize: 28,
    fontWeight: "800",
    color: "#313A34",
    marginBottom: 8,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  statusText: {
    fontSize: 14,
    color: "#666",
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  timeText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#647067",
    marginRight: 8,
  },
  arrowContainer: {
    padding: 4,
  },
  arrowImage: {
    width: 23,
    height: 23,
  },
  chartContainer: {
    alignItems: "flex-end",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#F4F7FE",
  },
  statsCard: {
    borderRadius: 20,
    padding: 20,
  },
  statsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  statsTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  statsIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  statsTitleText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1B2559",
  },
  statsMainNumber: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  statsNumberText: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1B2559",
    marginRight: 12,
  },
  growthBadge: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    backgroundColor: "#3B82F6",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  growthText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
  statsGrid: {
    gap: 16,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
    gap: 8,
  },
  statsItem: {
    backgroundColor: "#D6E7EB",
    flexDirection: "row",
    padding: 16,
    borderRadius: 18,
    alignItems: "center",
    flex: 1,
    gap: 8,
  },
  statsItemIcon: {
    width: 40,
    height: 40,
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  statsIconImage: {
    width: 20,
    height: 20,
    tintColor: "#2B3674",
  },
  statsItemValue: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1B2559",
    marginBottom: 4,
  },
  statsItemLabel: {
    fontSize: 14,
    fontWeight: "500",
    color: "#647067",
  },
  dropdown: {
    height: 36,
    width: 100,
    backgroundColor: "#F1F5F9",
    borderRadius: 10,
    paddingHorizontal: 12,
  },
  dropdownContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  dropdownSelectedText: {
    fontSize: 12,
    color: "#2B3674",
    fontWeight: "600",
  },
  dropdownIcon: {
    width: 20,
    height: 20,
    tintColor: "#2B3674",
  },
  revenueCardsContainer: {
    flexDirection: "row",
    gap: 16,
    marginTop: 8,
  },
  revenueCard: {
    flex: 1,
    backgroundColor: "#EEF5FF",
    borderRadius: 16,
    padding: 16,
  },
  revenueCardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 8,
  },
  revenueIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  revenueIcon: {
    width: 24,
    height: 24,
  },
  revenueLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000000",
  },
  revenueValueContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  revenueValue: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2B3674",
  },
  growthContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  revenueGrowthText: {
    fontSize: 12,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  growthIcon: {
    width: 16,
    height: 16,
  },
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 16,
    marginTop: 16,
  },
  chartSection: {
    paddingHorizontal: 16,
    marginBottom: 16,
    marginTop: 16,
    borderRadius: 12,
    padding: 16,
    margin: 12,
  },
});