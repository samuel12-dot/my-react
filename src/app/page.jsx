import React from 'react'
import Image from 'next/image'
import AllProducts from './components/AllProducts'

export default function Home() {
  return (
    <main>
      <h1>Welcome to volts program</h1>
      <AllProducts />
    </main>
  )
}
