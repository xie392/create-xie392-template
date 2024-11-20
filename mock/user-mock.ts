import { MockMethod } from 'vite-plugin-mock'
import { responseError, responseOK } from './_utils'

const baseUrl = '/api/user'

export default [
    {
        url: `${baseUrl}/sign-in`,
        method: 'post',
        response: ({ body }) => {
            const { username, password } = body
            if (username === 'admin' && password === '123456') {
                return responseOK({ token: 'xxxxx' })
            }
            return responseError(400, '用户名或密码错误')
        }
    }
] as MockMethod[]
