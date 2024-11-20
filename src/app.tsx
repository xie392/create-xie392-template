import { Suspense } from 'react'
import GlobalLoading from '@/components/ui/global-loading'
import withAuth from '@/components/common/with-auth'

import { useRoutes } from 'react-router-dom'
import routes from '~react-pages'

function App() {
    const router = useRoutes(routes)
    return <Suspense fallback={<GlobalLoading />}>{router}</Suspense>
}

export default withAuth(App)
