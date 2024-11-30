import { Loader2 } from 'lucide-react'

export default function UnderDevelopment() {
  return (
    <div className="min-h-screen bg-[#0D4049] flex flex-col items-center justify-center p-4 text-white font-poppins">
      <div className="w-full max-w-md space-y-12 text-center">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-[#15E599]">We&apos;re Coming Soon</h1>
          <p className="text-xl text-[#F8C200]">Our website is under construction</p>
        </div>

        <div className="flex justify-center">
          <Loader2 className="w-12 h-12 animate-spin text-[#0B9864]" />
        </div>

        {/* Countdown Timer */}
        <div className="flex justify-center space-x-4 text-2xl font-semibold">
          {['Days', 'Hours', 'Minutes', 'Seconds'].map((unit, index) => (
            <div key={unit} className="bg-[#0B9864] rounded-lg p-3 w-20">
              <span className="block text-3xl text-[#F8C200]">{15 - index * 5}</span>
              <span className="text-xs text-[#15E599]">{unit}</span>
            </div>
          ))}
        </div>

        <p className="text-sm text-[#15E599] max-w-sm mx-auto">
          We&apos;re working hard to bring you an amazing experience. 
          Thank you for your patience!
        </p>
      </div>
    </div>
  )
}

