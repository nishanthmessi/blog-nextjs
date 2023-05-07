import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: '400'})

const Hero = () => {
  return (
    <div className={`${poppins.className} flex flex-col justify-center items-end h-[90vh] gap-2`}>
      <div className="flex ">
        <h1>Located</h1>
      </div>
      <div className="flex justify-end items-end">
        <h1 className="text-[8rem] font-bold">Nisanth | Full Stack Developer</h1> 
      </div>
    </div>
  )
}

export default Hero