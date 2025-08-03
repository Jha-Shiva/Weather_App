// src/hooks/usePm25Aqi.js

export default function useAqi(pm25) {
  const breakpoints = [
    { c_low: 0, c_high: 30, i_low: 0, i_high: 50, category: "🟢Good" },
    { c_low: 31, c_high: 60, i_low: 51, i_high: 100, category: "🟡Satisfactory" },
    { c_low: 61, c_high: 90, i_low: 101, i_high: 200, category: "🟠Moderate" },
    { c_low: 91, c_high: 120, i_low: 201, i_high: 300, category: "🔴Poor" },
    { c_low: 121, c_high: 250, i_low: 301, i_high: 400, category: "🟣Very Poor" },
    { c_low: 251, c_high: 500, i_low: 401, i_high: 500, category: "⚫Severe" },
  ];

  const bp = breakpoints.find(b => pm25 >= b.c_low && pm25 <= b.c_high);

  if (!bp) {
    return { aqi: null, category: "Out of Range" };
  }

  const { c_low, c_high, i_low, i_high, category } = bp;

  const aqi = Math.round(
    ((i_high - i_low) / (c_high - c_low)) * (pm25 - c_low) + i_low
  );

  return { aqi, category };
}
