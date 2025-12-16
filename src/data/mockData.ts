export interface Student {
    id: string;
    name: string;
    class: string;
    average: number;
    absences: number;
    trend: 'up' | 'down' | 'stable';
    status: 'normal' | 'watch' | 'alert';
}

export interface ClassStat {
    name: string;
    average: number;
    attendanceRate: number;
}

export const STUDENTS: Student[] = [
    // B1
    { id: '1', name: 'Alice Dupont', class: 'B1', average: 14.5, absences: 2, trend: 'stable', status: 'normal' },
    { id: '2', name: 'Bob Martin', class: 'B1', average: 9.2, absences: 12, trend: 'down', status: 'alert' },
    { id: '3', name: 'Charlie Durand', class: 'B1', average: 11.0, absences: 5, trend: 'down', status: 'watch' },
    { id: '11', name: 'Lucas Petit', class: 'B1', average: 15.5, absences: 0, trend: 'up', status: 'normal' },
    { id: '12', name: 'Emma Roux', class: 'B1', average: 8.5, absences: 15, trend: 'down', status: 'alert' },

    // B2
    { id: '4', name: 'David Leroy', class: 'B2', average: 16.8, absences: 0, trend: 'up', status: 'normal' },
    { id: '5', name: 'Eve Moreau', class: 'B2', average: 8.5, absences: 15, trend: 'down', status: 'alert' },
    { id: '10', name: 'Jack Dubois', class: 'B2', average: 7.8, absences: 20, trend: 'down', status: 'alert' },
    { id: '13', name: 'Nathan Bernard', class: 'B2', average: 12.2, absences: 4, trend: 'stable', status: 'normal' },

    // B3
    { id: '6', name: 'Frank Thomas', class: 'B3', average: 12.4, absences: 3, trend: 'stable', status: 'normal' },
    { id: '14', name: 'Sarah Cohen', class: 'B3', average: 10.5, absences: 8, trend: 'down', status: 'watch' },
    { id: '15', name: 'Tom Girard', class: 'B3', average: 14.0, absences: 1, trend: 'up', status: 'normal' },

    // M1
    { id: '7', name: 'Grace Petit', class: 'M1', average: 10.1, absences: 8, trend: 'down', status: 'watch' },
    { id: '16', name: 'Léa Bonnet', class: 'M1', average: 13.5, absences: 2, trend: 'stable', status: 'normal' },
    { id: '17', name: 'Paul Mercier', class: 'M1', average: 9.8, absences: 10, trend: 'down', status: 'alert' },

    // M2
    { id: '8', name: 'Hugo Richard', class: 'M2', average: 15.2, absences: 1, trend: 'up', status: 'normal' },
    { id: '18', name: 'Julie Faure', class: 'M2', average: 16.5, absences: 0, trend: 'up', status: 'normal' },
    { id: '19', name: 'Marc Blanc', class: 'M2', average: 11.2, absences: 6, trend: 'stable', status: 'watch' },
];

export const CLASS_STATS: ClassStat[] = [
    { name: 'B1', average: 12.5, attendanceRate: 92 },
    { name: 'B2', average: 13.2, attendanceRate: 95 },
    { name: 'B3', average: 12.0, attendanceRate: 90 },
    { name: 'M1', average: 11.5, attendanceRate: 89 },
    { name: 'M2', average: 14.0, attendanceRate: 96 },
];

export const LEVEL_DISTRIBUTION = [
    { name: 'Excellent (>16)', value: 15, color: '#2a9d8f' },
    { name: 'Bon (14-16)', value: 30, color: '#457b9d' },
    { name: 'Moyen (10-14)', value: 35, color: '#e9c46a' },
    { name: 'Fragile (8-10)', value: 15, color: '#f4a261' },
    { name: 'Danger (<8)', value: 5, color: '#e76f51' },
];

export const EVOLUTION_DATA = [
    { month: 'Sept', average: 12.0 },
    { month: 'Oct', average: 11.8 },
    { month: 'Nov', average: 12.2 },
    { month: 'Dec', average: 11.5 },
    { month: 'Jan', average: 12.5 },
    { month: 'Feb', average: 12.8 },
];
