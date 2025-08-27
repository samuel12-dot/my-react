import React from 'react'
import Link from 'next/link'

export default function NavbarLink({ link, title }) {
    return (
        <ul>
            <li>
                <Link href={link}>{title}</Link>
            </li>
        </ul>
    )
}
