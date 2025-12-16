import React from 'react';
import { Bell, Search } from 'lucide-react';
import './Layout.css';

interface HeaderProps {
    title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <header className="header">
            <h1 className="header-title">{title}</h1>

            <div className="flex items-center gap-md">
                <div style={{ position: 'relative' }}>
                    <Search size={20} className="text-muted" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
                    <input
                        type="text"
                        placeholder="Rechercher..."
                        style={{
                            padding: '0.5rem 1rem 0.5rem 2.5rem',
                            borderRadius: '20px',
                            border: '1px solid #e2e8f0',
                            outline: 'none',
                            fontSize: '0.875rem'
                        }}
                    />
                </div>

                <button style={{ background: 'none', border: 'none', position: 'relative' }}>
                    <Bell size={20} className="text-muted" />
                    <span style={{
                        position: 'absolute',
                        top: '-2px',
                        right: '-2px',
                        width: '8px',
                        height: '8px',
                        backgroundColor: 'var(--color-danger)',
                        borderRadius: '50%'
                    }}></span>
                </button>

                <div className="user-profile">
                    <div className="text-right" style={{ marginRight: '0.5rem' }}>
                        <div className="text-sm font-bold">Jean Dupont</div>
                        <div className="text-sm text-muted" style={{ fontSize: '0.75rem' }}>Resp. Pédagogique</div>
                    </div>
                    <div className="avatar">JD</div>
                </div>
            </div>
        </header>
    );
};
