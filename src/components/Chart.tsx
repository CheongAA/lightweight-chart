import { useEffect, useRef } from "react";
import {
  CandlestickData,
  CandlestickSeries,
  createChart,
} from "lightweight-charts";

import { data } from "../data/candle";

const ChartComponent = () => {
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    // 차트 생성
    const chart = createChart(chartContainerRef.current, {
      width: 600,
      height: 400,
    });

    // 라인 차트 추가
    const lineSeries = chart.addSeries(CandlestickSeries);
    lineSeries.setData(data as CandlestickData[]);

    return () => chart.remove();
  }, []);

  return <div ref={chartContainerRef} />;
};

export default ChartComponent;
