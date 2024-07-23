
import { Controller, Post, Provide } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { AuthService } from '../service/login.service';
import { LoginRequestBody } from '../interface';

@Provide()
@Controller('/')
export class LoginController {
    constructor(private authService: AuthService) { }

    @Post('/login')
    async login(ctx: Context) {
        const { username, password } = ctx.request.body as LoginRequestBody;

        if (this.authService.authenticate(username, password)) {
            // 设置cookie或其他身份验证的响应头

            // 发送重定向响应到/user路由
            ctx.status = 302;
            ctx.set('Location', '/user');
        } else {
            ctx.status = 400;
            ctx.body = {
                code: 400,
                message: '用户名或密码错误',
            };
        }
    }
}