import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { Download, Users, Heart, CheckCircle, XCircle, MessageCircle, Lock } from 'lucide-react';

const ADMIN_PASSWORD = 'yehasab2026'; // Change this!

interface RsvpRecord {
  id: string;
  name: string;
  attending: 'yes' | 'no';
  eventsAttending?: string;
  message?: string;
  submittedAt?: string;
}

export const AdminDashboard: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [rsvps, setRsvps] = useState<RsvpRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<'all' | 'yes' | 'no'>('all');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setPasswordError('');
    } else {
      setPasswordError('Incorrect password. Please try again.');
    }
  };

  useEffect(() => {
    if (!isAuthenticated) return;
    const fetchRsvps = async () => {
      setLoading(true);
      try {
        const q = query(collection(db, 'rsvps'), orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(q);
        const data: RsvpRecord[] = [];
        snapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() } as RsvpRecord);
        });
        setRsvps(data);
      } catch (err) {
        console.error('Error fetching RSVPs:', err);
      }
      setLoading(false);
    };
    fetchRsvps();
  }, [isAuthenticated]);

  const exportCSV = () => {
    const headers = ['Name', 'Attending', 'Events', 'Message', 'Date'];
    const rows = rsvps.map((r) => [
      r.name,
      r.attending === 'yes' ? 'Yes' : 'No',
      r.eventsAttending || '',
      (r.message || '').replace(/,/g, ';'),
      r.submittedAt || '',
    ]);
    const csv = [headers, ...rows].map((r) => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'yehasab_absalat_rsvps.csv';
    a.click();
  };

  const attending = rsvps.filter((r) => r.attending === 'yes');
  const declining = rsvps.filter((r) => r.attending === 'no');
  const withMessages = rsvps.filter((r) => r.message?.trim());
  const filtered = filter === 'all' ? rsvps : rsvps.filter((r) => r.attending === filter);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#050B18] flex items-center justify-center p-4">
        <div className="bg-[#0A1931] border border-[#D4AF37]/40 rounded-2xl p-8 w-full max-w-md shadow-2xl text-center">
          <div className="w-14 h-14 mx-auto rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-4 border border-[#D4AF37]/30">
            <Lock size={24} className="text-[#D4AF37]" />
          </div>
          <h1 className="font-cinzel text-xl text-[#F3E5AB] font-bold tracking-widest mb-1">ADMIN ACCESS</h1>
          <p className="font-serif-luxury text-sm text-stone-400 mb-6">
            Yehasab & Absalat · Wedding Dashboard
          </p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#050B18] border border-[#D4AF37]/30 focus:border-[#D4AF37] text-[#FAF6EE] placeholder:text-stone-500 outline-none font-cinzel text-sm"
            />
            {passwordError && (
              <p className="text-red-400 text-xs font-cinzel">{passwordError}</p>
            )}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#050B18] font-cinzel font-bold text-sm tracking-widest hover:brightness-110 transition-all"
            >
              ENTER DASHBOARD
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050B18] text-[#FAF6EE] p-4 sm:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="font-cinzel text-2xl font-bold text-[#F3E5AB] tracking-widest">RSVP DASHBOARD</h1>
            <p className="font-serif-luxury text-stone-400 text-sm mt-1">Yehasab & Absalat · Wedding Responses</p>
          </div>
          <button
            onClick={exportCSV}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D4AF37] text-[#050B18] font-cinzel text-xs font-bold tracking-wider hover:brightness-110 transition-all"
          >
            <Download size={14} />
            Export CSV
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Responses', value: rsvps.length, icon: <Users size={20} className="text-[#D4AF37]" /> },
            { label: 'Attending', value: attending.length, icon: <CheckCircle size={20} className="text-green-400" /> },
            { label: 'Declining', value: declining.length, icon: <XCircle size={20} className="text-red-400" /> },
            { label: 'Wrote Wishes', value: withMessages.length, icon: <MessageCircle size={20} className="text-blue-400" /> },
          ].map((stat, i) => (
            <div key={i} className="bg-[#0A1931] border border-[#D4AF37]/20 rounded-xl p-4 flex flex-col items-center text-center gap-1">
              {stat.icon}
              <span className="font-serif-luxury text-3xl font-bold text-[#F3E5AB]">{stat.value}</span>
              <span className="font-cinzel text-[10px] tracking-wider text-stone-400 uppercase">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Filter */}
        <div className="flex gap-2 mb-4">
          {(['all', 'yes', 'no'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full font-cinzel text-xs tracking-wider transition-all border ${filter === f ? 'bg-[#D4AF37] text-[#050B18] border-[#D4AF37]' : 'bg-transparent text-stone-400 border-[#D4AF37]/30 hover:border-[#D4AF37]'}`}
            >
              {f === 'all' ? 'All' : f === 'yes' ? '✓ Attending' : '✗ Declining'}
            </button>
          ))}
        </div>

        {/* RSVP Table */}
        {loading ? (
          <div className="text-center py-16 text-stone-400 font-cinzel tracking-widest">LOADING...</div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-16 text-stone-500 font-serif-luxury italic">No RSVPs yet.</div>
        ) : (
          <div className="space-y-3">
            {filtered.map((rsvp) => (
              <div
                key={rsvp.id}
                className={`bg-[#0A1931] border rounded-xl p-5 flex flex-col sm:flex-row sm:items-start gap-3 ${rsvp.attending === 'yes' ? 'border-green-800/50' : 'border-red-900/50'}`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`w-2 h-2 rounded-full ${rsvp.attending === 'yes' ? 'bg-green-400' : 'bg-red-400'}`} />
                    <span className="font-serif-luxury font-bold text-base text-[#F3E5AB]">{rsvp.name}</span>
                    <span className={`font-cinzel text-[10px] tracking-wider px-2 py-0.5 rounded-full ${rsvp.attending === 'yes' ? 'bg-green-900/50 text-green-300' : 'bg-red-900/50 text-red-300'}`}>
                      {rsvp.attending === 'yes' ? 'ATTENDING' : 'DECLINING'}
                    </span>
                  </div>
                  {rsvp.eventsAttending && (
                    <p className="font-cinzel text-[10px] text-stone-400 mb-1">{rsvp.eventsAttending}</p>
                  )}
                  {rsvp.message && (
                    <p className="font-serif-luxury italic text-sm text-stone-300 bg-[#050B18]/50 rounded-lg px-3 py-2 mt-2">
                      "{rsvp.message}"
                    </p>
                  )}
                </div>
                <span className="font-cinzel text-[10px] text-stone-500 whitespace-nowrap mt-1">
                  {rsvp.submittedAt}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
