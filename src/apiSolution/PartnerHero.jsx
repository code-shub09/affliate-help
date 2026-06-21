import heroBg from "../images/resourseHero.png";
import dashboardImg from "../images/dashboardSnap2.png";
import { BookOpen, Code2, BarChart3 } from "lucide-react";
export default function PartnerHero() {
  return (
    <section className="h-[calc(100vh-80px)] overflow-hidden">
      <div className="relative h-full">
        {/* Background Image */}
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Left Gradient + Blur */}
        <div
          className="
            absolute
            inset-y-0
            left-0
            w-[35%]
            bg-gradient-to-r
            from-white
            via-white/95
            via-white/80
            to-transparent
            backdrop-blur-sm
          "
        />

        {/* Content Container */}
        <div className="relative z-10 max-w-[1400px] mx-auto h-full px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row h-full">
            {/* Left Content */}
            <div
              className="
        w-full
        lg:w-[42%]
        xl:w-[38%]
        flex
        flex-col
        justify-center
        pt-10
        lg:pt-0
        z-20
      "
            >
              <p className="text-xs sm:text-sm font-semibold tracking-wider text-slate-600">
                PARTNER RESOURCE HUB
              </p>

              <h1 className="mt-4 text-3xl sm:text-4xl xl:text-5xl font-bold leading-tight text-slate-900">
                Everything You Need To
                <span className="block text-blue-600">Start And Grow</span>
                As A Partner
              </h1>

              <p className="mt-5 text-sm sm:text-base leading-7 text-slate-700 max-w-lg">
                Access step-by-step guides, powerful affiliate tools, on-demand
                training, reporting insights, and proven strategies to grow your
                revenue.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
                  Get Started
                </button>

                <button className="bg-white border border-slate-300 px-6 py-3 rounded-xl">
                  Explore Resources
                </button>
              </div>
            </div>

            {/* Right Side */}
            <div
              className="
        w-full
        lg:w-[48%]
        xl:w-[53%]
        relative
        flex
        items-center
        justify-center
        mt-10
        lg:mt-0
      "
            >
              {/* Dashboard */}
              <img
                src={dashboardImg}
                alt=""
                className="
          w-[280px]
          sm:w-[360px]
          md:w-[460px]
          lg:w-[450px]
          xl:w-[530px]
          rounded-xl
          shadow-2xl
          z-20
        "
              />

              {/* Desktop Cards */}
              <div
                className="
          hidden
          lg:flex
          flex-col
          gap-5
          absolute
          right-0
          top-1/2
          -translate-y-1/2
          z-30
        "
              >
                {/* Card 1 */}
                <div className="bg-white rounded-2xl shadow-xl px-3 py-4 w-[200px] flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-green-600" />
                  </div>

                  <div>
                    <h4 className="font-semibold">How-To Guides</h4>
                    <p className="text-sm text-slate-500">Start learning</p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-2xl shadow-xl px-3 py-4 w-[200px] flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-purple-600" />
                  </div>

                  <div>
                    <h4 className="font-semibold">Widget Setup</h4>
                    <p className="text-sm text-slate-500">Get started</p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-2xl shadow-xl px-3 py-4 w-[220px] flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-amber-600" />
                  </div>

                  <div>
                    <h4 className="font-semibold">Reporting</h4>
                    <p className="text-sm text-slate-500">Explained</p>
                  </div>
                </div>
              </div>

              {/* Mobile Cards */}
              <div className="flex lg:hidden gap-3 mt-5 overflow-x-auto absolute -bottom-24 left-0 right-0 px-2">
                <div className="bg-white rounded-xl shadow-lg p-3 min-w-[180px]">
                  How-To Guides
                </div>

                <div className="bg-white rounded-xl shadow-lg p-3 min-w-[180px]">
                  Widget Setup
                </div>

                <div className="bg-white rounded-xl shadow-lg p-3 min-w-[180px]">
                  Reporting
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Strip */}
          <div
            className="
      mt-10
      lg:absolute
      lg:left-6
      lg:right-6
      lg:bottom-3
      bg-white/95
      backdrop-blur-md
      rounded-3xl
      shadow-xl
      px-6
      py-5
      z-40
    "
          >
            <div className="flex flex-wrap justify-between gap-5">
              <div className="min-w-[140px]">
                <h4 className="font-semibold">Quick Start</h4>
                <p className="text-sm text-slate-500">
                  Get up and running fast
                </p>
              </div>

              <div className="min-w-[140px]">
                <h4 className="font-semibold">Links & Widgets</h4>
                <p className="text-sm text-slate-500">Tools that convert</p>
              </div>

              <div className="min-w-[140px]">
                <h4 className="font-semibold">Experience Tips</h4>
                <p className="text-sm text-slate-500">Boost earnings</p>
              </div>

              <div className="min-w-[140px]">
                <h4 className="font-semibold">Reporting</h4>
                <p className="text-sm text-slate-500">Track performance</p>
              </div>

              <div className="text-center min-w-[110px]">
                <h4 className="text-2xl font-bold text-blue-600">12,450+</h4>
                <p className="text-sm text-slate-500">Active Partners</p>
              </div>

              <div className="text-center min-w-[110px]">
                <h4 className="text-2xl font-bold text-blue-600">250+</h4>
                <p className="text-sm text-slate-500">Guides</p>
              </div>

              <div className="text-center min-w-[110px]">
                <h4 className="text-2xl font-bold text-blue-600">1.2M+</h4>
                <p className="text-sm text-slate-500">Revenue</p>
              </div>

              <div className="text-center min-w-[110px]">
                <h4 className="text-2xl font-bold text-blue-600">98%</h4>
                <p className="text-sm text-slate-500">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
