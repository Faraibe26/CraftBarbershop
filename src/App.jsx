export default function BarbershopWebsite() {
  const logo = "/logo.jpg";
  const blackTee = "/street.jpg";

  const gallery = [
    {
      src: "/haircut1.jpg",
      title: "Sharp Fade",
    },
    {
      src: "/haircut2.jpg",
      title: "Clean Crop",
    },
    {
      src: "/haircut3.jpg",
      title: "Classic Taper",
    },
    {
      src: "/haircut4.jpg",
      title: "Premium Grooming",
    },
  ];

  const services = [
    { name: "Haircut", price: "$25+" },
    { name: "Fade", price: "$35+" },
    { name: "Haircut + Beard", price: "$45+" },
    { name: "Premium Service", price: "$60" },
  ];

  return (
    <div 
      className="min-h-screen text-white"
      style={{
        backgroundImage: `url(${logo})`,
        backgroundSize: '50%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark overlay for better text visibility */}
      <div className="fixed inset-0 bg-black/35 pointer-events-none" />
      
      <section className="relative z-10 overflow-hidden min-h-screen flex items-center">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 w-full">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.45em] text-amber-300 brightness-125">
                Craft Barbershop
              </p>
              <h1 className="mt-5 text-5xl font-black uppercase leading-[0.9] tracking-tight md:text-7xl text-white brightness-150 drop-shadow-xl">
                Brooklyn.
                <br />
                Cut Different.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-white md:text-lg brightness-125 drop-shadow-lg font-semibold">
                Premium grooming in <span className="font-bold text-amber-300">Bay Ridge, Brooklyn</span>. Clean fades,
                sharp lines, and detail-driven cuts by <span className="font-bold text-amber-300">Mo</span>.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://www.instagram.com/craftbarbershop26"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-amber-400 px-7 py-3 font-semibold uppercase tracking-wide text-black transition hover:scale-105 shadow-lg"
                >
                  Book with Mo
                </a>
                <a
                  href="#gallery"
                  className="rounded-full border border-white/40 bg-black/40 px-7 py-3 font-semibold uppercase tracking-wide text-white backdrop-blur transition hover:bg-black/60 shadow-lg"
                >
                  View Gallery
                </a>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </section>

      <section id="location" className="relative z-20 border-b border-white/10 px-6 py-20 bg-neutral-950/90">
        <div className="mx-auto mb-10 max-w-7xl">
          <p className="text-xs uppercase tracking-[0.45em] text-amber-300">About</p>
          <h2 className="mt-4 text-3xl font-black uppercase md:text-5xl">Mo</h2>
          <p className="mt-4 max-w-2xl text-neutral-300">
            Craft Barbershop, led by <span className="font-semibold text-white"> Mo </span>, brings precision, consistency, and attention to detail to every cut. Based in <span className="font-semibold text-white">Bay Ridge</span>, the shop has built a reputation for clean fades, sharp lines, and a modern approach to classic grooming.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-7xl">
          <a
            href="https://www.google.com/maps/dir//CRAFT+BARBERSHOP,+9301+3rd+Ave,+Brooklyn,+NY+11209/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x89c24f003d16d6bf:0xaf8683eef93a931f?sa=X&ved=1t:57443&ictx=111"
            target="_blank"
            rel="noreferrer"
            className="group block rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:bg-white/10"
          >
            <div className="flex items-start justify-between gap-8">
              <div className="flex-1">
                <p className="text-xs uppercase tracking-[0.45em] text-amber-300">Location</p>
                <div className="mt-4 flex items-center gap-4">
                  <h3 className="text-3xl font-black uppercase">Craft Barbershop</h3>
                  <div>
                    <p className="text-amber-300 font-semibold flex items-center gap-1 whitespace-nowrap">
                      ⭐ 4.9 / 5.0
                    </p>
                    <p className="text-xs text-neutral-400">(Google)</p>
                  </div>
                </div>

                <div className="mt-6 space-y-3 text-neutral-300">
                  <p className="font-semibold text-white underline group-hover:text-amber-300">
                    9301 3rd Avenue, Brooklyn, NY
                  </p>
                  <p>Tuesday–Sunday • 11 AM – 8 PM</p>
                  <p>
                    📞 <a href="tel:+19297410403" className="underline hover:text-amber-300">(929) 741-0403</a>
                  </p>
                  <p>
                    Instagram:
                    <a
                      href="https://www.instagram.com/craftbarbershop26"
                      target="_blank"
                      rel="noreferrer"
                      className="ml-1 text-amber-300 underline hover:text-amber-200"
                    >
                      @craftbarbershop26
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-4">
                <div className="h-80 w-80 overflow-hidden rounded-lg border border-white/10 flex-shrink-0">
                  <img
                    src={blackTee}
                    alt="Craft Barbershop"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <p className="text-xs uppercase tracking-[0.45em] text-amber-300">Services</p>
          <h2 className="mt-4 text-4xl font-black uppercase md:text-6xl">Built Sharp.</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.name}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold uppercase">{service.name}</h3>
                  <span className="rounded-full bg-amber-400/15 px-3 py-1 text-sm font-semibold text-amber-300">
                    {service.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="relative z-20 px-6 py-20 bg-neutral-950/90">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.45em] text-amber-300">Gallery</p>
          <h2 className="mt-4 text-4xl font-black uppercase md:text-6xl">The Look.</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {gallery.map((item) => (
              <div
                key={item.title}
                className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-black"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
