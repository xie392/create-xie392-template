import { signInApi } from '@/api/user'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useUserStore } from '@/stores/user'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SignInPage() {
    const [formData, setFormData] = useState({ username: 'admin', password: '123456' })

    const router = useNavigate()
    const update = useUserStore((state) => state.update)

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        const { code, data, msg } = await signInApi(formData)
        if (code !== 200) {
            console.log('error:', msg)
            return
        }
        update({ token: data?.token })
        router('/')
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-10">
            <div className="w-full shadow-md p-4 max-w-md">
                <h2 className="text-center text-2xl font-bold leading-tight text-black">登录</h2>
                <p className="mt-2 text-center text-sm text-gray-600">没有账号？注册</p>
                <form className="mt-8" onSubmit={submitHandler}>
                    <div className="space-y-5">
                        <div>
                            <label className="text-base font-medium text-gray-900">用户名</label>
                            <div className="mt-2">
                                <Input
                                    placeholder="用户名"
                                    value={formData.username}
                                    onChange={(event) => setFormData({ ...formData, username: event.target.value })}
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label className="text-base font-medium text-gray-900">密码</label>
                            </div>
                            <div className="mt-2">
                                <Input
                                    placeholder="密码"
                                    type="password"
                                    value={formData.password}
                                    onChange={(event) => setFormData({ ...formData, password: event.target.value })}
                                />
                            </div>
                        </div>
                        <div>
                            <Button
                                className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80 mb-3"
                                type="submit"
                            >
                                登录
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignInPage
