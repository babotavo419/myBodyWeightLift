import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faDumbbell,
    faWeightScale,
    faScaleBalanced
 } from '@fortawesome/free-solid-svg-icons'

function SecoindSection() {
  return (
      <section className="flex flex-col mt-8 mb-8 justify-center px-6 py-10">
        <h2 className="text-3xl font-bold text-center text-white mt-8 mb-8">Our Values</h2>
        <div className="grid gap-6 mt-8 mb-8 md:grid-cols-3">
          <div className="flex flex-col items-center justify-center p-4 text-center rounded-lg ">
            <div className="p-3 text-3xl text-white">
              <FontAwesomeIcon icon={faDumbbell} className="text-6xl mt-8 mb-8" />
            </div>
            <h3 className="mb-4 text-lg font-semibold text-gray-200">Prepare</h3>
            <p className="mt-2 mb-2 text-sm text-white">
              Dive deep into personal growth by fortifying yourself spiritually, physically, and mentally.
              Each day is an opportunity to mold your resilience and enhance your capabilities.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-4 text-center rounded-l">
            <div className="p-3 text-3xl text-white">
              <FontAwesomeIcon icon={faWeightScale} className="text-6xl mt-8 mb-8" />
            </div>
            <h3 className=" mb-4 text-lg font-semibold text-gray-200">Commit</h3>
            <p className="mt-2 mb-2 text-sm text-white">
              Dedication to family, work, and faith forms the cornerstone of our ethos. At Chi Rho,
              commitment isn't just a virtue—it's our way of life, grounding us and guiding our actions.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-4 text-center rounded-lg ">
            <div className="p-3 text-3xl text-white">
              <FontAwesomeIcon icon={faScaleBalanced} className="text-6xl mt-8 mb-8" />
            </div>
            <h3 className="mb-4 text-lg font-semibold text-gray-200">Respond</h3>
            <p className="mt-2 mb-2 text-sm text-white">
              Life throws challenges at every turn. Equipped with preparation and bound by commitment,
              our response to these challenges defines us. Stand firm with the strength you've cultivated
              and face adversity head-on.
            </p>
          </div>

        </div>
      </section>
  )
}

export default SecoindSection
