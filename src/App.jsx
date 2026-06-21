import { useState } from 'react'


// import { Hero } from './apiSolution/Hero.jsx'

import heroImg from "./images/heroapi2.png";
import apiBannerImg from "./images/apisolbanner.png";
// import heroImg from "./images/heroapi.png";

// import heroImg from "./images/heroapi2.png";
import {
  Plane,
  Globe,
  MapPin,
  Star,
  Smartphone,
  Code2,
  Link,
  CalendarDays,
  ArrowRight,
  Check,
} from "lucide-react";
import ExperienceDetails from './apiSolution/ExperienceDetails';
import TrustedBusinesses from './apiSolution/TrustedBusinesses';
import CtaBanner from './apiSolution/CtaBanner';
import IntegrationProcess from './apiSolution/IntegrationProcess';
import PartnerHero from './apiSolution/PartnerHero';

export  function ApiSolutions() {
  return (
    <section className="py-16 bg-white border-2">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-slate-900">
            API Solutions Built for Travel Commerce
          </h2>

          <p className="mt-3 text-slate-600 max-w-3xl mx-auto">
            Our flexible API solutions help businesses discover,
            integrate, and distribute Thailand travel experiences
            at scale.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row  gap-6">

          {/* Left Section */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-5">
              Choose Your API Solution
            </h3>

            <div className="grid md:grid-cols-2 gap-5 lg:flex-3">

              {/* Affiliate Card */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center">
                    <Link className="w-6 h-6 text-white" />
                  </div>

                  <div>
                    <h4 className="font-bold text-lg">
                      Affiliate API
                    </h4>

                    <span className="inline-block mt-1 text-xs font-medium px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                      Fast Go-To-Market Integration
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 text-sm text-slate-600">
                  {[
                    "Content-focused API model",
                    "Traffic can be referred to The Thai Tourism",
                    "Commission on eligible bookings",
                    "Faster implementation path",
                    "Merchant of record support where applicable",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check className="w-4 h-4 text-blue-600 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3 mt-6">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2">
                    Request Affiliate API
                    <ArrowRight size={18} />
                  </button>

                  <button className="font-semibold text-blue-600 whitespace-nowrap">
                    Learn More →
                  </button>
                </div>
              </div>

              {/* Partner Booking Card */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-full bg-green-600 flex items-center justify-center">
                    <CalendarDays className="w-6 h-6 text-white" />
                  </div>

                  <div>
                    <h4 className="font-bold text-lg">
                      Partner Booking API
                    </h4>

                    <span className="inline-block mt-1 text-xs font-medium px-3 py-1 rounded-full bg-green-100 text-green-700">
                      Advanced Embedded Booking Experience
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 text-sm text-slate-600">
                  {[
                    "Embedded booking capabilities",
                    "More control over customer journey",
                    "Access pricing and availability",
                    "Structured travel inventory",
                    "Advanced integration workflows",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3 mt-6">
                  <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2">
                    Apply for Booking API
                    <ArrowRight size={18} />
                  </button>

                  <button className="font-semibold text-green-600 whitespace-nowrap">
                    Talk to Sales →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:flex-2">
            <h3 className="text-2xl font-bold text-slate-900 mb-5">
              Built For a Wide Range of Partners
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

              {[
                {
                  icon: Plane,
                  title: "Airlines & Travel Brands",
                },
                {
                  icon: Globe,
                  title: "Online Travel Agencies",
                },
                {
                  icon: MapPin,
                  title: "Destination Guides",
                },
                {
                  icon: Star,
                  title: "Loyalty Platforms",
                },
                {
                  icon: Smartphone,
                  title: "Travel Apps & Super Apps",
                },
                {
                  icon: Code2,
                  title: "Technology Providers",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 p-6 text-center bg-white hover:shadow-md transition"
                >
                  <item.icon className="w-10 h-10 mx-auto text-blue-600 mb-4" />

                  <h4 className="font-semibold text-slate-800 text-sm leading-5">
                    {item.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="App">
      <div className='h-[80px]'>

      </div>
      <PartnerHero></PartnerHero>

     
    <ApiSolutions></ApiSolutions>
    <ExperienceDetails></ExperienceDetails>
    <TrustedBusinesses></TrustedBusinesses>

    <CtaBanner 
        backgroundImage={apiBannerImg}
        title="Looking To Add Thailand Experiences To Your Platform?"
        subtitle="Unlock Thailand-focused inventory, drive more conversions, and create stronger revenue opportunities."
        primaryButtonText="Apply for API Access"
        secondaryButtonText="Talk to Partnerships"
        onPrimaryClick={() => console.log("Apply")}
        onSecondaryClick={() => console.log("Partnership")} />

        <IntegrationProcess></IntegrationProcess>

   
      </div>
  );
}