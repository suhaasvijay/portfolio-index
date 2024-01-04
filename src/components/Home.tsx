import Image from 'next/image'

const links = [
  {
    title: "Portfolio",
    link: "https://portfolio-suhaas.netlify.app/"
  },
]

export default function Home() {
  return (
    <main className="flex flex-col items-center h-full py-20 bg-[#0D1117]">
      <div className='grid grid-cols-12 max-w-7xl'>
        <div className='col-span-3 items-center flex flex-col gap-y-8'>
          <div className="relative flex place-items-center before:absolute before:h-[10px] before:w-[180px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[160px] after:translate-x-1/2 after:translate-y-6  after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-orange-500 before:dark:opacity-90 after:dark:from-sky-900 after:dark:via-teal-500 after:dark:opacity-90 before:lg:h-[160px] before:left-24 before:top-10 z-[5]">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-full z-5"
              src="/profile.png"
              alt="Next.js Logo"
              width={400}
              height={70}
              priority
            />
          </div>
          <h1 className='text-3xl'>Suhaas V</h1>
        </div>
        <div></div>

        <div className='col-span-8 justify-center items-center m-4'>
          <h1 className='text-3xl mb-4'>Projects</h1>
          <div className='justify-center items-center rounded-md flex flex-col w-full h-full border-2 border-gray-500 '>
            {links.map(({ title, link }) => (
              <a
                key={title}
                href={link}
                target='_blank'
                className="border-2 border-gray-500 w-[70%] flex justify-center py-3 rounded-2xl"
              >
                {title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </main >
  )
}
