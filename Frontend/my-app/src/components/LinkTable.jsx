import React from 'react';
import { formatDate } from '../utils/formatDate';
import { BACKEND_BASE } from '../api/axiosInstance';

export default function LinkTable({ links = [], onDelete }) {
  const copyToClipboard = async (code) => {
    const url = `${BACKEND_BASE}/${code}`;
    try {
      await navigator.clipboard.writeText(url);
      alert('Copied: ' + url);
    } catch {
      alert('Copy failed. URL: ' + url);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-x-auto w-full">
      {/* Make table responsive */}
      <table className="w-full table-auto border-collapse min-w-[700px]">
        <thead>
          <tr className="text-left bg-gray-50">
            <th className="p-4">Code</th>
            <th className="p-4">Target URL</th>
            <th className="p-4">Clicks</th>
            <th className="p-4">Last Clicked</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {links.length === 0 ? (
            <tr>
              <td colSpan="5" className="p-8 text-center text-gray-500">
                No links yet
              </td>
            </tr>
          ) : (
            links.map((l) => (
              <tr key={l.code} className="border-t">
                <td className="p-4 font-mono text-indigo-600">
                  <a
                    href={`${BACKEND_BASE}/${l.code}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {l.code}
                  </a>
                </td>

                {/* Allow long URL to wrap instead of overflow */}
                <td className="p-4 break-words max-w-[200px]">
                  <a
                    href={l.longUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-700 hover:underline"
                  >
                    {l.longUrl}
                  </a>
                </td>

                <td className="p-4">{l.clicks}</td>

                <td className="p-4">{formatDate(l.lastClicked)}</td>

                <td className="p-4 whitespace-nowrap">
                  <button
                    onClick={() => copyToClipboard(l.code)}
                    className="mr-2 px-3 py-1 border rounded text-sm"
                  >
                    Copy
                  </button>

                  <button
                    onClick={() => onDelete(l.code)}
                    className="px-3 py-1 bg-red-600 text-white rounded text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
