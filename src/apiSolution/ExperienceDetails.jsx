import {
  Type,
  Image as ImageIcon,
  MapPin,
  BadgeDollarSign,
  Calendar,
  Star,
  Bus,
  SlidersHorizontal,
} from "lucide-react";

import experienceImg from "../images/expApiSol1.png";

export default function ExperienceDetails() {
  const features = [
    {
      icon: Type,
      title: "Product titles & descriptions",
    },
    {
      icon: ImageIcon,
      title: "Images & visual assets",
    },
    {
      icon: MapPin,
      title: "Destination & category mapping",
    },
    {
      icon: BadgeDollarSign,
      title: "Pricing context",
    },
    {
      icon: Calendar,
      title: "Availability information",
    },
    {
      icon: Star,
      title: "Experience highlights",
    },
    {
      icon: Bus,
      title: "Logistics & itinerary details",
    },
    {
      icon: SlidersHorizontal,
      title: "Filtering & discovery support",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid lg:grid-cols-[1.2fr_1.4fr] gap-6">

          {/* Left Features */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Everything You Need to Merchandise Experiences Properly
            </h2>

            <div className="grid md:grid-cols-2 gap-3">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="border border-slate-200 rounded-xl px-5 py-4 flex items-center gap-4 bg-white"
                >
                  <item.icon className="w-6 h-6 text-blue-600 shrink-0" />

                  <span className="font-medium text-slate-700">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Demo Panel */}
          <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm">

            <div className="grid grid-cols-[80px_1fr] h-full">

              {/* Sidebar */}
              <div className="bg-[#081a40] text-white py-4">
                <div className="space-y-5 px-2 text-xs">

                  <div className="bg-blue-600 text-center rounded-lg px-1 py-2">
                    Overview
                  </div>

                  <div>Inventory</div>
                  <div>Pricing</div>
                  <div>Media</div>
                  <div>Itinerary</div>
                  <div>Reviews</div>
                  <div>Settings</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-slate-900 mb-4">
                  Experience Details
                </h3>

                <div className="grid md:grid-cols-[1.2fr_1fr] gap-4">

                  <div>
                    <img
                      src={experienceImg}
                      alt=""
                      className="w-full h-40 rounded-xl object-cover"
                    />

                    <h4 className="font-bold mt-3">
                      Phuket Island Hopping Tour
                    </h4>

                    <p className="text-sm text-slate-500">
                      Phuket, Thailand
                    </p>

                    <p className="text-sm text-slate-600 mt-2">
                      Explore stunning islands, crystal-clear waters
                      and beautiful beaches.
                    </p>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {[
                        "Full Day",
                        "Boat Tour",
                        "Snorkeling",
                        "Lunch",
                      ].map((tag) => (
                        <span
                          key={tag}
                          className="bg-slate-100 text-slate-600 text-xs px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="mb-6">
                      <p className="text-sm text-slate-500">From</p>

                      <h3 className="text-lg  md:text-3xl font-bold text-slate-900">
                        THB 1,490
                      </h3>

                      <p className="text-sm text-slate-500">
                        per person
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">
                        Availability
                      </h4>

                      <div className="grid grid-cols-5 gap-2">

                        {[
                          "20",
                          "21",
                          "22",
                          "23",
                          "24",
                        ].map((day, idx) => (
                          <button
                            key={day}
                            className={`h-14 rounded-lg border text-sm font-medium ${
                              idx === 2
                                ? "bg-blue-600 text-white border-blue-600"
                                : "border-slate-200"
                            }`}
                          >
                            {day}
                          </button>
                        ))}
                      </div>

                      <div className="flex gap-3 mt-6">
                        <button className="flex-1 border border-blue-200 text-blue-600 font-semibold py-3 rounded-xl">
                          Add to Cart
                        </button>

                        <button className="flex-1 bg-blue-600 text-white font-semibold py-3 rounded-xl">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}