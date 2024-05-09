import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faDumbbell,
    faWeightScale,
    faScaleBalanced
 } from '@fortawesome/free-solid-svg-icons'

function SecoindSection() {
  return (
    <div>
      <section className="flex flex-col mb-0 items-center justify-center px-6 py-10 bg-transparent">
        <div className="grid gap-6 mb-8 md:grid-cols-3">
          <div className="flex flex-col items-center justify-center p-4 text-center rounded-lg ">
            <div className="p-3 text-3xl text-gray-800 dark:text-white">
              <FontAwesomeIcon icon={faDumbbell} className="h-6 w-6" />
            </div>
            <h3 className="mt-2 text-lg font-semibold text-gray-700 dark:text-gray-200">Prepare</h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Dive deep into personal growth by fortifying yourself spiritually, physically, and mentally.
              Each day is an opportunity to mold your resilience and enhance your capabilities.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-4 text-center rounded-l">
            <div className="p-3 text-3xl text-gray-800 dark:text-white">
              <FontAwesomeIcon icon={faWeightScale} className="h-6 w-6" />
            </div>
            <h3 className="mt-2 text-lg font-semibold text-gray-700 dark:text-gray-200">Commit</h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Dedication to family, work, and faith forms the cornerstone of our ethos. At Chi Rho,
              commitment isn&apos;t just a virtue—it&apos;s our way of life, grounding us and guiding our actions.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-4 text-center rounded-lg ">
            <div className="p-3 text-3xl text-gray-800 dark:text-white">
              <FontAwesomeIcon icon={faScaleBalanced} className="h-6 w-6" />
            </div>
            <h3 className="mt-2 text-lg font-semibold text-gray-700 dark:text-gray-200">Respond</h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Life throws challenges at every turn. Equipped with preparation and bound by commitment,
              our response to these challenges defines us. Stand firm with the strength you&apos;ve cultivated
              and face adversity head-on.
            </p>
          </div>

        </div>
      </section>
    </div>
  )
}

export default SecoindSection
