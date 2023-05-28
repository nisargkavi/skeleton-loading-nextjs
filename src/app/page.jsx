import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col gap-5">
      <h1 className='text-2xl font-bold'>Skeleton Loading NEXT.JS (13.4.4) Example</h1>
      <div className='h-100'>
        <Link href='/products'>
          <button className="bg-blue-500 hover:bg-blue-700 hover:scale-105 transition-transform text-white font-bold py-2 px-4 rounded-xl">Products</button>
        </Link>
      </div>
    </div>
  )
}
