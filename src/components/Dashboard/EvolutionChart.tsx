import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { EVOLUTION_DATA } from '../../data/mockData';

export const EvolutionChart: React.FC = () => {
    return (
        <div className="card" style={{ height: '100%' }}>
            <h3 className="text-lg font-bold" style={{ marginBottom: '1.5rem' }}>Évolution de la Moyenne Générale</h3>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <LineChart
                        data={EVOLUTION_DATA}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                        <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} dy={10} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} domain={[0, 20]} />
                        <Tooltip
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        />
                        <Line
                            type="monotone"
                            dataKey="average"
                            stroke="var(--color-primary)"
                            strokeWidth={3}
                            dot={{ r: 4, fill: 'var(--color-primary)', strokeWidth: 2, stroke: '#fff' }}
                            activeDot={{ r: 6 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};
