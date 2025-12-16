import React, { useState } from 'react';
import { Search, AlertCircle, AlertTriangle, CheckCircle, Calendar } from 'lucide-react';
import { STUDENTS, type Student } from '../data/mockData';
import { MeetingModal } from '../components/Modals/MeetingModal';

export const StudentsPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'alert' | 'watch'>('all');
  const [search, setSearch] = useState('');
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredStudents = STUDENTS.filter(student => {
    const matchesFilter = filter === 'all' ? true : student.status === filter;
    const matchesSearch = student.name.toLowerCase().includes(search.toLowerCase()) || student.class.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleOpenModal = (student: Student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  const handleConfirmMeeting = (data: { date: string; time: string; reason: string }) => {
    console.log('Meeting confirmed:', data);
    alert(`Rendez-vous confirmé pour ${selectedStudent?.name} le ${data.date} à ${data.time}`);
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col gap-lg">
      <div className="flex justify-between items-center">
        <div className="flex gap-md">
          <button
            className={`badge ${filter === 'all' ? 'badge-success' : ''}`}
            style={{ padding: '0.5rem 1rem', border: '1px solid #e2e8f0', cursor: 'pointer', backgroundColor: filter === 'all' ? '#d1fae5' : 'white' }}
            onClick={() => setFilter('all')}
          >
            Tous ({STUDENTS.length})
          </button>
          <button
            className={`badge ${filter === 'alert' ? 'badge-danger' : ''}`}
            style={{ padding: '0.5rem 1rem', border: '1px solid #e2e8f0', cursor: 'pointer', backgroundColor: filter === 'alert' ? '#fee2e2' : 'white' }}
            onClick={() => setFilter('alert')}
          >
            Critiques ({STUDENTS.filter(s => s.status === 'alert').length})
          </button>
          <button
            className={`badge ${filter === 'watch' ? 'badge-warning' : ''}`}
            style={{ padding: '0.5rem 1rem', border: '1px solid #e2e8f0', cursor: 'pointer', backgroundColor: filter === 'watch' ? '#fef3c7' : 'white' }}
            onClick={() => setFilter('watch')}
          >
            À surveiller ({STUDENTS.filter(s => s.status === 'watch').length})
          </button>
        </div>

        <div style={{ position: 'relative' }}>
          <Search size={18} className="text-muted" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            placeholder="Rechercher un étudiant..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: '0.5rem 1rem 0.5rem 2.5rem',
              borderRadius: '8px',
              border: '1px solid #e2e8f0',
              outline: 'none',
              minWidth: '300px'
            }}
          />
        </div>
      </div>

      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead style={{ backgroundColor: '#f8fafc' }}>
            <tr>
              <th style={{ textAlign: 'left', padding: '1rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>Étudiant</th>
              <th style={{ textAlign: 'left', padding: '1rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>Classe</th>
              <th style={{ textAlign: 'left', padding: '1rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>Moyenne</th>
              <th style={{ textAlign: 'left', padding: '1rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>Absences</th>
              <th style={{ textAlign: 'left', padding: '1rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>Statut</th>
              <th style={{ textAlign: 'left', padding: '1rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>Tendance</th>
              <th style={{ textAlign: 'left', padding: '1rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                <td style={{ padding: '1rem', fontWeight: 600 }}>{student.name}</td>
                <td style={{ padding: '1rem' }}>
                  <span style={{ padding: '0.25rem 0.5rem', borderRadius: '4px', backgroundColor: '#f1f5f9', fontSize: '0.75rem', fontWeight: 600 }}>
                    {student.class}
                  </span>
                </td>
                <td style={{ padding: '1rem', fontWeight: 700, color: student.average < 10 ? 'var(--color-danger)' : 'inherit' }}>
                  {student.average.toFixed(1)}
                </td>
                <td style={{ padding: '1rem' }}>{student.absences}h</td>
                <td style={{ padding: '1rem' }}>
                  {student.status === 'alert' && (
                    <div className="flex items-center gap-xs text-danger">
                      <AlertCircle size={16} />
                      <span className="font-bold text-sm">Critique</span>
                    </div>
                  )}
                  {student.status === 'watch' && (
                    <div className="flex items-center gap-xs text-warning">
                      <AlertTriangle size={16} />
                      <span className="font-bold text-sm">À surveiller</span>
                    </div>
                  )}
                  {student.status === 'normal' && (
                    <div className="flex items-center gap-xs text-success">
                      <CheckCircle size={16} />
                      <span className="font-bold text-sm">Normal</span>
                    </div>
                  )}
                </td>
                <td style={{ padding: '1rem' }}>
                  {student.trend === 'up' && <span className="text-success">↗ En hausse</span>}
                  {student.trend === 'down' && <span className="text-danger">↘ En baisse</span>}
                  {student.trend === 'stable' && <span className="text-muted">→ Stable</span>}
                </td>
                <td style={{ padding: '1rem' }}>
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

      <MeetingModal
        student={selectedStudent}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmMeeting}
      />
    </div>
  );
};
