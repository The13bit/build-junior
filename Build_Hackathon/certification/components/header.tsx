import Link from 'next/link'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

export function Header() {
  return (
    <header className="w-full py-4 px-4 sm:px-6 lg:px-8 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Image src="https://avatars.githubusercontent.com/u/128221545?v=4&size=64" alt="Logo" width={64} height={64} className='rounded-full' />
        <nav className="hidden sm:flex space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/tokenTransfer">Transfer</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/verifySBT">Verify</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/getTokenID">GetTokenID</Link>
          </Button>
        </nav>
        <div className="sm:hidden">
          <Button variant="outline" size="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

