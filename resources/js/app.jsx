import './bootstrap';
import '../css/app.css'

import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import Layout from '@/Layouts/Layout';

createInertiaApp({
    title: title => title ? `${title} - CRUD Product` : "CRUD Product",
    resolve: name =>
    {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
        let page = pages[`./Pages/${name}.jsx`]
        page.default.layout = page.default.layout || ((page) => <Layout children={page} />)
        return page
    },
    setup({ el, App, props })
    {
        createRoot(el).render(<App {...props} />)
    },
    progress: {
        // ini untuk warna progress saat pindah halaman
        color: '#f00',
        // untuk memunculkan spinner saat loading
        showSpinner: true
    }
})