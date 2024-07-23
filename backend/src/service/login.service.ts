import { Provide } from '@midwayjs/core';

@Provide()
export class AuthService {
    // 示例认证方法，实际应用中应替换为真实的认证逻辑
    public authenticate(username: string, password: string): boolean {
        return username === 'admin' && password === 'password';
    }
}