import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {

    /*
    DELETE  /users/:id
    */

    // GET /users or /users?role=value
    @Get()
    findAll(@Query('role') role?: 'INTERNAL' | 'EXTERNAL') {
        return [];
    }

    // GET /users/:id
    @Get(':id')
    findOne(@Param('id') id: string) {
        return { id };
    }

    // POST /users
    @Post()
    create(@Body() user: any) {
        return { user };
    }

    // PATCH /users/:id
    @Patch(':id')
    update(@Param('id') id: string, @Body() userUpdate:any) {
        return { id, ...userUpdate };
    }

    // DELETE /users/:id
    @Delete(':id')
    delete(@Param('id') id: string) {
        return { id };
    }
}
