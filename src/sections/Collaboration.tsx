/* eslint-disable @next/next/no-img-element */
"use client";

const Collaboration = () => {
  return (
    <section className="relative z-10 mt-[-40vh] h-[300vh]">
      <div className="mb-[-120vh] h-[420vh] w-full">
        <div className="sticky top-[10vh]">
          <div className="flex justify-center">
            <div className="origin-top">
              <img
                src="https://code.visualstudio.com/assets/docs/languages/typescript/overview.png"
                className="h-auto max-h-none rounded w-[70vw]"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
