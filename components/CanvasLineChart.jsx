"use client";

import React from "react";
import CanvasJSReact from "canvasjs-react-charts";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const LineChart = () => {
  const options = {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "Monthly Sales Data",
    },
    axisX: {
      title: "Months",
    },
    axisY: {
      title: "Sales (in USD)",
      includeZero: false,
    },
    data: [
      {
        type: "line",
        dataPoints: [
          { label: "Jan", y: 4000 },
          { label: "Feb", y: 3500 },
          { label: "Mar", y: 5000 },
          { label: "Apr", y: 4800 },
          { label: "May", y: 5300 },
          { label: "Jun", y: 6000 },
        ],
      },
    ],
  };

  return <CanvasJSChart options={options} />;
};

export default LineChart;
