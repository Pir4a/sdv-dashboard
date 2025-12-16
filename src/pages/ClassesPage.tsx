import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Users, AlertCircle, Calendar } from 'lucide-react';
import { STUDENTS, type Student } from '../data/mockData';
import { MeetingModal } from '../components/Modals/MeetingModal';

const CLASSES = ['B1', 'B2', 'B3', 'M1', 'M2'];

export const ClassesPage: React.FC = () => {
    const [expandedClass, setExpandedClass] = useState<string | null>(null);
    const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleClass = (className: string) => {
        if (expandedClass === className) {
            setExpandedClass(null);
        } else {
            setExpandedClass(className);
        }
    };

    const getStudentsByClass = (className: string) => {
        return STUDENTS.filter(s => s.class === className);
    };

    const getClassStats = (className: string) => {
        const students = getStudentsByClass(className);
        const avg = students.reduce((acc, curr) => acc + curr.average, 0) / students.length;
        const alerts = students.filter(s => s.status === 'alert').length;
        return { avg: avg.toFixed(1), count: students.length, alerts };
    };

    const handleOpenModal = (student: Student) => {
        setSelectedStudent(student);
        setIsModalOpen(true);
    };

    const handleConfirmMeeting = (data: { date: string; time: string; reason: string }) => {
        console.log('Meeting confirmed:', data);
        alert(`Rendez-vous confirmé pour ${selectedStudent?.name} le ${data.date} à ${data.time}`);
    };

    return (
        <div className="flex flex-col gap-md">
            {CLASSES.map((className) => {
                const stats = getClassStats(className);
                const isExpanded = expandedClass === className;
                const students = getStudentsByClass(className);

                return (
                    <div key={className} className="card" style={{ padding: 0, overflow: 'hidden' }}>
                        <div
                            onClick={() => toggleClass(className)}
                            style={{
                                padding: '1.5rem',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                backgroundColor: isExpanded ? '#f8fafc' : 'white',
                                borderBottom: isExpanded ? '1px solid #e2e8f0' : 'none'
                            }}
                        >
                            <div className="flex items-center gap-lg">
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '8px',
                                    backgroundColor: 'var(--color-primary)',
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 700,
                                    fontSize: '1.25rem'
                                }}>
                                    {className}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">Promotion {className}</h3>
                                    <div className="flex items-center gap-md text-sm text-muted">
                                        <span className="flex items-center gap-xs"><Users size={16} /> {stats.count} Étudiants</span>
                                        <span>•</span>
                                        <span>Moyenne: <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>{stats.avg}</span></span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-lg">
                                {stats.alerts > 0 && (
                                    <div className="badge badge-danger flex items-center gap-xs">
                                        <AlertCircle size={14} />
                                        {stats.alerts} Alertes
                                    </div>
                                )}
                                {isExpanded ? <ChevronUp size={24} className="text-muted" /> : <ChevronDown size={24} className="text-muted" />}
                            </div>
                        </div>

                        {isExpanded && (
                            <div style={{ padding: '1.5rem' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                    <thead>
                                        <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                            <th style={{ textAlign: 'left', padding: '0.75rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>Nom</th>
                                            <th style={{ textAlign: 'left', padding: '0.75rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>Moyenne</th>
                                            <th style={{ textAlign: 'left', padding: '0.75rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>Absences</th>
                                            <th style={{ textAlign: 'left', padding: '0.75rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>Statut</th>
                                            <th style={{ textAlign: 'left', padding: '0.75rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {students.map((student) => (
                                            <tr key={student.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                                <td style={{ padding: '0.75rem', fontWeight: 500 }}>{student.name}</td>
                                                <td style={{ padding: '0.75rem', fontWeight: 600, color: student.average < 10 ? 'var(--color-danger)' : 'inherit' }}>
                                                    {student.average.toFixed(1)}
                                                </td>
                                                <td style={{ padding: '0.75rem' }}>{student.absences}h</td>
                                                <td style={{ padding: '0.75rem' }}>
                                                    {student.status === 'alert' && <span className="badge badge-danger">Critique</span>}
                                                    {student.status === 'watch' && <span className="badge badge-warning">À surveiller</span>}
                                                    {student.status === 'normal' && <span className="badge badge-success">Normal</span>}
                                                </td>
                                                <td style={{ padding: '0.75rem' }}>
                                                    {(student.status === 'alert' || student.status === 'watch') && (
                                                        <button
                                                            onClick={() => handleOpenModal(student)}
                                                            className="badge badge-warning"
                                                            style={{
                                                                cursor: 'pointer',
                                                                border: 'none',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: '0.25rem',
                                                                fontSize: '0.75rem'
                                                            }}
                                                        >
                                                            <Calendar size={14} />
                                                            Convoquer
                                                        </button>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                );
            })}

            <MeetingModal
                student={selectedStudent}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleConfirmMeeting}
            />
        </div>
    );
};
