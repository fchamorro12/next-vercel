import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'

export default function AboutPage() {
    return (
        <MainLayout>
            <h1>About page</h1>
         
            <h1 className={'title'}>
                Ir a <Link href="/" replace>Home</Link>
            </h1>

            <p className={'description'}>
                Get started by editing{' '}
                <code className={'code'}>pages/about.tsx</code>
            </p>
        </MainLayout>
    )
}
