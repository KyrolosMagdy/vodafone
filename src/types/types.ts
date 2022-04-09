export interface User {
    id: number;
    avatar: string;
    name: string;
}

export interface Task {
    id: number;
    status: number;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    createdBy: number;
    assignedTo: number;
}       