import React from 'react'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Image src={'https://images.unsplash.com/photo-1751225750479-43ad27b94fa0?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="Image" width={500} height={900}/>
      <h1>Welcome to volts program</h1>
    </main>
  )
}
