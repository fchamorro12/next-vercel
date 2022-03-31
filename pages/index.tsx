import Link from 'next/link'
import { ReactElement } from 'react'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { MainLayout } from '../components/layouts/MainLayout'

export default function HomePage() {
    return (
        <>
            <h1>Home page</h1>
                
            <h1 className={'title'}>
                Ir a <Link href="/about" replace>About</Link>
            </h1>

            <p className={'description'}>
                Get started by editing{' '}
                <code className={'code'}>pages/index.tsx</code>
            </p>
        </>
    )
}

HomePage.getLayout = function getLayout( page: ReactElement ) {
    return (
        <MainLayout>
            <DarkLayout>
                {page}
            </DarkLayout>
        </MainLayout>
    )
}
