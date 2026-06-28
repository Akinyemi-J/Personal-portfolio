import { useState } from 'react'
import modeling1 from '../assets/modeling1.jpg'
import modeling2 from '../assets/modeling2.jpeg'
import modeling3 from '../assets/modeling3.jpg'
import basketball1 from '../assets/basketball-pic-1.jpg'
import basketball2 from '../assets/basketball-pic-2.jpg'
import basketball3 from '../assets/basketball-pic-3.jpg'

function BeyondTheCode() {
  const modelingPhotos = [modeling1, modeling2, modeling3]
  const [currentPhoto, setCurrentPhoto] = useState(0)

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % modelingPhotos.length)
  }

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + modelingPhotos.length) % modelingPhotos.length)
  }

  return (
    <section id="beyond" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-[#F5F3FF] text-4xl font-bold text-center mb-4">
          Beyond the <span className="text-violet-500">Code</span>
        </h2>
        <p className="text-[#9CA3AF] text-center max-w-2xl mx-auto mb-16">
          When I'm not building software, I'm usually in front of a camera or on a court.
        </p>

        {/* Modeling carousel */}
        <div className="mb-16">
          <h3 className="text-[#F5F3FF] text-xl font-semibold mb-6 text-center">Modeling</h3>

          <div className="relative max-w-md mx-auto">
            <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/10 mb-4">
              <img 
                src={modelingPhotos[currentPhoto]} 
                alt={`Modeling photo ${currentPhoto + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>

            <button
              onClick={prevPhoto}
              className="absolute left-[-16px] top-1/2 -translate-y-1/2 bg-[#15131C] border border-white/10 text-[#F5F3FF] w-9 h-9 rounded-full flex items-center justify-center hover:border-violet-400"
            >
              ‹
            </button>
            <button
              onClick={nextPhoto}
              className="absolute right-[-16px] top-1/2 -translate-y-1/2 bg-[#15131C] border border-white/10 text-[#F5F3FF] w-9 h-9 rounded-full flex items-center justify-center hover:border-violet-400"
            >
              ›
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {modelingPhotos.map((_, index) => (
              <span
                key={index}
                className={`w-2 h-2 rounded-full ${index === currentPhoto ? 'bg-violet-500' : 'bg-white/20'}`}
              />
            ))}
          </div>
        </div>

        {/* Basketball */}
        <div>
          <h3 className="text-[#F5F3FF] text-xl font-semibold mb-4 text-center">Basketball</h3>
          <p className="text-[#9CA3AF] text-center max-w-xl mx-auto mb-6">
            Basketball's been a constant in my life equal parts strategy and instinct,
            not too different from debugging a tricky model.
          </p>

          <div className="grid grid-cols-3 gap-2">
            <div className="h-100 rounded-xl overflow-hidden border border-white/10">
              <img src= {basketball3} alt="Basketball" className="w-full h-full object-cover" />
            </div>
            <div className="h-100 rounded-xl overflow-hidden border border-white/10">
              <img src={basketball1} alt="Basketball" className="w-full h-full object-cover" />
            </div>
            <div className="h-100 rounded-xl overflow-hidden border border-white/10">
              <img src={basketball2} alt="Basketball" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default BeyondTheCode