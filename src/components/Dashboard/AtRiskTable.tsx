import React from 'react';
import { STUDENTS } from '../../data/mockData';
import { AlertTriangle, AlertCircle } from 'lucide-react';

export const AtRiskTable: React.FC = () => {
    // Filter only students with 'watch' or 'alert' status
    const atRiskStudents = STUDENTS.filter(s => s.status !== 'normal').sort((a, b) => {
        if (a.status === 'alert' && b.status !== 'alert') return -1;
        if (a.status !== 'alert' && b.status === 'alert') return 1;
        return 0;
    });

    return (
        <div className="card">
            <div className="flex justify-between items-center" style={{ marginBottom: '1.5rem' }}>
                <h3 className="text-lg font-bold">Étudiants à Surveiller</h3>
                <span className="badge badge-danger">{atRiskStudents.length} Alertes</span>
            </div>

            <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                            <th style={{ padding: '1rem', color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.875rem' }}>Étudiant</th>
                            <th style={{ padding: '1rem', color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.875rem' }}>Classe</th>
                            <th style={{ padding: '1rem', color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.875rem' }}>Moyenne</th>
                            <th style={{ padding: '1rem', color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.875rem' }}>Absences</th>
                            <th style={{ padding: '1rem', color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.875rem' }}>Statut</th>
                        </tr>
                    </thead>
                    <tbody>
                        {atRiskStudents.map((student) => (
                            <tr key={student.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '1rem', fontWeight: 500 }}>{student.name}</td>
                                <td style={{ padding: '1rem' }}>
                                    <span style={{
                                        padding: '0.25rem 0.5rem',
                                        borderRadius: '4px',
                                        backgroundColor: '#f1f5f9',
                                        fontSize: '0.75rem',
                                        fontWeight: 600
                                    }}>
                                        {student.class}
                                    </span>
                                </td>
                                <td style={{ padding: '1rem', fontWeight: 600, color: student.average < 10 ? 'var(--color-danger)' : 'inherit' }}>
                                    {student.average.toFixed(1)}
                                </td>
                                <td style={{ padding: '1rem' }}>{student.absences}h</td>
                                <td style={{ padding: '1rem' }}>
                                    {student.status === 'alert' ? (
                                        <div className="flex items-center gap-sm text-danger">
                                            <AlertCircle size={16} />
                                            <span className="font-bold text-sm">Critique</span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-sm text-warning">
                                            <AlertTriangle size={16} />
                                            <span className="font-bold text-sm">À surveiller</span>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
