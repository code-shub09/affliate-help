export default function TrustedBusinesses() {
  const testimonials = [
    {
      quote:
        "The Thai Tourism API helped us add hundreds of experiences quickly. Their inventory and support are outstanding.",
      name: "Alex Kim",
      role: "Product Manager, Traveloka",
      avatar: "https://i.pravatar.cc/80?img=12",
    },
    {
      quote:
        "Integration was smooth and the data quality is excellent. Our conversion rates improved significantly.",
      name: "Priya Sharma",
      role: "Head of Partnerships, Cleartrip",
      avatar: "https://i.pravatar.cc/80?img=32",
    },
    {
      quote:
        "A reliable partner for Thailand experiences. Their team truly understands our business needs.",
      name: "David Lee",
      role: "CTO, Klook",
      avatar: "https://i.pravatar.cc/80?img=15",
    },
  ];

  const partners = [
    "traveloka",
    "klook",
    "agoda",
    "Trip.com",
    "Expedia",
    "cleartrip",
    "airasia",
    "MakeMyTrip",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <div className="mt-12 flex flex-col md:flex-row border-t border-slate-100 pt-8">

          {/* Left Side */}
          <div className=" flex-1 mb-4">
            
              <h2 className="text-xl font-bold text-purple-900 text-center">
                Trusted by Leading
               
                Travel Businesses
              </h2>
          
            
          </div>

          {/* Testimonials */}
          <div className="flex flex-col justify-around items-center border flex-3 md:flex-row gap-5">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="border max-w-[300px] border-slate-200 rounded-lg p-6 bg-white shadow-sm"
              >
                <p className="text-slate-700 leading-relaxed text-sm">
                  "{item.quote}"
                </p>

                <div className="flex items-center gap-3 mt-6">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      {item.name}
                    </h4>

                    <p className="text-xs text-slate-500">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Logos */}
        <div className="mt-12 flex flex-col md:flex-row border-t border-slate-100 ">
          <div className="border flex-1">
              <p className="text-slate-500  text-lg">
              Partnering with businesses worldwide
            </p>

          </div>
        
          <div className="flex flex-wrap border flex-3 items-center justify-between gap-6 py-10">

            {partners.map((partner) => (
              <span
                key={partner}
                className="text-xl font-bold text-slate-400 hover:text-slate-700 transition"
              >
                {partner}
              </span>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}