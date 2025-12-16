import React, { useState } from 'react';
import { X, Calendar, Clock, MessageSquare } from 'lucide-react';
import { type Student } from '../../data/mockData';

interface MeetingModalProps {
    student: Student | null;
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (data: { date: string; time: string; reason: string }) => void;
}

export const MeetingModal: React.FC<MeetingModalProps> = ({ student, isOpen, onClose, onConfirm }) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [reason, setReason] = useState('Absences répétées');

    if (!isOpen || !student) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onConfirm({ date, time, reason });
        onClose();
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
        }}>
            <div className="card" style={{ width: '100%', maxWidth: '500px', padding: 0, overflow: 'hidden' }}>
                <div style={{
                    padding: '1.5rem',
                    borderBottom: '1px solid #e2e8f0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: '#f8fafc'
                }}>
                    <h3 className="text-lg font-bold">Convoquer {student.name}</h3>
                    <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--text-muted)' }}>
                        <X size={24} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                    <div className="flex flex-col gap-sm">
                        <label className="text-sm font-bold text-muted">Date du rendez-vous</label>
                        <div style={{ position: 'relative' }}>
                            <Calendar size={18} className="text-muted" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
                            <input
                                type="date"
                                required
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '0.75rem 1rem 0.75rem 2.5rem',
                                    borderRadius: '8px',
                                    border: '1px solid #e2e8f0',
                                    outline: 'none',
                                    fontFamily: 'inherit'
                                }}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-sm">
                        <label className="text-sm font-bold text-muted">Heure</label>
                        <div style={{ position: 'relative' }}>
                            <Clock size={18} className="text-muted" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
                            <input
                                type="time"
                                required
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '0.75rem 1rem 0.75rem 2.5rem',
                                    borderRadius: '8px',
                                    border: '1px solid #e2e8f0',
                                    outline: 'none',
                                    fontFamily: 'inherit'
                                }}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-sm">
                        <label className="text-sm font-bold text-muted">Motif de la convocation</label>
                        <div style={{ position: 'relative' }}>
                            <MessageSquare size={18} className="text-muted" style={{ position: 'absolute', left: '10px', top: '14px' }} />
                            <select
                                value={reason}
                                onChange={(e) => setReason(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '0.75rem 1rem 0.75rem 2.5rem',
                                    borderRadius: '8px',
                                    border: '1px solid #e2e8f0',
                                    outline: 'none',
                                    fontFamily: 'inherit',
                                    backgroundColor: 'white'
                                }}
                            >
                                <option value="Absences répétées">Absences répétées</option>
                                <option value="Baisse de résultats">Baisse de résultats</option>
                                <option value="Comportement">Comportement</option>
                                <option value="Point semestriel">Point semestriel</option>
                                <option value="Autre">Autre</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex justify-between items-center" style={{ marginTop: '1rem' }}>
                        <button
                            type="button"
                            onClick={onClose}
                            style={{
                                padding: '0.75rem 1.5rem',
                                borderRadius: '8px',
                                border: '1px solid #e2e8f0',
                                backgroundColor: 'white',
                                fontWeight: 600,
                                color: 'var(--text-muted)'
                            }}
                        >
                            Annuler
                        </button>
                        <button
                            type="submit"
                            style={{
                                padding: '0.75rem 1.5rem',
                                borderRadius: '8px',
                                border: 'none',
                                backgroundColor: 'var(--color-warning)',
                                fontWeight: 600,
                                color: '#92400e',
                                boxShadow: 'var(--shadow-sm)'
                            }}
                        >
                            Confirmer le RDV
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
