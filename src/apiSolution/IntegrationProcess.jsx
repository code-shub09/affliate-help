import { FileText, Search, Boxes, Rocket, TrendingUp } from "lucide-react";

export default function IntegrationProcess() {
  const desktopSteps = [
    {
      number: "1",
      title: "Apply",
      description: "Submit your application and tell us about your business.",
      icon: FileText,
    },
    {
      number: "2",
      title: "Qualification",
      description: "Our team reviews and confirms the best API option for you.",
      icon: Search,
    },
    {
      number: "3",
      title: "Choose Model",
      description:
        "Select the Affiliate API or Partner Booking API that fits your needs.",
      icon: Boxes,
    },
    {
      number: "4",
      title: "Integrate",
      description: "Use our docs, SDKs and sandbox to integrate seamlessly.",
      icon: Rocket,
    },
    {
      number: "5",
      title: "Launch & Grow",
      description:
        "Go live, drive conversions and scale your business together with us.",
      icon: TrendingUp,
    },
  ];

  const mobileSteps = [
    {
      number: "1",
      title: "Apply",
      description: "Submit your application and tell us about your business.",
      icon: FileText,
    },
    {
      number: "2",
      title: "Qualification",
      description: "Our team reviews and confirms the best API option for you.",
      icon: Search,
    },
    {
      number: "3",
      title: "Choose Model",
      description:
        "Select the Affiliate API or Partner Booking API that fits your needs.",
      icon: Boxes,
    },
    {
      number: "4",
      title: "Integrate & Grow",
      description: "Integrate using our SDKs, launch and scale your business.",
      icon: Rocket,
    },
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-slate-900 mb-8">
          How Integration Works
        </h2>

        {/* Desktop Version */}
        <div className="hidden lg:block bg-white border border-slate-200 rounded-3xl p-8">
          <div className="grid grid-cols-5 gap-4">
            {desktopSteps.map((step, index) => (
              <div
                key={step.number}
                className="relative flex items-start gap-4"
              >
                {/* Number */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full border-2 border-blue-500 text-blue-600 font-bold flex items-center justify-center text-lg bg-white">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-semibold text-slate-900">{step.title}</h3>

                  <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector */}
                {index !== desktopSteps.length - 1 && (
                  <div className="absolute top-7 -right-5 flex items-center w-10">
                    <div className="flex-1 border-t border-dashed border-slate-300"></div>

                    <svg
                      className="w-4 h-4 text-slate-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet Version */}
        {/* Mobile Version */}
        <div className="lg:hidden bg-white border border-slate-200 rounded-3xl px-1">
          <div className="flex w-fit">
            {mobileSteps.map((step, index) => (
              <div
                key={step.number}
                className="relative flex items-start gap-2 max-w-[100px]"
              >
                {/* Number Circle */}
                <div className="flex-shrink-0">
                  <div className="w-4 h-4 rounded-full border border-blue-500 text-blue-600 font-semibold flex text-sm items-center justify-center">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-semibold text-[10px] text-slate-900">{step.title}</h3>

                  <p className="text-[8px] text-slate-500 mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector */}
                {index !== mobileSteps.length - 1 && (
                  <div className="absolute top-6 -right-5 flex items-center w-10">
                    <div className="flex-1 border-t border-dashed border-slate-300"></div>

                    <svg
                      className="w-4 h-4 text-slate-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
