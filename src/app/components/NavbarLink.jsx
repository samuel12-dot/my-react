import React from 'react'
import Link from 'next/link'

export default function li({ link, title }) {
  return (
    <li>
        <Link href={link}>{title}</Link>
    </li>
  )
}
