import React, { type ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import './Layout.css';

interface DashboardLayoutProps {
    children: ReactNode;
    activePage: string;
    onNavigate: (page: string) => void;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, activePage, onNavigate }) => {
    const getPageTitle = (page: string) => {
        switch (page) {
            case 'dashboard': return 'Tableau de bord';
            case 'classes': return 'Gestion des Classes';
            case 'students': return 'Suivi Étudiants';
            case 'analytics': return 'Analyses Détaillées';
            case 'settings': return 'Paramètres';
            default: return 'Sup de Vinci';
        }
    };

    return (
        <div className="layout-container">
            <Sidebar activePage={activePage} onNavigate={onNavigate} />
            <main className="main-content">
                <Header title={getPageTitle(activePage)} />
                <div className="page-content">
                    {children}
                </div>
            </main>
        </div>
    );
};
