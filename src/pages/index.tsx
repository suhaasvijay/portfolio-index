import Image from 'next/image'
import { FC } from "react";

const links = [
  {
    title: "Portfolio",
    link: "https://portfolio-suhaas.netlify.app/"
  }
]

const Index: FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24">
      <div className='grid grid-cols-5 w-full max-w-6xl'>
        <div className='col-span-2 items-center justify-center flex'>
          <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/2 after:translate-y-6  after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-yellow-100 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#f20089] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
              src="/profile.png"
              alt="Next.js Logo"
              width={400}
              height={70}
              priority
            />
          </div>
        </div>
        <div className='col-span-3 justify-center items-center flex flex-col'>
          {links.map(({ title, link }) => (
            <a
              key={title}
              href={link}
              target='_blank'
              className="border-2 border-gray-500 w-[70%] flex justify-center py-3 rounded-2xl mt-3"
            >
              {title}
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Index;