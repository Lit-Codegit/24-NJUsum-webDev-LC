
import { Body, Controller, Post, Provide } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { LoginRequestBody } from '../interface';
import * as fs from 'fs';

@Provide()
@Controller('/')
export class LoginController {
    @Post('/login')
    async login(@Body() body: LoginRequestBody, ctx: Context) {
        // TODO: 业务分离
        const { username, passwd } = body;
        // 用于将JSON字符串解析为JavaScript对象
        const users = JSON.parse(fs.readFileSync('../users.json', 'utf-8'));
        const userFind = users.find(u => u.username === username && u.passwd === passwd);

        if (userFind) {
            // set cookie??
            ctx.status = 200;
            ctx.body = {
                success: true,
                message: 'login'
            }
        } else {
                ctx.status = 401;
                ctx.body = {
                    success: false,
                    message: 'failed'
                }
            }
        }
    }