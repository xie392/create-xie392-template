import HelloWorld from '@/components/hello-world'
import { useCountStore } from '@/stores/count'

function HomePage() {
    const count = useCountStore((state) => state.count)
    const increment = useCountStore((state) => state.increment)
    const update = useCountStore((state) => state.update)

    return (
        <div className="container flex justify-center flex-col items-center min-h-screen">
            <div className="space-y-2">
                <h1 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 bg-clip-text text-transparent">
                    Home Page
                </h1>
                <HelloWorld />
                <p>Count: {count}</p>
                <div className="flex space-x-2">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 text-sm rounded"
                        onClick={increment}
                    >
                        Count + 1
                    </button>
                    <button
                        className="bg-green-500 hover:bg-green-700 text-white py-1 px-2 text-sm rounded"
                        onClick={() => update({ count: count - 1 })}
                    >
                        Count - 1
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HomePage
