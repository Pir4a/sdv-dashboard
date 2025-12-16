import { useState } from 'react';
import { DashboardLayout } from './components/Layout/DashboardLayout';
import { StatCard } from './components/Dashboard/StatCard';
import { LevelDistributionChart } from './components/Dashboard/LevelDistributionChart';
import { ClassComparisonChart } from './components/Dashboard/ClassComparisonChart';
import { EvolutionChart } from './components/Dashboard/EvolutionChart';
import { AtRiskTable } from './components/Dashboard/AtRiskTable';
import { ClassesPage } from './pages/ClassesPage';
import { StudentsPage } from './pages/StudentsPage';
import { Users, GraduationCap, TrendingDown, AlertTriangle } from 'lucide-react';

function App() {
  const [activePage, setActivePage] = useState('dashboard');

  const renderDashboard = () => (
    <div className="flex flex-col gap-lg">
      {/* Stats Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
        <StatCard
          title="Moyenne Générale"
          value="12.4"
          icon={<GraduationCap size={24} />}
          trend="up"
          trendValue="+0.2"
        />
        <StatCard
          title="Étudiants"
          value="450"
          icon={<Users size={24} />}
          color="var(--color-info)"
          trend="stable"
          trendValue="0%"
        />
        <StatCard
          title="Taux d'Absence"
          value="4.2%"
          icon={<TrendingDown size={24} />}
          color="var(--color-warning)"
          trend="down"
          trendValue="-0.5%"
        />
        <StatCard
          title="Alertes"
          value="12"
          icon={<AlertTriangle size={24} />}
          color="var(--color-danger)"
          trend="up"
          trendValue="+2"
        />
      </div>

      {/* Charts Row 1 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem' }}>
        <EvolutionChart />
        <LevelDistributionChart />
      </div>

      {/* Charts Row 2 */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
        <ClassComparisonChart />
      </div>

      {/* Table Row */}
      <AtRiskTable />
    </div>
  );

  const renderPlaceholder = (title: string) => (
    <div className="card flex flex-col items-center justify-center" style={{ minHeight: '400px', textAlign: 'center' }}>
      <div style={{ padding: '2rem', borderRadius: '50%', backgroundColor: '#f1f5f9', marginBottom: '1rem' }}>
        <GraduationCap size={48} className="text-muted" />
      </div>
      <h2 className="text-xl font-bold" style={{ marginBottom: '0.5rem' }}>Page {title}</h2>
      <p className="text-muted">Cette fonctionnalité sera disponible dans la prochaine version.</p>
    </div>
  );

  return (
    <DashboardLayout activePage={activePage} onNavigate={setActivePage}>
      {activePage === 'dashboard' && renderDashboard()}
      {activePage === 'classes' && <ClassesPage />}
      {activePage === 'students' && <StudentsPage />}
      {activePage === 'analytics' && renderPlaceholder('Analyses')}
      {activePage === 'settings' && renderPlaceholder('Paramètres')}
    </DashboardLayout>
  );
}

export default App;
