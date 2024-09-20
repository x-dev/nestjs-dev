import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user-dto';
import { UpdateUserDTO } from './dto/update-user-dto';
import { User, Role } from './users.model';

@Injectable()
export class UsersService {

    private users: User[] = [
        {
            'id': 1,
            'name': 'John Smith',
            'email': 'jsmith@example.com',
            'role': Role.ADMIN
        },
        {
            'id': 2,
            'name': 'Jane Doe',
            'email': 'jdoe@example.com',
            'role': Role.ENGINEER
        },
        {
            'id': 3,
            'name': 'Bob Smith',
            'email': 'bsmith@example.com',
            'role': Role.INTERN
        },
        {
            'id': 4,
            'name': 'Chuck Schuldinger',
            'email': 'cschuldinger@example.com',
            'role': Role.ADMIN
        },
        {
            'id': 5,
            'name': 'David Bowie',
            'email': 'dbowie@example.com',
            'role': Role.ENGINEER
        }
    ];

    findAll(role?: Role) {
        if (role) {
            const usersByRole = this.users.filter(user => user.role === role);
            if(!usersByRole.length) {
                throw new NotFoundException(`No users with role ${role} found`);
            }
            return usersByRole
        }
        return this.users;
    }

    findOne(id: number) {
        const user = this.users.find(user => user.id === id);
        if (!user) {
            throw new NotFoundException(`User with id ${id} not found`);
        }
        return user;
    }

    create(createUserDto: CreateUserDTO) {

        const usersSortedByIdDesc = [...this.users].sort((a, b) => b.id - a.id);

        const newUser = {
            ...createUserDto,
            id: usersSortedByIdDesc[0].id + 1
        }

        console.log(newUser)
        this.users.push(newUser);

        return newUser;
    }

    update(id: number, updateUserDTO: UpdateUserDTO) {
        this.users = this.users.map(user => {
            if (user.id === id) {
                return {
                    ...user,
                    ...updateUserDTO
                }
            }
            return user;
        })
        return this.findOne(id);
    }

    delete(id: number) {
        const removedUser = this.findOne(id);
        this.users = this.users.filter(user => user.id !== id);
        return removedUser;
    };

}
