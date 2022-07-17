import React from 'react'
import Link from 'next/link';

function Logo() {
  return (
    <div>
        <Link href="/">
            <div className="absolute cursor-pointer top-3">
                <img className="h-[60px] sm:h-20" src="/logo.png" alt="" />
            </div>
        </Link>
    </div>
  )
}

export default Logo