import { Link } from 'react-router-dom'
import './Card.css'

function Card(props){

    return (
      <>
        <div className="k-font-dm-sans k-rounded-lg k-bg-white k-border-solid k-border hover:k-border-2 hover:k-border-primary-color k-border k-group k-flex k-flex-col k-justify-between css-1otdiuc">
                  <div className="k-flex k-p-4 k-gap-4 k-justify-between">
                    <a
                      className="k-border k-border-gray k-bg-white k-flex k-items-center k-flex-shrink k-justify-center k-text-4xl k-text-subdued k-overflow-hidden k-px-4 k-py-2 k-h-20 k-w-24 k-rounded-lg"
                      href="/c/pt-bca-finance/jobs"
                    >
                      <div>
                        <img
                          loading="eager"
                          src={props.data.Company.companyLogo}
                          alt="PT BCA Finance"
                          width={130}
                          height={80}
                          className="k-block k-max-w-full k-max-h-full k-bg-white k-mx-auto"
                          decoding="async"
                        />
                      </div>
                    </a>
                    <div className="k-w-72 k-h-full k-flex k-flex-col k-justify-center">
                      <h2
                        data-tooltip-id="job-title-tooltip-[object Object]"
                        className="k-w-48 lg:k-w-full k-text-2xl k-font-medium k-font-bold k-text-ellipsis k-overflow-hidden k-whitespace-normal css-1gzvnis"
                      >
                        <a
                          className="k-text-black"
                          itemProp="name"
                          href="/c/pt-bca-finance/jobs/221512/undefined"
                        >
                          {props.data.title}
                        </a>
                      </h2>
                      <span className="k-inline-flex k-items-center k-mb-1">
                        <a
                          className="k-text-subdued k-font-bold"
                          href="/c/pt-bca-finance/jobs"
                        >
                          {props.data.Company.name}
                          <span className="k-ml-1">
                            <div
                              className=""
                              style={{ display: "inline" }}
                              data-tooltipped=""
                              aria-describedby="tippy-tooltip-1"
                              data-original-title="verified-business"
                            >
                              <svg
                                className="MuiSvgIcon-root k-text-primary-color-500 MuiSvgIcon-fontSizeSmall"
                                focusable="false"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                width={20}
                                height={20}
                              >
                                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                              </svg>
                            </div>
                          </span>
                        </a>
                      </span>
                    </div>
                    <button className="k-h-0">
                      <svg
                        className="MuiSvgIcon-root k-text-gray-300 k-justify-self-end"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </button>
                  </div>
                  <div className="k-relative">
                    <div className="blur k-flex k-flex-col k-gap-3 k-px-4 k-pb-4">
                      <span className="k-flex k-gap-4 k-text-gray-300">
                        <svg
                          className="MuiSvgIcon-root"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          width={24}
                          height={24}
                        >
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                        <span className="k-text-gray-500 k-block k-pointer-events-none">
                          {props.data.Company.location}
                        </span>
                      </span>
                      <span className="k-flex k-gap-4 k-text-gray-300 k-pointer-events-none">
                        <svg
                          className="MuiSvgIcon-root"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          width={24}
                          height={24}
                        >
                          <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
                        </svg>
                        <p className="k-text-gray-500">Salary Undisclosed</p>
                      </span>
                      <span className="k-flex k-gap-4 k-items-center k-text-gray-300 k-pointer-events-none">
                        <svg
                          className="MuiSvgIcon-root"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          width={24}
                          height={24}
                        >
                          <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
                        </svg>
                        <span className="k-text-gray-500">{props.data.jobType}</span>
                        <span itemProp="employmentType" className="k-hidden">
                          FULL_TIME
                        </span>
                      </span>
                      <span className="k-flex k-gap-4 k-text-gray-300">
                        <svg
                          className="MuiSvgIcon-root"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          width={24}
                          height={24}
                        >
                          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                        </svg>
                        <span className="k-text-gray-500">
                          Recruiter was hiring a day ago
                        </span>
                      </span>
                    </div>
                    <div className="k-mb-0 blur k-flex k-justify-between k-items-center k-py-2 k-px-4 k-min-h-10 k-h-auto k-rounded-b-lg css-9mbh4l">
                      <span className="k-text-xs k-font-bold k-text-gray-600">
                        Apply before 1 Dec
                      </span>
                      <span className="k-flex k-items-center k-justify-center k-h-full k-rounded-xl k-bg-gray-300 k-px-2 k-py-1">
                        <a
                          className="k-font-dm-sans k-text-xs k-font-bold k-text-gray-600"
                          href="/home/w/200-entry-level-or-junior,-apprentice"
                        >
                          Entry Level / Junior, Apprentice
                        </a>
                      </span>
                    </div>
                    <div className="k-absolute k-w-full k-h-full k-z-30 k-rounded-b-lg k-bg-black k-bg-opacity-40 k-opacity-0 css-1cbp903">
                      <div className="k-flex k-gap-4 k-h-full k-justify-center k-items-center">
                        <Link
                          className="k-w-36 k-text-center k-btn-primary k-bg-white k-text-primary-color"
                          itemProp="name"
                          to={'detail/'+ props.data.id}
                        >
                          View Post
                        </Link>
                        <button className="k-w-36 k-btn-primary" onClick={props.onShow}  >Apply</button>
                      </div>
                    </div>
                  </div>
                </div>

                
      </>
            
            
    )
}
export default Card