import React, { useEffect, useState } from 'react';
import { listLinks, deleteLink } from '../api/linkApi';
import LinkTable from '../components/LinkTable';
import StatsCard from '../components/StatsCard';

export default function Dashboard() {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const load = async () => {
    setLoading(true);
    try {
      const data = await listLinks();
      setLinks(data);
    } catch (err) {
      setError('Failed to load links');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const handleDelete = async (code) => {
    if (!confirm('Delete link?')) return;
    try {
      await deleteLink(code);
      setLinks(prev => prev.filter(l => l.code !== code));
    } catch (err) {
      alert('Delete failed');
    }
  };

  const totalLinks = links.length;
  const totalClicks = links.reduce((s, l) => s + (l.clicks || 0), 0);
  const avgClicks = totalLinks > 0 ? Math.round(totalClicks / totalLinks) : 0;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-600">Manage your shortened links and track analytics</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatsCard title="Total Links" value={totalLinks} />
        <StatsCard title="Total Clicks" value={totalClicks} />
        <StatsCard title="Avg. Clicks" value={avgClicks} />
      </div>

      <div className="mb-6">
        {loading && <div className="p-4">Loading links…</div>}
        {error && <div className="p-4 text-red-600">{error}</div>}
        <LinkTable links={links} onDelete={handleDelete} />
      </div>
    </div>
  );
}
