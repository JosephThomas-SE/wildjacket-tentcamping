// app/page.js
"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <main className="p-4 md:p-10 bg-gradient-to-br from-green-50 to-yellow-100 min-h-screen">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Discover Vagamon Tent Camping
          </h1>
          <p className="text-green-800 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Escape the ordinary. Embrace the wild. Stay under the stars in the scenic hills of Vagamon.
            Whether you seek adventure, serenity, or both — Vagamon Tent Camping offers a soul-refreshing
            experience tailored just for you.
          </p>
          <Link
            href="/rates"
            className="inline-block mt-4 bg-green-700 hover:bg-green-800 text-white text-lg font-medium px-6 py-3 rounded-full shadow-md"
          >
            View Stay Packages
          </Link>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-6">
            Why Choose Vagamon Tent Camping?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto text-green-800">
            <div>
              <h3 className="text-xl font-semibold mb-2">🌄 Breathtaking Mountain Views</h3>
              <p>
                Wake up to panoramic views of misty mountains. Our campsite is located on a secluded ridge
                that offers a 360° view of Vagamon&#39;s beauty.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">🏕️ Comfortable Tent Stays</h3>
              <p>
                Choose from a variety of packages — with or without food — to match your budget and
                comfort. Clean tents, cozy bedding, and fresh air guaranteed.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">🚶‍♂️ Scenic Waterfall Treks</h3>
              <p>
                Venture into the wild with guided treks to not one but two majestic waterfalls nearby.
                Ideal for nature lovers and photography enthusiasts.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">🚙 Jeep Safari Add-On</h3>
              <p>
                Craving more thrill? Hop on a rugged jeep safari across Vagamon&#39;s hidden trails and off-road
                wonders — bookable on demand.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-6">
            Perfect For Groups, Couples & Solo Travelers
          </h2>
          <p className="text-green-800 text-center max-w-4xl mx-auto">
            With capacity to host 20–30 campers daily, Vagamon Tent Camping is ideal for friends, families,
            corporate retreats, and backpackers. Safe, scenic, and truly serene.
          </p>
        </section>

        <section className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-4">📍 Located in the Heart of Vagamon</h2>
          <p className="text-green-800 max-w-3xl mx-auto mb-6">
            Just 15 minutes from Vagamon town center. Find us easily on Google Maps and Booking.com — or
            message us on WhatsApp to guide you straight to the camp.
          </p>
          <Link
            href="https://maps.app.goo.gl/iRL4VBjBgjsRLZsk8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full text-lg font-medium"
          >
            View Location on Maps
          </Link>
        </section>

        <section className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-4">📞 Contact & Bookings</h2>
          <p className="text-green-800 max-w-xl mx-auto mb-6">
            Call or WhatsApp us at <strong>+91 62385 70441</strong>. We&#39;re happy to help you plan your perfect Vagamon getaway.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full text-lg font-medium"
          >
            Contact Us
          </Link>
        </section>
      </main>
    </>
  );
}




    {/* <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
       
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing, Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>



      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div> */}
