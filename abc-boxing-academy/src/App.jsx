export default function ABCBoxingAcademy() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517438322307-e67111335449?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide uppercase">
            A B C Academy Boxing
          </h1>

          <p className="mt-6 text-lg md:text-2xl text-gray-200 leading-relaxed">
            From Mexico to Miami — building discipline, confidence, and champions.
          </p>

          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="tel:3059673368"
              className="bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-2xl text-lg font-bold shadow-lg"
            >
              Call Now: (305) 967-3368
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-red-500 uppercase">
              About The Academy
            </h2>

            <p className="text-lg text-gray-300 leading-8">
              ABC Academy Boxing Crespo was born from years of experience and
              training in Latin American boxing, inspired by boxing academies and
              training systems developed in Cuba and Mexico.
            </p>

            <p className="text-lg text-gray-300 leading-8 mt-6">
              Today, the vision and hard work continue in Miami, creating a
              professional and motivating environment for children, young
              athletes, and competitive fighters.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl border border-zinc-800">
            <img
              src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1200&auto=format&fit=crop"
              alt="Boxing Academy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold uppercase text-red-500">
            Join The Academy
          </h2>

          <p className="text-gray-300 text-lg mt-6 leading-8">
            Whether you're training for fitness, discipline, or competition,
            ABC Academy Boxing welcomes fighters of all levels.
          </p>

          <div className="mt-10">
            <a
              href="tel:3059673368"
              className="bg-red-600 hover:bg-red-700 transition px-10 py-5 rounded-2xl text-xl font-bold shadow-lg"
            >
              (305) 967-3368
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}