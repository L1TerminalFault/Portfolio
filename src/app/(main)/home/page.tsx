export default function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex w-full h-full">
        <div className="flex flex-col w-full h-full">
          <div className="flex w-full h-full">
            <div className="w-3/5 flex h-full p-24 pb-30">
              <div className="flex flex-col pb-18 gap-4 w-full max-w-96 h-full justify-end">
                <div className="text-5xl/tight max-lg:text-4xl/tight font-bold">
                  Kaleab Mengesha, NextJs developer
                </div>
                <div className="text-gray-700 max-lg:text-sm">
                  NextJs developer with the latest and cutting edge frameworks
                  for the least latency and maximum performance, more than 3yrs
                  of experience using Tailwind CSS for styling and MongoDB as
                  main database server
                  <br />
                  Also ReactNative and Kotlin for Android Development
                </div>
              </div>
            </div>

            <div className="flex w-2/5 h-full pr-4 items-center">
              <div className="bg-[#ffffff09] p-2 rounded-2xl w-full flex flex-col">
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
