
function Navbar(){
    return (
        <header className="k-z-50 k-font-dm-sans k-absolute k-sticky k-flex k-flex-col k-top-0 k-bg-white k-border-b k-border-grey-300 k-z-50">
          <div className="lg:k-container lg:k-px-4 k-flex k-justify-between">
            <div className="k-flex k-items-center k-gap-2">
              <a
                className="k-ml-10 k-py-5 md:k-p-6 md:k-border-b-4 k-border-transparent"
                href="/home"
              >
                <img
                  decoding="async"
                  width={100}
                  height={20}
                  className="k-mr-0 lg:k-mr-16"
                  src="https://static.kalibrr.com/public/new-kalibrr-logos/kalibrr-logo-blue%403x.min.__f366811b__.png"
                  alt="Kalibrr"
                />
              </a>
            </div>
            <button className="k-px-4 k-text-primary-color k-flex k-items-center k-space-x-2 k-justify-center k-border-transparent md:k-hidden md:k-border-b-4">
              <svg
                className="MuiSvgIcon-root"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
              </svg>
            </button>
            <ul className="k-hidden md:k-flex">
              <li className="k-flex">
                <a
                  className="k-text-black k-flex k-items-center k-px-4 k-border-b-4 k-border-transparent hover:k-no-underline hover:k-border-primary-color"
                  href="/employers/"
                >
                  Hire Now
                </a>
              </li>
              <li className="k-flex">
                <a
                  className="k-text-black k-flex k-items-center k-px-4 k-border-b-4 k-border-transparent hover:k-no-underline hover:k-border-primary-color"
                  href="/signup"
                >
                  Sign Up
                </a>
              </li>
              <li className="k-flex">
                <a
                  className="k-text-black k-flex k-items-center k-px-4 k-border-b-4 k-border-transparent hover:k-no-underline hover:k-border-primary-color"
                  href="/login"
                >
                  Login
                </a>
              </li>
              <li className="k-relative k-flex k-items-center k-border-b-4 k-border-transparent">
                <button
                  className="k-btn k-ml-2"
                  aria-label="Choose your language"
                  id="headlessui-listbox-button-1"
                  type="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <svg
                    className="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
          <div className="k-flex lg:k-hidden k-justify-between k-px-6 k-py-2">
            <div className="k-flex k-gap-4 k-items-center">
              <button
                className="k-h-10 k-flex k-justify-center k-items-center k-gap-2 k-border-style-solid k-border k-border-gray-300 k-px-2 k-py-4 k-rounded-md"
                id="headlessui-listbox-button-3"
              ></button>
            </div>
            <div className="k-flex k-justify-between">
              <a
                className="k-text-black k-inline-flex k-flex-1 k-justify-center k-p-4 hover:k-no-underline"
                href="/signup"
              >
                Sign Up
              </a>
              <a
                className="k-text-black k-inline-flex k-flex-1 k-justify-center k-p-4 hover:k-no-underline"
                href="/login"
              >
                Login
              </a>
            </div>
          </div>
          <div className="k-relative">
            <button className="k-px-4 k-text-primary-color k-flex k-items-center k-space-x-2 k-justify-center k-border-transparent lg:k-hidden md:k-border-b-4">
              <svg
                className="MuiSvgIcon-root"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
              </svg>
            </button>
          </div>
          <div className="k-relative">
            <div className="k-absolute k-z-50 k-top-0 k-bg-white k-w-full k-max-h-96 md:k-max-h-screen k-overflow-y-scroll lg:k-overflow-visible">
              <div className="k-container" />
            </div>
          </div>
        </header>
    )
}
export default Navbar