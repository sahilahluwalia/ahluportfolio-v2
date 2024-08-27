'use client'

import dynamic from 'next/dynamic'

const App = dynamic(() => import('../../App'), { ssr: false })
console.log("App component imported successfully");
export function ClientOnly() {
    return <App />
}
