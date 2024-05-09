import React from 'react'
import Link from 'next/link'

function ThirdSection() {
  return (
    <div>
      <section className="flex flex-col mb-0 items-center justify-center px-6 py-10 border-t border-black">
      <h3 className="mt-2 text-lg font-semibold text-gray-700 dark:text-gray-200">Join Me</h3>
        <div className="flex flex-col items-center justify-center p-4 text-center rounded-lg ">
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Join Chi Rho Power and Strength for encourgment in a life marked by purpose, dedication, and perseverance.
            Commit to excellence. Prepare for the future. Respond with vigor.
          </p>
          <Link href={''} className="mt-5 mb-6 px-5 py-2 text-sm font-medium text-white bg-gray-700 hover:bg-gray-600 rounded-lg">Get Started</Link>
        </div>
      </section>
    </div>
  )
}

export default ThirdSection
