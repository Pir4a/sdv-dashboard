import React from 'react';
import { LayoutDashboard, Users, GraduationCap, BarChart2, Settings, LogOut, School } from 'lucide-react';
import './Layout.css';

interface SidebarProps {
    activePage: string;
    onNavigate: (page: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activePage, onNavigate }) => {
    const menuItems = [
        { id: 'dashboard', label: 'Tableau de bord', icon: LayoutDashboard },
        { id: 'classes', label: 'Classes', icon: School },
        { id: 'students', label: 'Étudiants', icon: Users },
        { id: 'analytics', label: 'Analyses', icon: BarChart2 },
        { id: 'settings', label: 'Paramètres', icon: Settings },
    ];

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <a href="#" className="brand-logo">
                    <GraduationCap size={28} color="var(--color-primary)" />
                    <span>Sup de Vinci</span>
                </a>
            </div>

            <nav className="sidebar-nav">
                {menuItems.map((item) => (
                    <a
                        key={item.id}
                        href="#"
                        className={`nav-item ${activePage === item.id ? 'active' : ''}`}
                        onClick={(e) => {
                            e.preventDefault();
                            onNavigate(item.id);
                        }}
                    >
                        <item.icon size={20} />
                        <span>{item.label}</span>
                    </a>
                ))}
            </nav>

            <div className="sidebar-footer" style={{ padding: '1.5rem' }}>
                <a href="#" className="nav-item" style={{ color: 'var(--color-danger)' }}>
                    <LogOut size={20} />
                    <span>Déconnexion</span>
                </a>
            </div>
        </aside>
    );
};
