import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="w-64 hidden lg:block">
      <div className="bg-white rounded-lg p-4 shadow">
        <nav className="flex flex-col gap-2">
          <Link to="/dashboard" className="px-3 py-2 rounded hover:bg-indigo-50">All Links</Link>
          <Link to="/add" className="px-3 py-2 rounded hover:bg-indigo-50">Add Link</Link>
          <a href="/healthz" target="_blank" rel="noreferrer" className="px-3 py-2 rounded hover:bg-indigo-50">Health</a>
        </nav>
      </div>
    </aside>
  );
}
