import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { CLASS_STATS } from '../../data/mockData';

export const ClassComparisonChart: React.FC = () => {
    return (
        <div className="card" style={{ height: '100%' }}>
            <h3 className="text-lg font-bold" style={{ marginBottom: '1.5rem' }}>Comparaison des Classes (Moyenne)</h3>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <BarChart
                        data={CLASS_STATS}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} dy={10} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} domain={[0, 20]} />
                        <Tooltip
                            cursor={{ fill: '#f1f5f9' }}
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        />
                        <Bar dataKey="average" radius={[4, 4, 0, 0]}>
                            {CLASS_STATS.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.average < 10 ? '#e76f51' : entry.average < 12 ? '#e9c46a' : '#2a9d8f'} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};
