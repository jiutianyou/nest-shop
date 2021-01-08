import { Controller, UseGuards, Get, Post, Body, Put, Param, Query, Delete, Request } from '@nestjs/common'
import { ApiTags, ApiBearerAuth, ApiOperation, ApiOkResponse } from '@nestjs/swagger'

import { ResponseData } from '../../common/interfaces/result.interface'
import { UserService } from './user.service'
import { UpdateUserDto } from './dto/update-user.dto'
import { UpdatePwDto } from './dto/update-pw-dto'


@ApiBearerAuth()
@ApiTags('用户管理')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('list')
  @ApiOperation({ summary: '查询用户列表' })
  @ApiOkResponse({ description: '返回用户列表和用户总数' })
  async findList(@Query() query): Promise<ResponseData> {
    return this.userService.findList(query)
  }

  @Get(':id')
  @ApiOperation({ summary: '查询用户信息' })
  async findOne(@Param('id') id: number): Promise<ResponseData> {
    return this.userService.findOne(id)
  }

  @Put()
  @ApiOperation({ summary: '根据用户id更新用户信息信息' })
  @ApiOkResponse({ description: '根据用户id更新用户信息', type: UpdateUserDto })
  async update(@Body() userData: UpdateUserDto): Promise<ResponseData> {
    return await this.userService.update(userData)
  }

  @Put('update-pw')
  @ApiOperation({ summary: '修改自身密码' })
  async updatePW(@Body() updatePwData: UpdatePwDto, @Request() req): Promise<ResponseData> {
    return this.userService.updatePw(Object.assign(updatePwData, req['user'].id))
  }

  @Put(':id/:status')
  @ApiOperation({ summary: '根据用户id 删除用户' })
  @ApiOkResponse({ description: '根据用户id删除用户' })
  async updateStatus(@Param('id') id: number, @Param('status') status: string): Promise<ResponseData> {
    return this.userService.updateStatus(id, status)
  }

  @Put('update-pw/:id')
  @ApiOperation({ summary: '根据用户ID重置用户密码' })
  async resetPossword(@Param('id') id: number): Promise<ResponseData> {
    return await this.userService.resetPossword(id)
  }

}
