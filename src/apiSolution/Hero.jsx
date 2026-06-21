export  function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          
          {/* Left Content */}
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight">
              Power Your Platform
              <br />
              With Thailand Travel
              <br />
              Experiences
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed">
              Integrate The Thai Tourism API Solutions to access
              1000+ Thailand experiences including tours,
              attraction tickets, transfers, cruises, and activities.
            </p>

            <div className="mt-10 flex flex-col gap-4 max-w-md">
              <button className="group bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl px-8 py-5 flex items-center justify-center gap-3 transition-all">
                Apply for API Access

                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              <button className="border-2 border-blue-200 hover:border-blue-500 text-slate-900 font-semibold rounded-2xl px-8 py-5 flex items-center justify-center gap-3 transition-all">
                Talk to Partnerships

                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 10h8M8 14h5m7 7-4-4H7a4 4 0 01-4-4V7a4 4 0 014-4h10a4 4 0 014 4v10a4 4 0 01-4 4z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="/images/thailand-api-hero.png"
              alt="Thailand Tourism API"
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}