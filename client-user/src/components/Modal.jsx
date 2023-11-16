
function MyVerticallyCenteredModal(props) {
    
  return (
    <>
    <div  {...props}>
    
    <div >
      <div
        className="k-fixed k-bottom-0 k-z-50 k-inset-0 k-overflow-y-hidden k-font-dm-sans"
        id="headlessui-dialog-7"
        role="dialog"
        aria-modal="true"
        aria-labelledby="headlessui-dialog-title-11"
        aria-describedby="headlessui-description-12"
      >
        <div className="k-flex k-items-end k-min-h-screen k-h-full k-overflow-y-scroll md:k-items-center md:k-justify-center">
          <div
            className="k-fixed k-inset-0 k-bg-black k-bg-opacity-40"
            id="headlessui-dialog-overlay-9"
            aria-hidden="true"
          />
          
          <div className="k-z-50 k-bg-white k-rounded-t-lg k-w-full focus:k-outline-none md:k-rounded-b-lg md:k-shadow-xl k-relative k-max-w-md k-flex-k-flex-col k-gap-4">
            <div className="k-px-4 k-py-8 md:k-p-6 k-flex-k-flex-col k-gap-4">
              <div>
                <button onClick={props.onHide}>Close</button>
                <h2
                    style={{marginBottom: "1rem"}}
                  className="k-flex k-flex-col k-items-center k-gap-4"
                  id="headlessui-dialog-title-11"
                >
                  <img
                    width={100}
                    height={20}
                    src="https://static.kalibrr.com/public/new-kalibrr-logos/kalibrr-logo-blue%403x.min.__f366811b__.png"
                    alt="Kalibrr"
                  />
                </h2>
                <h3 style={{marginBottom: "1rem"}} className="k-text-3xl k-text-center k-font-bold">
                  Apply to this job with a Kalibrr account
                </h3>
                <button className="k-absolute k-top-0 k-right-0 k-self-start k-flex k-bg-transparent k-text-grey-500 k-rounded-full k-ml-2 k-p-2 hover:k-bg-grey-400 hover:k-text-black">
                  <svg
                    className="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                  </svg>
                </button>
              </div>
              <p
                className="k-text-subdued k-mb-4 k-text-center"
                id="headlessui-description-12"
              >
                Build your profile, apply to this job, and track your application
                status with a free Kalibrr account.
              </p>
              <div>
                <a
                  className="k-btn-block k-text-center k-mb-2 k-btn-primary"
                  href="/candidate/signup?role=jobseeker&redirect_to=%2Fc%2Fpt-bca-finance%2Fjobs%2F221512%2Fundefined&jobId=221512&visibility=private"
                >
                  Sign Up
                </a>
                <a
                  className="k-btn-block k-text-center k-mb-2 k-btn-tertiary"
                  href="/login?role=jobseeker&redirect_to=%2Fc%2Fpt-bca-finance%2Fjobs%2F221512%2Fundefined&jobId=221512&visibility=private"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default MyVerticallyCenteredModal

