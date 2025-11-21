import React, { useState } from 'react';
import { createLink } from '../api/linkApi';
import { useNavigate } from 'react-router-dom';

export default function AddLink() {
  const [longUrl, setLongUrl] = useState('');
  const [customCode, setCustomCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await createLink({ longUrl, customCode: customCode || undefined });
      setLongUrl('');
      setCustomCode('');
      navigate('/dashboard');
    } catch (err) {
      setError(err?.response?.data?.error || 'Failed to create link');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Create Short Link</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Long URL (include http/https)</label>
            <input required value={longUrl} onChange={e => setLongUrl(e.target.value)}
              className="mt-1 w-full p-3 border rounded" placeholder="https://example.com/page" />
          </div>

          <div>
            <label className="block text-sm font-medium">Custom code (optional, 6-8 alnum)</label>
            <input value={customCode} onChange={e => setCustomCode(e.target.value)}
              className="mt-1 w-full p-3 border rounded" placeholder="mycode" />
          </div>

          {error && <div className="text-red-600">{error}</div>}

          <div className="flex items-center gap-3">
            <button disabled={loading} className="px-5 py-2 bg-gradient-to-r from-pink-500 to-indigo-600 text-white rounded">
              {loading ? 'Creating…' : 'Create'}
            </button>
            <button type="button" onClick={() => { setLongUrl(''); setCustomCode(''); }} className="px-4 py-2 border rounded">Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
}
