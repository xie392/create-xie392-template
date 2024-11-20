import { signInApi } from '@/api/user'
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
                                <input
                                    placeholder="用户名"
                                    type="text"
                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
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
                                <input
                                    placeholder="密码"
                                    type="password"
                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    value={formData.password}
                                    onChange={(event) => setFormData({ ...formData, password: event.target.value })}
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80 mb-3"
                                type="submit"
                            >
                                登录
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignInPage
