import { ArrowRight } from "lucide-react";

export default function CtaBanner({
  backgroundImage,
  title,
  subtitle,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
}) {
  return (
    <section className="relative overflow-hidden md:rounded-2xl md:px-4">
      {/* Background */}
      <div
        className="relative h-[200px]  md:h-[260px] bg-cover rounded-2xl bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/35 md:rounded-2xl" />

        {/* Center Glow */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[200px] h-[50px]
            md:w-[700px]
            md:h-[220px]
            rounded-full
            bg-blue-800/90
            blur-3xl
          "
        />

        {/* Content */}
        <div className="relative z-10 h-full flex  items-center justify-center md:px-6 text-center border-2">
          <div className="w-[81%] border">
            <h2 className="text-white text-[16px] md:text-4xl font-bold max-w-4xl">
              {title}
            </h2>

            <div className="px-4 w-[90%] mx-auto">
              <p className="text-white/90 mt-3 max-w-2xl text-[12px] md:text-lg">
                {subtitle}
              </p>
              <div className="flex  gap-4 mt-6 justify-center text-[10px] md:text-base">
                <button
                  onClick={onPrimaryClick}
                  className="
                bg-blue-800
                hover:bg-blue-900
                text-white px-2 cursor-pointer
                md:px-6
                py-3
                rounded-lg
                font-semibold
                flex
                items-center
                gap-2
                transition
              "
                >
                  {primaryButtonText}
                  <ArrowRight size={18} />
                </button>

                <button
                  onClick={onSecondaryClick}
                  className="
                border
                border-white/60
                text-white px-2
                md:px-6
                py-3
                rounded-lg
                font-semibold
                hover:bg-white/10
                transition
              "
                >
                  {secondaryButtonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


