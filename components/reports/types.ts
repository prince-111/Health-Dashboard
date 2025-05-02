export type PaymentType = "Payments" | "Revenue" | "Expenses";
export type TimeFilter = "Vs Daily" | "Vs Weekly" | "Vs Monthly" | "Vs Yearly";
export type MonthOption =
  | "All"
  | "Jan"
  | "Feb"
  | "Mar"
  | "Apr"
  | "May"
  | "Jun"
  | "Jul"
  | "Aug";

export interface ChartDataPoint {
  value: number;
  label: string;
  showDataPoint?: boolean;
  dataPointColor?: string;
  dataPointText?: string;
}

export interface ReportsData {
  primary: ChartDataPoint[];
  secondary: ChartDataPoint[];
}

export interface DropdownModalProps {
  visible: boolean;
  onClose: () => void;
  data: string[];
  onSelect: (value: string) => void;
  selectedValue: string;
}

export interface ChartFiltersProps {
  paymentType: PaymentType;
  setPaymentType: (type: PaymentType) => void;
  timeFilter: TimeFilter;
  setTimeFilter: (filter: TimeFilter) => void;
  selectedMonth: MonthOption;
  setSelectedMonth: (month: MonthOption) => void;
}
