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
        <div className="relative z-10 max-w-[1400px] mx-auto h-full px-6 lg:px-10">
          <div className="grid lg:grid-cols-[520px_1fr] h-full">
            {/* Left Content */}
            <div className="flex flex-col mt-6">
              <p className="text-sm font-semibold tracking-wider text-slate-600">
                PARTNER RESOURCE HUB
              </p>

              <h1 className="mt-4 text-3xl xl:text-4xl font-bold leading-[1.1] text-slate-900">
                Everything You Need To
                <span className="block text-blue-600">Start And Grow</span>
                As A Partner
              </h1>

              <p className="mt-6 text-base font-semibold leading-8 text-slate-700 max-w-lg">
                Access step-by-step guides, powerful affiliate tools, on-demand
                training, reporting insights, and proven strategies to grow your
                revenue with THE THAI TOURISM.
              </p>

              <div className="flex gap-4 mt-10">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium transition">
                  Get Started
                </button>

                <button className="border border-slate-300 bg-white hover:bg-slate-50 px-8 py-4 rounded-xl font-medium transition">
                  Explore Resources
                </button>
              </div>
            </div>

            {/* Right Side */}
            <div className="relative h-full">
              {/* Dashboard */}
              <img
                src={dashboardImg}
                alt=""
                className="
                  absolute
                  left-[5%]
                  top-[6%]
                  w-[280px]
md:w-[350px]
lg:w-[430px]
xl:w-[520px]
                  rounded-xl
                  shadow-2xl
                  z-20
                "
              />

              {/* Floating Cards */}
              <div
                className="
    absolute
    right-0
    top-[14%]
    space-y-5
    z-30
  "
              >
                {/* How-To Guides */}
                <div className="bg-white rounded-2xl shadow-xl px-3 py-4 w-[200px] flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-green-600" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      How-To Guides
                    </h4>

                    <p className="text-sm text-slate-500 mt-1">
                      Start learning
                    </p>
                  </div>
                </div>

                {/* Widget Setup */}
                <div className="bg-white rounded-2xl shadow-xl px-3 py-4 w-[200px] flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-purple-600" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Widget Setup
                    </h4>

                    <p className="text-sm text-slate-500 mt-1">Get started</p>
                  </div>
                </div>

                {/* Reporting */}
                <div className="bg-white rounded-2xl shadow-xl px-3 py-4 w-[220px] flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-amber-600" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">Reporting</h4>

                    <p className="text-sm text-slate-500 mt-1">Explained</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Feature Strip */}
          <div
            className="
              absolute
              bottom-2
              left-6
              right-6
              bg-white/95
              backdrop-blur-md
              rounded-3xl
              shadow-xl
              px-8
              py-4
              z-40
            "
          >
            <div className="grid grid-cols-8 gap-6 items-center">

              <div>
                <h4 className="font-semibold text-slate-900">
                  Quick Start
                </h4>
                <p className="text-sm text-slate-500">
                  Get up and running fast
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900">
                  Links & Widgets
                </h4>
                <p className="text-sm text-slate-500">
                  Tools that convert
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900">
                  Experience Tips
                </h4>
                <p className="text-sm text-slate-500">
                  Boost earnings
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900">
                  Reporting
                </h4>
                <p className="text-sm text-slate-500">
                  Track performance
                </p>
              </div>

              <div className="text-center border-l">
                <h4 className="text-2xl font-bold text-blue-600">
                  12,450+
                </h4>
                <p className="text-sm text-slate-500">
                  Active Partners
                </p>
              </div>

              <div className="text-center">
                <h4 className="text-2xl font-bold text-blue-600">
                  250+
                </h4>
                <p className="text-sm text-slate-500">
                  Guides & Articles
                </p>
              </div>

              <div className="text-center">
                <h4 className="text-2xl font-bold text-blue-600">
                  1.2M+
                </h4>
                <p className="text-sm text-slate-500">
                  Revenue (THB)
                </p>
              </div>

              <div className="text-center">
                <h4 className="text-2xl font-bold text-blue-600">
                  98%
                </h4>
                <p className="text-sm text-slate-500">
                  Satisfaction
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
