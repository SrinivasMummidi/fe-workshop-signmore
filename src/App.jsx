import "./App.css";

function App() {
  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-10">
        <div className="bg-signm-green">
          <div className="container px-5 py-2 flex justify-end lg:gap-12 text-xs text-white">
            <a href="#" className="flex gap-2 items-center link">
              <img src="phone-call.svg" alt="phone icon" />
              Call 24/7 at 800-924-9679
            </a>

            <a href="#" className="gap-2 items-center hidden lg:flex link">
              <img src="user-profile.svg" alt="user icon" />
              Login
            </a>
          </div>
        </div>
        <nav className="bg-signm-beige">
          <div className="container py-8 px-5 flex justify-between items-center">
            <a href="#" className="link">
              <img
                src="/signmore-black.svg"
                alt="signmore-text-logo"
                width="160px"
                height="21px"
              />
            </a>
            <div className="gap-12 items-center hidden lg:flex">
              <a
                href="#"
                className="link nav-link uppercase text-sm after:top-2.5"
              >
                Why
              </a>
              <a
                href="#"
                className="link nav-link uppercase text-sm after:top-2.5"
              >
                Property 24/7
              </a>
              <a
                href="#"
                className="link nav-link uppercase text-sm after:top-2.5"
              >
                industries
              </a>
              <a
                href="#"
                className="link nav-link uppercase text-sm after:top-2.5"
              >
                Tools
              </a>
              <button className="link text-sm px-5 py-3 border-2 border-black border-solid rounded-full w-fit text-nowrap hover:bg-black hover:text-white transition-colors ease-linear duration-200">
                Plans & Prices
              </button>
            </div>
            <ul className="flex gap-5 items-center lg:hidden">
              <li>
                <a className="link nav-link uppercase">Login</a>
              </li>
              <li>
                <img
                  src="hamburger-menu.svg"
                  alt="nav menu icon"
                  width="24px"
                  height="24px"
                  className="hover:cursor-pointer"
                />
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <section className="bg-signm-beige relative">
          <div className="bg-signm-beige px-5 py-16 md:absolute md:top-0 md:left-0 md:px-20 md:pt-10 md:w-3/5 lg:w-[55%] lg:px-[120px]">
            <h1 className="text-4xl w-36 uppercase lg:text-7xl">
              Why SignMore?
            </h1>
            <div className="flex flex-col lg:flex-row-reverse lg:justify-between lg:items-center lg:gap-14 lg:mt-16">
              <p className="text-lg mt-6 leading-snug">
                Build a strong foundation for your property business.
              </p>
              <button className="link text-lg px-10 py-5 w-full border-2 border-black border-solid rounded-full mt-16 md:mt-10 md:w-fit text-nowrap hover:bg-black hover:text-white transition-colors ease-linear duration-200">
                Plans & Prices
              </button>
            </div>
          </div>
          <picture>
            <source
              media="(max-width: 375px)"
              srcSet="table-landscape-w375.jpg"
            />
            <source
              media="(max-width: 768px)"
              srcSet="table-landscape-w768.jpg"
            />
            <img
              src="table-landscape.jpg"
              alt="A table facing a huge entrance showing outside landscape"
            />
          </picture>
          <div className="bg-signm-beige pt-20 px-5 md:absolute md:right-0 md:bottom-0 md:w-7/12 md:px-20 md:pt-10 lg:pt-16">
            <h2 className="text-4xl md:text-[2.6rem] w-52 lg:w-96 lg:text-7xl">
              Real Estate Real People
            </h2>
          </div>
        </section>
        <section className="bg-signm-beige">
          <div className="container px-5 pt-10 pb-20 md:flex md:flex-row-reverse md:gap-10 lg:gap-24 lg:justify-end lg:items-end">
            <div className="max-w-80 lg:max-w-96">
              <p className="text-lg">Real people create real connections.</p>
              <p className="text-lg mt-10 md:mt-6">
                Connections are core to building a successful property business.
                With SignMore, your clients will always speak to a real person,
                24/7.
              </p>
              <img
                src="pledge-full.svg"
                alt="pledge people not bots"
                className="mt-10 lg:mt-32"
              />
            </div>
            <img
              src="/campaign.jpeg"
              alt="pledge people not bots video campign"
              className="mt-20 sm:max-w-80 md:max-w-72 md:max-h-40 lg:max-w-lg lg:max-h-72"
            />
          </div>
        </section>
        <section className="bg-signm-green text-white md:px-20 py-10">
          <div className="container px-5 lg:flex lg:gap-24">
            <div>
              <h2 className="uppercase text-4.25xl max-w-[19rem] md:text-4.5xl md:max-w-[22rem] lg:text-8xl lg:w-full">
                Your property -focused team
              </h2>
              <div className="mt-16 flex flex-col gap-14 text-lg md:flex-row lg:gap-4 lg:mt-24">
                <div>
                  <h3>
                    KNOWLEDGEABLE <br /> RECEPTIONISTS
                  </h3>
                  <p className="pt-6">
                    Your callers will reach receptionists trained in supporting
                    property businesses.
                  </p>
                </div>
                <div>
                  <h3>
                    HAPPY EMPLOYEES <br />= HAPPY CUSTOMERS
                  </h3>
                  <p className="pt-6">
                    You can hear a smile on the phone. Our employees are
                    supported, empowered and happy!
                  </p>
                </div>
              </div>
            </div>
            <img
              src="/focused-team.png"
              alt="people collage"
              className="mt-20"
            />
          </div>
        </section>
        <section className="bg-signm-beige ">
          <div className="container px-5 py-20">
            <div className="flex flex-col gap-16 lg:flex-row lg:gap-20">
              <h2 className="text-4.5xl max-w-40 lg:text-8xl lg:max-w-60">
                HOMES FOR ALL
              </h2>
              <p className="text-lg lg:max-w-72">
                We're donating 1% of revenue to help build homes for those that
                need them most.
              </p>
            </div>
            <div className="mt-20 grid grid-cols-[repeat(4,_260px)] gap-x-10 overflow-scroll">
              <div className="grid grid-rows-subgrid row-span-3">
                <h3 className="uppercase text-2xl max-w-48">
                  Care For the HomelessNess
                </h3>
                <p className="mt-8 text-lg">
                  Care For the Homeless delivers health care and shelter
                  services, and advocates for policies to end homelessness.
                </p>
                <img
                  width="260px"
                  className="mt-12"
                  src="/homecare.png"
                  alt="homeless-care"
                />
              </div>
              <div className="grid grid-rows-subgrid row-span-3">
                <h3 className="uppercase text-2xl max-w-48">Homeward Bound</h3>
                <p className="mt-8 text-lg">
                  Homeward Bound serves families facing homelessness by
                  providing them with shelter and support.
                </p>
                <img
                  width="260px"
                  className="mt-12"
                  src="/homebound.png"
                  alt="homebound"
                />
              </div>
              <div className="grid grid-rows-subgrid row-span-3">
                <h3 className="uppercase text-2xl max-w-48">
                  Colorado Coalition for the Homeless
                </h3>
                <p className="mt-8 text-lg">
                  The Colorado Coalition for the Homeless provides long term
                  solutions with homes, health and hope.
                </p>
                <img
                  width="260px"
                  className="mt-12"
                  src="/colorado-coalition.png"
                  alt="homebound"
                />
              </div>
              <div className="grid grid-rows-subgrid row-span-3">
                <h3 className="uppercase text-2xl max-w-48">
                  Habitat forHumanity
                </h3>
                <p className="mt-8 text-lg">
                  Over 530 NYC families with children reside in safe, clean, HFH
                  shelters with a host of services and programs.
                </p>
                <img
                  width="260px"
                  className="mt-12"
                  src="/habitat.png"
                  alt="homebound"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-signm-beige">
        <div className="container px-5 py-10">
          <div className="lg:flex lg:gap-32">
            <div>
              <a href="#" className="link">
                <img src="/signmore-black.svg" alt="signmore-text-logo" />
              </a>
              <div className="my-10">
                <div className="flex gap-5 mb-10">
                  <a href="#" className="link">
                    <img src="/linkedin.svg" alt="linkedin icon" />{" "}
                  </a>
                  <a href="#" className="link">
                    <img src="/fb-icon.svg" alt="facebook icon" />{" "}
                  </a>
                  <a href="#" className="link">
                    <img src="/ig-icon.svg" alt="instagram icon" />{" "}
                  </a>
                </div>
                <p className="mb-3">because</p>
                <a href="#" className="link">
                  <img
                    src="/anywhereworks.svg"
                    alt="anywhereworks text logo"
                    width="154"
                    height="20px"
                  />
                </a>
              </div>
            </div>
            <nav className="flex flex-wrap md:justify-between gap-y-10 mb-10 lg:flex-1">
              <ul className="basis-1/2 md:basis-1/6 ">
                <li>
                  <span className="text-sm uppercase">Why</span>
                  <ul>
                    <li className="text-xs mt-4">
                      <a href="#" className="link nav-link">
                        Real People
                      </a>
                    </li>
                    <li className="text-xs mt-4">
                      <a href="#" className="link nav-link">
                        Giving Back
                      </a>
                    </li>
                    <li className="text-xs mt-4">
                      <a href="#" className="link nav-link">
                        Testimonials
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="basis-1/2 md:basis-1/6 ">
                <li>
                  <span className="text-sm uppercase">SERVICES 24/7</span>
                  <ul>
                    <li className="text-xs mt-4">
                      <a href="#" className="link nav-link">
                        24/7 Reception
                      </a>
                    </li>
                    <li className="text-xs mt-4">
                      <a href="#" className="link nav-link">
                        Call Answering
                      </a>
                    </li>
                    <li className="text-xs mt-4">
                      <a href="#" className="link nav-link">
                        Lead Capture
                      </a>
                    </li>
                    <li className="text-xs mt-4">
                      <a href="#" className="link nav-link">
                        After Hours
                      </a>
                    </li>
                    <li className="text-xs mt-4">
                      <a href="#" className="link nav-link">
                        Bilingual Reception
                      </a>
                    </li>
                    <li className="text-xs mt-4">
                      <a href="#" className="link nav-link">
                        Call Centre Solutions
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="basis-1/2 md:basis-1/6 ">
                <li>
                  <span className="text-sm uppercase">Industries</span>
                  <ul>
                    <li className="text-xs mt-4">
                      <a href="#" className="link nav-link">
                        Real Estate Agents
                      </a>
                    </li>
                    <li className="text-xs mt-4">
                      <a href="#" className="link nav-link">
                        Property Managers
                      </a>
                    </li>
                    <li className="text-xs mt-4">
                      <a href="#" className="link nav-link">
                        Property Investors
                      </a>
                    </li>
                    <li className="text-xs mt-4">
                      <a href="#" className="link nav-link">
                        Commercial Real Estate
                      </a>
                    </li>
                    <li className="text-xs mt-4">
                      <a href="#" className="link nav-link">
                        Brokers
                      </a>
                    </li>
                    <li className="text-xs mt-4">
                      <a href="#" className="link nav-link">
                        Lenders
                      </a>
                    </li>
                    <li className="text-xs mt-4">
                      <a href="#" className="link nav-link">
                        Developers
                      </a>
                    </li>
                    <li className="text-xs mt-4">
                      <a href="#" className="link nav-link">
                        Leasing Agents
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="basis-1/2 md:basis-1/6 ">
                <li>
                  <span className="text-sm uppercase">Tools</span>
                  <ul>
                    <li className="text-xs mt-4">
                      <a href="#" className="link nav-link">
                        Appointments
                      </a>
                    </li>
                    <li className="text-xs mt-4">
                      <a href="#" className="link nav-link">
                        Live Chat
                      </a>
                    </li>
                    <li className="text-xs mt-4">
                      <a href="#" className="link nav-link">
                        Video Tours
                      </a>
                    </li>
                    <li className="text-xs mt-4">
                      <a href="#" className="link nav-link">
                        Mobile App
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="basis-1/2 md:basis-1/6 ">
                <li>
                  <span className="text-sm uppercase">More</span>
                  <ul>
                    <li className="text-xs mt-4">
                      <a href="#" className="link nav-link">
                        Book a Consultation
                      </a>
                    </li>
                    <li className="text-xs mt-4">
                      <a href="#" className="link nav-link">
                        Plans & Prices
                      </a>
                    </li>
                    <li className="text-xs mt-4">
                      <a href="#" className="link nav-link">
                        Login
                      </a>
                    </li>
                    <li className="text-xs mt-4">
                      <a href="#" className="link nav-link">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between lg:items-center gap-10">
            <div className="flex md:basis-1/2 md:items-end md:max-w-64">
              <div className="flex items-center gap-4">
                <img
                  src="/ppnb-logo.svg"
                  alt="Pledge People Not Bots"
                  className="md:h-11"
                />
                <p className="text-sm">
                  We pledge to keep every interaction human.&nbsp;
                  <a href="#" className="link nav-link text-sm after:w-full">
                    Learn more
                  </a>
                </p>
              </div>
            </div>
            <div className="flex flex-col md:items-end">
              <p className="text-sm mb-4 uppercase md:text-right w-32 lg:w-fit">
                Stay connected anywhere
              </p>
              <ul className="flex flex-col gap-2.5 md:items-end lg:flex-row">
                <li>
                  <a href="#" className="link">
                    <img src="appstore.svg" alt="Download from app store" />
                  </a>
                </li>
                <li>
                  <a href="#" className="link">
                    <img
                      src="/googleplay.svg"
                      alt="Download from google play"
                    />
                  </a>
                </li>
                <li>
                  <a href="#" className="link">
                    <img src="desktop-badge.svg" alt="Download for desktop" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
