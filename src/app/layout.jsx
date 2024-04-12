import { Providers } from '@/app/providers';
import { MainLayout } from '@/components/MainLayout';

import '@/styles/tailwind.css';

export const metadata = {
    title: {
        template: 'DPC',
        default:
            'DPC Proposal'
    },
    description: 'Delta Park Calisthenics Project Proposal',
    alternates: {
        types: {
            'application/rss+xml': `${ process.env.NEXT_PUBLIC_SITE_URL }/feed.xml`
        }
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="h-full antialiased" suppressHydrationWarning>
        <body className="flex h-full">
        <Providers>
            <div className="flex w-full">
                <MainLayout>{ children }</MainLayout>
            </div>
        </Providers>
        </body>
        </html>
    );
}
