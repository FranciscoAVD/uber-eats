import React from 'react'
import Footer from './footer'
import Header from './header'
import Address from './eats/delivery/address'
import { cn } from '@/lib/utils'

export default function App({className}:{className?: string}) {
  return (
    <div className={cn(`relative flex flex-col h-full ${className}`)}>
        <Header />
        <main className='grow px-4 pt-2'>
          <div>
            <Address />
          </div>
        </main>
        <Footer className='mt-auto'/>
    </div>
  )
}
