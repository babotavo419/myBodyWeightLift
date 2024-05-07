import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faScaleBalanced, faWeightScale } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="flex flex-col">
      <main className="flex flex-col items-center justify-center flex-grow text-center px-6">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white sm:text-4xl">Welcome to the Body &amp; Weight Equalizer App</h1>
        <h2 className="mt-6 text-sm text-gray-500 dark:text-gray-400 sm:text-base">
          The &quot;Weight Equalizer&quot; app is designed as a fitness planning tool to
          help users align their body weight and strength training goals, particularly
          focusing on progressive weight. Key Functionalities and Logic include state management and dynamic rendering,
          input validation, customizable goals, and calculative logic.The app&apos;s UI is designed for clarity and ease of use, with a straightforward
          selection between two main fitness goals and input fields that dynamically adjust
          to the chosen goal. It includes error handling to guide users towards realistic goal-setting
          and a results section that displays the calculated outcome.
        </h2>
        <Link href={''} className="mt-5 mb-6 px-5 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg">Get Started</Link>
      </main>
      <section className="flex flex-col mb-0 items-center justify-center px-6 py-10 bg-gray-100 dark:bg-gray-900">
        <div className="grid gap-6 mb-8 md:grid-cols-3">
          <div className="flex flex-col items-center justify-center p-4 text-center bg-white rounded-lg dark:bg-gray-800">
            <div className="p-3 text-3xl text-gray-800 dark:text-white">
              <FontAwesomeIcon icon={faDumbbell} className="h-6 w-6" />
            </div>
            <h3 className="mt-2 text-lg font-semibold text-gray-700 dark:text-gray-200">The app operates on two main objectives</h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Increase Both Weight and Strength or Increase Strength While Maintaining Weight
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-4 text-center bg-white rounded-lg dark:bg-gray-800">
            <div className="p-3 text-3xl text-gray-800 dark:text-white">
              <FontAwesomeIcon icon={faScaleBalanced} className="h-6 w-6" />
            </div>
            <h3 className="mt-2 text-lg font-semibold text-gray-700 dark:text-gray-200">Increase Both Weight and Strength</h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400"> This mode is for users who aim to simultaneously increase their body
              weight and the weight they can lift. Users input their current body weight,
              current lift weight, and their weekly increment goals for both. The app then
              calculates the number of weeks it will take for the lift weight to equal the body weight.</p>
          </div>
          <div className="flex flex-col items-center justify-center p-4 text-center bg-white rounded-lg dark:bg-gray-800">
            <div className="p-3 text-3xl text-gray-800 dark:text-white">
              <FontAwesomeIcon icon={faWeightScale} className="h-6 w-6" />
            </div>
            <h3 className="mt-2 text-lg font-semibold text-gray-700 dark:text-gray-200">Increase Strength While Maintaining Weight</h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              This mode caters to users who wish to increase their lifting capacity
              without changing their body weight. Users provide their current body weight, current
              lift weight, and the desired weekly increase for their lift weight.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
