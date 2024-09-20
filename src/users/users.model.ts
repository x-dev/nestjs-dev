export enum Role {
    ADMIN = 'ADMIN',
    ENGINEER = 'ENGINEER',
    INTERN = 'INTERN'
}

export type User = {
    id?: number,
    name: string,
    email: string,
    role: Role
}
