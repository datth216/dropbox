import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="">
      <div className="pt-14 text-center bg-[#1e1919] pb-[72px] text-white dark:bg-[#020817]">
        <div className="px-[250px]">
          <div className="flex flex-col">
            <h2 className="text-5xl font-sans">Securely collaborate on your content anywhere, anytime</h2>
            <p className="mt-4 mb-8">With Dropbox, you get a full suite of tools designed to help you create, share, manage, and track content more efficiently. Plus, proven cloud storage you can trust.</p>
            <Button className="bg-[#3984ff] max-w-[226px] p-6 mx-auto my-0 hover:bg-[#3985ffea]">Get started now</Button>
          </div>
        </div>
      </div>
    </main>
  )
}
