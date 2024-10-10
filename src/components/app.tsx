import React from 'react'
import Footer from './footer'
import Header from './header'
import Address from './eats/delivery/address'
import { cn } from '@/lib/utils'
import DeliverOptions from './eats/delivery/deliver-options'
import Cart from './eats/cart/cart'

export default function App({ className }: { className?: string }) {
  return (
    <div className={cn(`flex flex-col h-full ${className}`)}>
      <Header />
      <main className='relative grow px-4 pt-2'>
        <div className='flex items-center justify-between'>
          <Address />
          <div className='flex items-center'>
            <DeliverOptions />
            <Cart />
          </div>

        </div>
      </main>
      <Footer className='fixed bottom-0 inset-x-0 bg-white z-50' />
    </div>
  )
}
