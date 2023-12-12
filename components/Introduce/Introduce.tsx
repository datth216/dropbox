import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Introduce() {
    return (
        <section className="sm:px-[250px] max-w-[1200px] mx-auto my-0 ssm:px-3">
            <div className="flex flex-col">
                <h2 className="sm:text-3xl lg:text-5xl font-sans ssm:text-xl">Securely collaborate on your content anywhere, anytime</h2>
                <p className="mt-4 mb-8 ssm:text-xs sm:text-lg">With Dropbox, you get a full suite of tools designed to help you create, share, manage, and track content more efficiently. Plus, proven cloud storage you can trust.</p>
                <Link href='/dashboard' className="bg-[#3984ff] max-w-[250px] ssm:p-3 sm:p-6 mx-auto my-0 hover:bg-[#3985ffea] flex">
                    Get started now
                    <ArrowRight className="ml-5" />
                </Link>
            </div>
        </section>
    )
}

export default Introduce