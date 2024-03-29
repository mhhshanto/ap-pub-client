import React from 'react'
import { BsCloudArrowUp } from 'react-icons/bs';
import { HiLockClosed, HiServer } from "react-icons/hi";

const About = () => {
  return (
    <div className='mt-20'>
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">Unveiling Stories</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Australia Pacific Publisher: Crafting Literary Excellence</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              At Australia Pacific Publisher, we stand at the forefront of literary excellence, nurturing voices and stories that resonate across the vast landscapes of Australia and the Pacific. With a commitment to fostering cultural diversity and promoting emerging talents, we endeavor to illuminate the richness of our region's literary tapestry.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="./src/assets/about-us.jpg"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
              Founded with a vision to amplify unique narratives and perspectives, Australia Pacific Publisher serves as a beacon for both established and aspiring authors. We believe in the power of storytelling to bridge cultures, inspire change, and foster understanding. Our dedication to quality and innovation ensures that every publication under our banner reflects the highest standards of craftsmanship and creativity.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <BsCloudArrowUp className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Cultural Diversity: </strong>Through diverse voices and perspectives, we paint a vibrant tapestry of human experience, enriching minds and hearts with every tale told.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <HiLockClosed className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Creative Collaboration:</strong> At the intersection of imagination and innovation, we cultivate a space where authors, illustrators, and creators collaborate harmoniously, breathing life into extraordinary narratives.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <HiServer className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Literary Legacy:</strong> With every publication, we carve a legacy of literary excellence, shaping the future of storytelling while honoring the timeless traditions that bind us together.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
              At Australia Pacific Publisher, our mission extends beyond the pages of our books. We are committed to nurturing a vibrant literary community through initiatives such as author events, writing workshops, and mentorship programs. By engaging with readers, writers, and literary enthusiasts alike, we aim to cultivate a culture of literary appreciation and dialogue.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">What drives Australia Pacific Publisher?</h2>
              <p className="mt-6">
              At Australia Pacific Publisher, our driving force lies in the belief that every story holds the power to inspire, inform, and transform. We are fueled by a passion for nurturing diverse voices, cultivating cultural dialogue, and fostering connections through the written word. Our dedication to literary excellence and our commitment to promoting emerging talents are the cornerstones of our mission. Through collaborative partnerships and a shared love for storytelling, we endeavor to illuminate the rich tapestry of human experience, one page at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About