import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Filler, TimeScale ,Tooltip } from "chart.js";
import 'chartjs-adapter-date-fns';
import moment from 'moment';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, TimeScale , Tooltip);

const data = {
  labels: ["2023-07-01", "2023-08-01", "2023-09-01", "2023-10-01", "2023-11-01"],
  datasets: [
    {
      data: [
        { x: new Date('2023-07-1'), y: "4100" },
        { x: new Date('2023-07-5'), y: "4200" },
        { x: new Date('2023-07-10'), y: "4200" },
        { x: new Date('2023-07-15'), y: "4170" },
        { x: new Date('2023-07-20'), y: "4270" },
        { x: new Date('2023-07-25'), y: "4370" },
        { x: new Date('2023-07-30'), y: "4270" },
        { x: new Date('2023-08-1'), y: "4200" },
        { x: new Date('2023-08-5'), y: "4300" },
        { x: new Date('2023-08-10'), y: "4200" },
        { x: new Date('2023-08-15'), y: "4200" },
        { x: new Date('2023-08-20'), y: "4470" },
        { x: new Date('2023-08-25'), y: "4300" },
        { x: new Date('2023-08-30'), y: "4300" },
        { x: new Date('2023-09-1'), y: "4300" },
        { x: new Date('2023-09-5'), y: "4400" },
        { x: new Date('2023-09-10'), y: "4300" },
        { x: new Date('2023-09-15'), y: "4200" },
        { x: new Date('2023-09-20'), y: "4470" },
        { x: new Date('2023-09-25'), y: "4400" },
        { x: new Date('2023-09-30'), y: "4500" },
        { x: new Date('2023-10-1'), y: "4400" },
        { x: new Date('2023-10-5'), y: "4400" },
        { x: new Date('2023-10-10'), y: "4500" },
        { x: new Date('2023-10-15'), y: "4550" },
        { x: new Date('2023-10-20'), y: "4570" },
        { x: new Date('2023-10-25'), y: "4600" },
        { x: new Date('2023-10-30'), y: "4500" },
        { x: new Date('2023-11-1'), y: "4500" },
        { x: new Date('2023-11-5'), y: "4570" },
        { x: new Date('2023-11-11'), y: "4500" },
        { x: new Date('2023-11-15'), y: "4600" },
        { x: new Date('2023-11-20'), y: "4570" },
        { x: new Date('2023-11-25'), y: "4600" },
        { x: new Date('2023-11-30'), y: "4600" },
     
      ],
      fill: true,
      backgroundColor: (context) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, context.chart.chartArea.height);
        gradient.addColorStop(0, "rgba(65, 195, 169, 0.6)");
        gradient.addColorStop(1, "rgba(65, 195, 169, 0)");
        return gradient;
      },
      // borderColor: "rgba(75,192,192,1)",
      borderWidth: 2,
      pointBackgroundColor:'transparent',
      pointBorderWidth:"0px", // Set pointStyle to 'none' to remove the circles
      showLine: true,
    },
  ],
};

const legend = {
  display: true,
  position: "bottom",
  labels: {
    fontColor: "#323130",
    fontSize: 14,
  },
};

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
    tooltip: {
      enabled: true, // Ensure tooltips are enabled
      mode: 'index',
      intersect: false,
    },
  },
  scales: {
    x: {
      type: 'time', // Use time scale for dates
      time: {
        unit: 'month', // Display labels as months
        parser: 'yyyy-MM-dd',
        tooltipFormat: 'MMM yyyy',
      },
      min: "2023-07-01",
      max: "2023-11-30",
      ticks: {
        stepSize: 1,
      },
      title: {
        display: true,
      },
      grid: {
        display: false, // Remove x-axis grid
      },
    },
    y: {
      title: {
        display: true,
      },
      min: 4100,
      max: 4600,
      ticks: {
        stepSize: 100,
      },
      grid: {
        display: false, // Remove x-axis grid
      },
    },
  },
};

const StrategyChart = () => (
  <>
    <Line data={data} legend={legend} options={options} />
  </>
);

export default StrategyChart;
