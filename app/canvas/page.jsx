import React from 'react';
import LineChart from "@/components/LineChart";

function page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl p-4 bg-white shadow-lg rounded-lg">
        <h1 className="text-xl font-bold text-center mb-4">Sales Report</h1>
        <LineChart />
      </div>
    </div>
  )
}

export default page