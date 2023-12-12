import { SignInButton, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { ModeToggle } from './SelectMode/SelectMode'

function Header() {
    return (
        <header className="flex items-center justify-between">
            <Link href='/' className="flex">
                <div className="bg-[#0061fe] w-fit flex items-center">
                    <Image src="https://www.shareicon.net/data/64x64/2015/11/08/668675_box_512x512.png" className="invert px-2" width={50} height={50} alt='logo' />
                </div>
                <span className='py-4 px-2 text-2xl font-bold'>Dropbox</span>
            </Link>
            <div className="flex space-x-5 px-5 items-center">
                <UserButton afterSignOutUrl='/'/>
                <SignedOut>
                    <SignInButton afterSignInUrl='/dashboard' mode='modal'></SignInButton>
                </SignedOut>
                <ModeToggle />
            </div>
        </header>
    )
}

export default Header