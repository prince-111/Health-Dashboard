import { reportsData } from "@/server/data/ReportsData";

const getValueBasedColor = (
  baseColor: string,
  value: number,
  maxValue: number
) => {
  // Calculate opacity based on value (0.4 to 1.0 range)
  const opacity = Math.min(1, Math.max(0.14, value / maxValue)).toFixed(2);

  // Convert hex to RGBA
  const r = parseInt(baseColor.slice(1, 3), 16);
  const g = parseInt(baseColor.slice(3, 5), 16);
  const b = parseInt(baseColor.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};


export  const processedData = reportsData.map(item => {
    const maxValue = Math.max(...item.chartData.map(d => d.value));
    return {
      ...item,
      chartData: item.chartData.map(dataPoint => ({
        value: dataPoint.value,
        frontColor: getValueBasedColor(
          item.chartColor,
          dataPoint.value,
          maxValue
        ),
      })),
    };
  });
