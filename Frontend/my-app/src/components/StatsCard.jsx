import React from 'react';

export default function StatsCard({ title, value, children }) {
  return (
    <div className="bg-white rounded-lg shadow p-5 flex-1">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="mt-3 text-2xl font-bold">{value}</div>
      {children && <div className="mt-2 text-sm text-gray-400">{children}</div>}
    </div>
  );
}
