export interface User {
    id: string;
    avatar: string;
    name: string;
    assignedTasks: Task[]
}

export interface Task {
    id: string;
    title: string;
    description: string;
    status: string;
    createdBy: User;
    updatedBy: User;
    createdAt: string;
    updatedAt: string;
}