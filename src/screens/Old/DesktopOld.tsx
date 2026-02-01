import { Button } from "../../components/ui/button";

const navigationItems = [
  { label: "Products" },
  { label: "Capabilities" },
  { label: "Resources" },
  { label: "Partners" },
];

const statsData = [
  {
    value: "818",
    label: "Clients",
    borderRight: "border-r [border-right-style:solid] border-[#bdf589]",
    padding: "pl-1.5 pr-[30px]",
  },
  {
    value: "70+",
    label: "Country",
    borderRight: "border-r [border-right-style:solid] border-[#bdf589]",
    padding: "px-[30px]",
  },
];

export const DesktopOld = (): JSX.Element => {
  return (
    <div className="bg-[#0f0f0f] overflow-hidden w-full min-w-[1440px] min-h-[968px] relative">
      <div className="absolute -top-2.5 -left-2.5 w-[1460px] h-[988px]">
        <div className="absolute top-2.5 left-2.5 w-[1440px] h-[968px] bg-[#0f0f0f] overflow-hidden">
          <img
            className="absolute top-[425px] left-[-100px] w-[787px] h-[479px]"
            alt="Red"
            src="/red.svg"
          />

          <div className="absolute top-[700px] left-[824px] w-[1010px] h-[1010px] bg-[#bdf589] rounded-[505.01px] rotate-[-23.69deg]" />

          <div className="absolute top-[515px] left-[1215px] w-[1381px] h-[1010px] bg-[#636eb4] rounded-[690.55px/505.01px] rotate-[-23.69deg] opacity-80" />

          <div className="absolute top-[-166px] left-[1188px] w-[574px] h-[574px] bg-[#f300f8] rounded-[287.19px] rotate-[-23.69deg] opacity-70" />

          <div className="absolute top-0 left-0 w-[1920px] h-[1397px] bg-[#ffffff03] backdrop-blur-[271.06px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(271.06px)_brightness(100%)]" />

          <img
            className="absolute top-0 left-0 w-[1440px] h-[968px]"
            alt="Texture"
            src="/texture.png"
          />
        </div>

        <img
          className="absolute top-[calc(50.00%_-_484px)] left-[calc(50.00%_-_720px)] w-[1440px] h-[968px]"
          alt="Grid"
          src="/grid-1.svg"
        />
      </div>

      <div className="inline-flex flex-col h-[851px] items-center justify-between absolute top-[42px] left-20">
        <header className="flex w-[1280px] items-center justify-between relative flex-[0_0_auto] bg-transparent">
          <nav className="inline-flex items-center gap-10 relative flex-[0_0_auto]">
            <div className="flex w-[175px] items-center gap-[9.39px] relative">
              <div className="relative w-[27.46px] h-[27.46px] rounded-[5.06px] bg-[linear-gradient(308deg,rgba(213,218,99,1)_0%,rgba(99,110,180,1)_100%)]" />

              <div className="relative flex items-center justify-center w-fit bg-[linear-gradient(308deg,rgba(213,218,99,1)_0%,rgba(99,110,180,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Space_Mono',Helvetica] font-bold text-transparent text-[23.8px] tracking-[-2.38px] leading-[47.7px] whitespace-nowrap">
                Cybee
              </div>
            </div>

            {navigationItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto] h-auto hover:bg-transparent"
              >
                <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Space_Mono',Helvetica] font-normal text-white text-sm text-center tracking-[0] leading-8 whitespace-nowrap">
                  {item.label}
                </span>
              </Button>
            ))}
          </nav>

          <Button
            variant="outline"
            className="inline-flex items-center justify-end gap-2.5 p-2.5 relative flex-[0_0_auto] rounded-[9px] border-[none] bg-transparent hover:bg-transparent before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[9px] before:[background:linear-gradient(299deg,rgba(213,218,99,1)_0%,rgba(99,110,180,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
          >
            <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Space_Mono',Helvetica] font-normal text-white text-sm text-center tracking-[0] leading-8 whitespace-nowrap">
              Contact Us
            </span>
          </Button>
        </header>

        <section className="inline-flex flex-col items-end justify-center gap-10 absolute top-[300px] left-[calc(50.00%_-_651px)]">
          <div className="flex w-[796px] items-center justify-end gap-2.5 p-2.5 relative flex-[0_0_auto]">
            <p className="w-fit leading-8 whitespace-nowrap relative flex items-center justify-center mt-[-1.00px] [font-family:'Space_Mono',Helvetica] font-normal text-white text-sm tracking-[0]">
              Safeguarding Your Digital Identity .
            </p>
          </div>

          <h1 className="relative flex items-end justify-center w-fit [font-family:'Space_Mono',Helvetica] font-normal text-white text-[170px] text-center tracking-[-11.90px] leading-[32.3px]">
            Cyber Security
          </h1>
        </section>

        <div className="relative w-[650.64px] h-[580px]">
          <img
            className="absolute top-[89px] left-[49px] w-[553px] h-[476px]"
            alt="Element"
            src="/element.png"
          />
        </div>

        <div className="inline-flex items-start justify-center gap-5 pl-[100px] pr-0 py-0 relative flex-[0_0_auto]">
          <Button
            variant="ghost"
            className="inline-flex items-center justify-end gap-2.5 p-2.5 relative flex-[0_0_auto] rounded-[9px] h-auto hover:bg-transparent"
          >
            <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Space_Mono',Helvetica] font-normal text-white text-sm text-center tracking-[0] leading-8 whitespace-nowrap">
              Request Info
            </span>
          </Button>

          <Button className="inline-flex items-center justify-end gap-2.5 px-[15px] py-2.5 relative flex-[0_0_auto] rounded-[9px] shadow-[3px_4px_5.8px_#00000026] bg-[linear-gradient(308deg,rgba(213,218,99,1)_0%,rgba(99,110,180,1)_100%)] hover:bg-[linear-gradient(308deg,rgba(213,218,99,1)_0%,rgba(99,110,180,1)_100%)] h-auto border-none">
            <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Space_Mono',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-8 whitespace-nowrap">
              Get Started Now
            </span>
          </Button>
        </div>

        <footer className="flex w-[1270px] items-end justify-between relative flex-[0_0_auto]">
          <div className="inline-flex items-center relative flex-[0_0_auto]">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className={`${stat.padding} py-2.5 mt-[-1.00px] mb-[-1.00px] ${index === 0 ? "ml-[-1.00px]" : ""} ${stat.borderRight} inline-flex flex-col items-start justify-center gap-[5px] relative flex-[0_0_auto]`}
              >
                <div
                  className={`relative flex items-end justify-center w-fit mt-[-0.50px] [font-family:'Space_Mono',Helvetica] font-normal text-white text-2xl ${index === 0 ? "text-right" : ""} tracking-[0] leading-[28.3px] whitespace-nowrap`}
                >
                  {stat.value}
                </div>

                <div className="relative flex items-end justify-center w-fit [font-family:'Space_Mono',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
                  {stat.label}
                </div>
              </div>
            ))}

            <div className="pl-[30px] pr-0 py-2.5 inline-flex flex-col items-start justify-center gap-[5px] relative flex-[0_0_auto]">
              <p className="w-[217px] leading-[18px] relative flex items-center justify-center mt-[-1.00px] [font-family:'Space_Mono',Helvetica] font-normal text-white text-sm tracking-[0]">
                We&#39;re dedicated
                <br />
                to safeguarding
                <br />
                your digital assets
              </p>
            </div>
          </div>

          <img
            className="relative w-[340px]"
            alt="Clients"
            src="/clients.svg"
          />
        </footer>
      </div>
    </div>
  );
};
