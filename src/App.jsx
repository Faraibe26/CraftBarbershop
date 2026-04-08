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
    { name: "Haircut", price: "$25" },
    { name: "Beard Maintenance", price: "$25" },
    { name: "Shave", price: "$25" },
    { name: "Hot Towel Shave", price: "$30" },
    { name: "Line Up Only", price: "$10" },
    { name: "Eyebrow Trimming", price: "$10" },
    { name: "Shampoo & Conditioning", price: "$10" },
    { name: "Waxing", price: "$10" },
    { name: "Blow Out", price: "$15" },
  ];

  return (
    <div className="min-h-screen text-white">
      {/* Hero Section with Logo Background */}
      <section className="relative overflow-hidden min-h-screen flex items-center" style={{
        backgroundImage: `url(${logo})`,
        backgroundSize: '40%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}>
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/35 pointer-events-none" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-24 w-full">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.45em] text-amber-300 brightness-125">
                Craft Barbershop
              </p>
              <h1 className="mt-5 text-4xl md:text-5xl lg:text-7xl font-black uppercase leading-[0.9] tracking-tight text-white brightness-150 drop-shadow-xl">
                Brooklyn.
                <br />
                Cut Different.
              </h1>
              <p className="mt-6 max-w-xl text-sm md:text-base lg:text-lg leading-7 text-white brightness-125 drop-shadow-lg font-semibold">
                Premium grooming in <span className="font-bold text-amber-300">Bay Ridge, Brooklyn</span>. Clean fades,
                sharp lines, and detail-driven cuts by <span className="font-bold text-amber-300">Moe</span>.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 md:gap-4">
                <a
                  href="https://www.instagram.com/craftbarbershop26"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-amber-400 px-6 md:px-7 py-2.5 md:py-3 font-semibold uppercase tracking-wide text-black transition hover:scale-105 shadow-lg text-sm md:text-base"
                >
                  Book with Moe
                </a>
                <a
                  href="#gallery"
                  className="rounded-full border border-white/40 bg-black/40 px-6 md:px-7 py-2.5 md:py-3 font-semibold uppercase tracking-wide text-white backdrop-blur transition hover:bg-black/60 shadow-lg text-sm md:text-base"
                >
                  View Gallery
                </a>
              </div>
            </div>
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </section>

      <section id="location" className="relative z-20 border-b border-white/10 px-6 py-20 bg-neutral-950/90">
        <div className="mx-auto mb-10 max-w-7xl">
          <p className="text-xs uppercase tracking-[0.45em] text-amber-300">About</p>
          <h2 className="mt-4 text-3xl font-black uppercase md:text-5xl">Moe</h2>
          <p className="mt-4 max-w-2xl text-neutral-300">
            Craft Barbershop, led by <span className="font-semibold text-white">Moe</span>, brings precision, consistency, and attention to detail to every cut. Based in <span className="font-semibold text-white">Bay Ridge</span>, the shop has built a reputation for clean fades, sharp lines, and a modern approach to classic grooming.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-7xl">
          <a
            href="https://www.google.com/maps/dir//CRAFT+BARBERSHOP,+9301+3rd+Ave,+Brooklyn,+NY+11209/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x89c24f003d16d6bf:0xaf8683eef93a931f?sa=X&ved=1t:57443&ictx=111"
            target="_blank"
            rel="noreferrer"
            className="group block rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:bg-white/10"
          >
            <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-8">
              <div className="flex-1 w-full">
                <p className="text-xs uppercase tracking-[0.45em] text-amber-300">Location</p>
                <div className="mt-4 flex flex-col lg:flex-row lg:items-center lg:gap-4">
                  <h3 className="text-2xl lg:text-3xl font-black uppercase">Craft Barbershop</h3>
                  <div className="mt-3 lg:mt-0">
                    <p className="text-amber-300 font-semibold flex items-center gap-1 whitespace-nowrap">
                      ⭐ 4.9 / 5.0
                    </p>
                    <p className="text-xs text-neutral-400">(Google)</p>
                  </div>
                </div>

                <div className="mt-6 space-y-2 lg:space-y-3 text-sm lg:text-base text-neutral-300">
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
              
              <div className="w-full lg:w-auto flex justify-center lg:justify-end">
                <div className="h-48 w-48 lg:h-80 lg:w-80 overflow-hidden rounded-lg border border-white/10 flex-shrink-0">
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
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-6xl font-black uppercase">Built Sharp.</h2>
          <div className="mt-12 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.name}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-4 md:p-6 backdrop-blur"
              >
                <div className="flex items-start justify-between gap-3 md:gap-4">
                  <h3 className="text-lg md:text-2xl font-bold uppercase">{service.name}</h3>
                  <span className="rounded-full bg-amber-400/15 px-2.5 md:px-3 py-1 text-xs md:text-sm font-semibold text-amber-300 whitespace-nowrap">
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
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-6xl font-black uppercase">The Look.</h2>
          <div className="mt-12 grid gap-4 md:gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((item) => (
              <div
                key={item.title}
                className="group relative aspect-[4/5] overflow-hidden rounded-[1rem] md:rounded-[2rem] border border-white/10 bg-black"
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

      <footer className="border-t border-white/10 bg-neutral-950 px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {/* Brand Section */}
            <div>
              <p className="text-xs uppercase tracking-[0.45em] text-amber-300 brightness-125">
                Craft Barbershop
              </p>
              <h3 className="mt-3 text-xl md:text-2xl font-black uppercase">Craft.</h3>
              <p className="mt-4 text-xs md:text-sm text-neutral-400">
                Premium grooming in Bay Ridge, Brooklyn. Clean cuts, sharp lines, and detail-driven service.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <p className="text-xs uppercase tracking-[0.45em] text-amber-300 brightness-125 font-semibold">
                Quick Links
              </p>
              <ul className="mt-4 space-y-2 md:space-y-3 text-xs md:text-sm text-neutral-300">
                <li>
                  <a href="#gallery" className="hover:text-amber-300 transition">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#location" className="hover:text-amber-300 transition">
                    Location & Hours
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/craftbarbershop26"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-amber-300 transition"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <p className="text-xs uppercase tracking-[0.45em] text-amber-300 brightness-125 font-semibold">
                Contact
              </p>
              <ul className="mt-4 space-y-2 md:space-y-3 text-xs md:text-sm text-neutral-300">
                <li>
                  <a href="tel:+19297410403" className="hover:text-amber-300 transition">
                    (929) 741-0403
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps/dir//CRAFT+BARBERSHOP,+9301+3rd+Ave,+Brooklyn,+NY+11209"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-amber-300 transition"
                  >
                    9301 3rd Avenue, Brooklyn, NY
                  </a>
                </li>
                <li>Tuesday–Sunday • 11 AM – 8 PM</li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-10 border-t border-white/10" />

          {/* Bottom Section */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-neutral-500 md:text-left">
              © 2026 Craft Barbershop. All rights reserved.
            </p>
            <p className="text-center text-xs text-neutral-600">
              Premium grooming by Moe in Bay Ridge, Brooklyn
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
