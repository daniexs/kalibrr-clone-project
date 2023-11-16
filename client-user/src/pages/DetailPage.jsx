import { useDispatch, useSelector } from "react-redux"
import Navbar from "../components/Navbar"
import { useEffect } from "react"
import { getJob } from "../store/actions"
import { useParams } from "react-router-dom"
import './DetailPage.css'

function DetailPage(){
    const dispatch = useDispatch()
    const job = useSelector(state=>state.jobs.job)
    const company = job.Company? job.Company : {}
    const skill = job.Skills? job.Skills : []
    const {id} = useParams()

    useEffect(() => {
      dispatch(getJob(id))
    }, [])
    

    return (
        <div id="__next" data-reactroot="">
            <div className="k-flex k-flex-col k-items-stretch k-min-h-screen k-bg-body">
                <Navbar/>
                <main className="k-flex-grow">
                <div
                    itemScope=""
                    itemType="http://schema.org/JobPosting"
                    className="k-container md:k-px-4 md:k-mb-12"
                >
                    <div className="k-border-tertiary-ghost-color md:k-border md:k-border-t-0 md:k-rounded-b-lg"
                        
                    >
                        <div className="k-border-b k-hidden k-max-h-32 md:k-max-h-64 md:k-overflow-hidden lg:k-block css-15kz1p5"
                           
                        >
                            <img
                            width={900}
                            height={300}
                            src="/images/Job-post--Default-Banner.png"
                            alt="PT BCA Finance"
                            className="k-w-full"
                            decoding="async"
                            />
                        </div>
                    <div 
                        className="k-bg-white k-relative k-p-4 md:k-rounded-b-lg"
                    >
                        <div className="md:k-flex md:k-justify-between">
                        <div className="k-mb-4">
                            <a
                            className="k-bg-white k-flex k-items-center k-flex-shrink k-justify-center k-text-4xl k-text-subdued k-overflow-hidden k-px-4 k-py-2 k-z-20 k--top-8 k-w-32 k-h-20 k-shadow k-border k-border-tertiary-ghost-color k-rounded k-mb-4 md:k-w-48 md:k-h-28 md:k--top-12 lg:k-absolute"
                            href="/c/pt-bca-finance/jobs"
                            >
                            <div>
                                <img
                                loading="lazy"
                                src={company.companyLogo}
                                alt="PT BCA Finance"
                                width={130}
                                height={80}
                                className="k-block k-max-w-full k-max-h-full k-bg-white k-mx-auto"
                                decoding="async"
                                />
                            </div>
                            </a>
                            <h1
                            itemProp="title"
                            className="k-text-title k-inline-flex k-items-center md:k-text-primary-head md:k-flex lg:k-mt-16"
                            >
                            {job.title}
                            &nbsp;
                            </h1>
                            <span className="k-flex k-items-center">
                            <a href="/c/pt-bca-finance/jobs">
                                <h2 className="k-inline-block">{company.name}</h2>
                            </a>
                            <span className="k-mb-0.5">
                                &nbsp;
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
                            </span>
                            <ul className="md:k-flex">
                            <li>
                                <span
                                itemScope=""
                                itemType="http://schema.org/PostalAddress"
                                >
                                {company.location}
                                </span>
                                <div
                                className="k-hidden"
                                itemScope=""
                                itemType="http://schema.org/Place"
                                itemProp="jobLocation"
                                >
                                
                                </div>
                                
                            </li>
                            <li className="md:k-list-disc md:k-ml-7">
                                <a className="k-text-grey-900" href="/home/t/full-time">
                                {job.jobType}
                                </a>
                                <span itemProp="employmentType" className="k-hidden">
                                FULL_TIME
                                </span>
                            </li>
                            </ul>
                        </div>
                        <div className="k-text-subdued k-text-caption md:k-text-right">
                            <p>
                            Posted 20 days ago and deadline of application is on 1 Dec
                            </p>
                            <p>Recruiter was hiring 2 days ago</p>
                            <span itemProp="datePosted" className="k-hidden">
                            2023-10-16T03:48:46.420512+00:00
                            </span>
                            <span itemProp="validThrough" className="k-hidden">
                            2023-11-30T17:00:00+00:00
                            </span>
                        </div>
                        </div>
                        <div className="k-mt-4 k-mb-8 md:k-flex md:k-justify-between">
                        <div className="k-hidden md:k-inline">
                            <button className="k-btn-primary k-btn-lg">Apply Now</button>
                        </div>
                        <div className="k-flex k-justify-between md:k-items-end">
                            <button className="k-btn-tertiary k-inline-flex k-items-center k-justify-center k-w-full k-mr-2 md:k-btn-lg md:k-w-auto">
                            <svg
                                className="MuiSvgIcon-root k-mr-2"
                                focusable="false"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
                            </svg>
                            {/* */}Save
                            </button>
                            <button className="k-btn-tertiary k-inline-flex k-items-center k-justify-center k-w-full md:k-btn-lg md:k-w-auto">
                            <svg
                                className="MuiSvgIcon-root k-mr-2"
                                focusable="false"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
                            </svg>
                            {/* */}Share
                            </button>
                        </div>
                        </div>
                        <div className="k-py-8 k-border-t k-border-tertiary-color md:k-flex md:k-justify-center">
                        <div className="md:k-w-full md:k-pr-4 css-11e7ttb">
                            <h2 className="k-text-title k-font-medium k-mb-2">
                            Job Description
                            </h2>
                            <div itemProp="description" className="k-mb-4 css-q0v7oq">
                            <p>{job.description}</p>
                            
                            </div>
                            <h2 className="k-text-title k-font-medium k-mb-4">
                            Minimum Qualifications
                            </h2>
                            <div itemProp="qualifications" className="k-mb-4 css-q0v7oq">
                            {skill.map(el=>{
                                return (
                                    <>
                                    <p key={el.id}>Skill: {el.name}</p>
                                    <p> Level: {el.level}</p>
                                    </>
                                )
                            })}
                            
                            
                            </div>
                            <h2 className="k-text-title k-font-medium k-mb-4">
                            Jobs Summary
                            </h2>
                            <div className="md:k-flex">
                            <div className="md:k-mr-4">
                                <dl className="k-mb-4">
                                <dt className="k-text-overline k-text-subdued">
                                    Job Level
                                </dt>
                                <dd className="k-inline-flex k-items-center">
                                    <a href="/home/w/200-entry-level-or-junior,-apprentice">
                                    Entry Level / Junior, Apprentice
                                    </a>
                                </dd>
                                </dl>
                                <dl className="k-mb-4">
                                <dt className="k-text-overline k-text-subdued">
                                    Job Category
                                </dt>
                                <dd className="k-inline-flex k-items-center">
                                    <a href="/home/i/customer-service">Customer Service</a>
                                </dd>
                                </dl>
                                <dl className="k-mb-4">
                                
                                </dl>
                                <dl className="k-mb-4">
                                <dt className="k-text-overline k-text-subdued">
                                    Recruiter response to application
                                </dt>
                                <dd className="k-inline-flex k-items-center">
                                    <span className="k-mr-1">Sometimes</span>
                                    <div
                                    className=""
                                    style={{ display: "inline" }}
                                    data-tooltipped=""
                                    aria-describedby="tippy-tooltip-2"
                                    data-original-title="job-post.response-rate"
                                    >
                                    <svg
                                        className="MuiSvgIcon-root"
                                        focusable="false"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                                    </svg>
                                    </div>
                                </dd>
                                </dl>
                                <dl className="k-mb-4">
                                <dt className="k-text-overline k-text-subdued">
                                    Office Address
                                </dt>
                                <dd className="k-inline-flex k-items-center">
                                    South Jakarta, DKI Jakarta, Indonesia
                                </dd>
                                </dl>
                            </div>
                            <div>
                                <dl className="k-mb-4">
                                <dt className="k-text-overline k-text-subdued">
                                    Industry
                                </dt>
                                <dd className="k-inline-flex k-items-center">
                                    <span itemProp="industry">Financial Services</span>
                                </dd>
                                </dl>
                                <dl className="k-mb-4">
                                <dt className="k-text-overline k-text-subdued">
                                    Vacancy
                                </dt>
                                <dd className="k-inline-flex k-items-center">
                                    1 opening
                                </dd>
                                </dl>
                                <dl className="k-mb-4">
                                <dt className="k-text-overline k-text-subdued">
                                    Website
                                </dt>
                                <dd className="k-inline-flex k-items-center">
                                    <a
                                    href="https://www.bcafinance.co.id/"
                                    target="_blank"
                                    rel="noopener nofollow"
                                    >
                                    https://www.bcafinance.co.id/
                                    </a>
                                </dd>
                                </dl>
                            </div>
                            </div>
                        </div>
                        <div className="k-text-caption k-text-subdued md:k-w-1/4">
                            <p className="k-mb-4">
                            Feel secure when applying: look for the verified icon
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
                            and always do your research on a company. Avoid and report
                            situations when employers require payment or work without
                            compensation as part of their application process.
                            </p>
                            <button className="k-p k-flex k-items-center k-text-secondary-color hover:k-underline">
                            <svg
                                className="MuiSvgIcon-root k-mr-1"
                                focusable="false"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z" />
                            </svg>
                            Report this job
                            </button>
                        </div>
                        </div>
                        <div className="k-py-8 k-border-t k-border-tertiary-color">
                        <h2 className="k-text-title k-mb-4">About PT BCA Finance</h2>
                        <div className="k-whitespace-pre-line css-q0v7oq">
                            {company.description}
                        </div>
                        </div>
                        
                    </div>
                    </div>
                </div>
                <div className="k-container k-p-4 k-bg-white k-border-t k-border-tertiary-ghost-color k-sticky k-bottom-0 md:k-hidden">
                    <button className="k-btn-primary k-btn-block k-shadow-lg">
                    Apply Now
                    </button>
                </div>
                <div className="k-container k-border-t k-border-tertiary-ghost-color md:k-border-0 md:k-px-4 md:k-mb-12">
                    <h2 className="k-text-overline k-text-subdued k-flex k-items-center k-m-4 k-mt-8 md:k-ml-4">
                    People also applied to
                    </h2>
                    <div className="md:k-bg-white k-border-t k-border-b k-border-tertiary-ghost-color md:k-rounded-lg md:k-border md:k-overflow-hidden">
                    <div className="k-flex k-items-center k-justify-center k-m-8">
                        No recommendations available yet.
                    </div>
                    </div>
                </div>
                <ol
                    itemScope=""
                    itemType="http://schema.org/BreadcrumbList"
                    className="k-hidden k-text-caption k-text-grey-600 k-container md:k-flex k-mb-8 md:k-mb-12"
                >
                    <li
                    itemProp="itemListElement"
                    itemScope=""
                    itemType="http://schema.org/ListItem"
                    >
                    <a itemProp="item" className="k-text-grey-600" href="/home">
                        <span itemProp="name">Home</span>
                    </a>
                    <span className="k-mx-2">/</span>
                    <meta itemProp="position" content={1} />
                    </li>
                    <li
                    itemProp="itemListElement"
                    itemScope=""
                    itemType="http://schema.org/ListItem"
                    >
                    <a
                        itemProp="item"
                        className="k-text-grey-600"
                        href="/home/l/South-Jakarta"
                    >
                        <span itemProp="name">South Jakarta</span>
                    </a>
                    <span className="k-mx-2">/</span>
                    <meta itemProp="position" content={2} />
                    </li>
                    <li
                    itemProp="itemListElement"
                    itemScope=""
                    itemType="http://schema.org/ListItem"
                    >
                    <a
                        itemProp="item"
                        className="k-text-grey-600"
                        href="/c/pt-bca-finance/jobs"
                    >
                        <span itemProp="name">PT BCA Finance</span>
                    </a>
                    <span className="k-mx-2">/</span>
                    <meta itemProp="position" content={3} />
                    </li>
                    <li
                    itemProp="itemListElement"
                    itemScope=""
                    itemType="http://schema.org/ListItem"
                    >
                    <a
                        itemProp="item"
                        className="k-text-grey-600"
                        href="/c/pt-bca-finance/jobs/221512/customer-care-staff"
                    >
                        <span itemProp="name">Customer Care Staff</span>
                    </a>
                    <meta itemProp="position" content={4} />
                    </li>
                </ol>
                </main>
                <footer className="k-bg-gray-100 k-text-black">
                <div className="k-hidden lg:k-flex lg:k-flex-col lg:k-items-center k-min-h-fit k-pb-24 xl:k-px-28 css-14g3jz1">
                    <h2 className="k-text-white k-text-2xl k-font-bold k-my-14">
                    Office Locations
                    </h2>
                    <div className="k-grid k-grid-cols-3">
                    <div className="k-flex k-flex-col k-items-center k-text-center k-gap-12 k-pt-11 k-pb-1 k-px-16 css-twv51u">
                        <img
                        src="/images/philippines-flag.png"
                        decoding="async"
                        loading="lazy"
                        alt="Philippine Flag"
                        width={160}
                        height={96}
                        />
                        <p className="k-text-white k-font-bold">
                        Suite 15, 5F Phinma Plaza, 39 Plaza Drive, Rockwell Center, Makati
                        City, Metro Manila, Philippines 1210
                        </p>
                    </div>
                    <div className="k-flex k-flex-col k-items-center k-text-center k-gap-12 k-pt-11 k-pb-1 k-px-16 css-twv51u">
                        <img
                        src="/images/indonesia-flag.png"
                        decoding="async"
                        loading="lazy"
                        alt="Indonesian Flag"
                        width={160}
                        height={96}
                        />
                        <p className="k-text-white k-font-bold">
                        Office 8, Level 18-A, Jl. Jend. Sudirman Kav. 52—53, SCBD, South
                        Jakarta, Indonesia 12190
                        </p>
                    </div>
                    <div className="k-flex k-flex-col k-items-center k-text-center k-gap-12 k-pt-11 k-pb-1 k-px-16">
                        <img
                        src="/images/us-flag.png"
                        decoding="async"
                        loading="lazy"
                        alt="US Flag"
                        width={160}
                        height={96}
                        />
                        <p className="k-text-white k-font-bold">
                        548 Market St. #748132 San Francisco, CA 94104
                        </p>
                    </div>
                    </div>
                </div>
                </footer>
            </div>
        </div>

    )
}
export default DetailPage