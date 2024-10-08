import React from 'react'
import Footer from './footer'
import Header from './header'

export default function App({className}:{className?: string}) {
  return (
    <div className={className}>
        <Header />
        <main>Main</main>
        <Footer className='fixed bottom-0 inset-x-0'/>
    </div>
  )
}
