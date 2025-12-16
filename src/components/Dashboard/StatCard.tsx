import React, { type ReactNode } from 'react';
import { ArrowUp, ArrowDown, Minus } from 'lucide-react';

interface StatCardProps {
    title: string;
    value: string | number;
    icon: ReactNode;
    trend?: 'up' | 'down' | 'stable';
    trendValue?: string;
    color?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, icon, trend, trendValue, color = 'var(--color-primary)' }) => {
    return (
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
            <div className="flex justify-between items-center">
                <span className="text-muted text-sm font-bold" style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>{title}</span>
                <div style={{
                    padding: '0.5rem',
                    borderRadius: '50%',
                    backgroundColor: `${color}20`,
                    color: color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    {icon}
                </div>
            </div>

            <div className="flex items-center gap-md" style={{ marginTop: '0.5rem' }}>
                <span className="text-xl font-bold" style={{ fontSize: '2rem', lineHeight: 1 }}>{value}</span>
            </div>

            {trend && (
                <div className="flex items-center gap-sm text-sm" style={{ marginTop: '0.5rem' }}>
                    {trend === 'up' && <ArrowUp size={16} className="text-success" />}
                    {trend === 'down' && <ArrowDown size={16} className="text-danger" />}
                    {trend === 'stable' && <Minus size={16} className="text-warning" />}

                    <span className={
                        trend === 'up' ? 'text-success' :
                            trend === 'down' ? 'text-danger' :
                                'text-warning'
                    }>
                        {trendValue}
                    </span>
                    <span className="text-muted">vs mois dernier</span>
                </div>
            )}
        </div>
    );
};
