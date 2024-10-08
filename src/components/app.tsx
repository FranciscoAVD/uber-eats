import React from 'react'
import Footer from './footer'

export default function App({className}:{className?: string}) {
  return (
    <div className={className}>
        <header>Header</header>
        <main>Main</main>
        <Footer className='fixed bottom-0 inset-x-0'/>
    </div>
  )
}
