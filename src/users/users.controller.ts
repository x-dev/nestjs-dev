import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user-dto';
import { UpdateUserDTO } from './dto/update-user-dto';
import { Role } from './users.model';
@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService){}

    // GET /users or /users?role=value
    @Get()
    findAll(@Query('role') role?: Role) {
        return this.usersService.findAll(role);
    }

    // GET /users/:id
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.findOne(id);
    }

    // POST /users
    @Post()
    create(@Body(ValidationPipe) createUserDto: CreateUserDTO) {
        return this.usersService.create(createUserDto);
    }

    // PATCH /users/:id
    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateUserDTO:UpdateUserDTO) {
        return this.usersService.update(id, updateUserDTO);
    }

    // DELETE /users/:id
    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.delete(id);
    }
}
