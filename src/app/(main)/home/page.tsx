export default function Home() {
  return (
    <div className="flex flex-col slide-to-left w-full h-full">
      <div className="flex w-full h-full">
        <div className="flex flex-col w-full h-full">
          <div className="flex max-sm:flex-col-reverse w-full h-full">
            <div className="sm:w-3/5 flex h-full sm:p-24 sm:pb-30">
              <div className="flex flex-col pb-18 gap-4 w-full h-full justify-end">
                <div className="text-5xl/tight slide-to-bottom max-lg:text-4xl/tight font-bold">
                  Kaleab Mengesha, NextJs developer
                </div>
                <div className="text-gray-500 slide-to-right  max-lg:text-sm">
                  NextJs developer with the latest and cutting edge frameworks
                  for the least latency and maximum performance, more than 3yrs
                  of experience using Tailwind CSS for styling and MongoDB as
                  main database server
                  <br />
                  Also ReactNative and Kotlin for Android Development
                </div>
              </div>
            </div>

            <div className="flex sm:w-2/5 h-full pr-4 items-center">
              <div className="bg-[#ffffff15] p-2 rounded-2xl w-full flex flex-col">
                <div className="p-1 px-4 text-gray-400">Top Project</div>

                <div className="w-full h-96 bg-[#ffffff09] rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
