export default function OurMission() {
  return (
    <div className="container mx-auto mt-14 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <div className="flex flex-col lg:flex-row justify-between items-stretch gap-4 sm:gap-6 mb-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 shrink-0 pt-0.5 pl-10">
          OUR MISSION,<br /><span className="text-primary">YOUR PASSION</span>
        </h2>
        <div className="w-full h-px lg:w-px lg:h-auto shrink-0 bg-gray-200" aria-hidden />
        <div className="text-gray-600 text-md leading-relaxed max-w-xl w-full">
          Our mission is to bring fans, players, and coaches together by delivering real-time updates, in-depth analysis, and resources that help every sports enthusiast thrive.
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-1 bg-white  rounded-xl border border-gray-100 transition-all group overflow-hidden flex justify-center">
          <img
            src="/lovable-uploads/basketball-jump.jpg"
            alt="Man in black tank top and yellow shorts playing basketball"
            className="max-w-[300px] max-h-[300px] w-full h-auto object-cover rounded-xl"
          />
        </div>
        <div className="col-span-2 bg-white  rounded-xl border border-gray-100 transition-all group overflow-hidden">
          <img
            src="/lovable-uploads/football-width.jpg"
            alt="Football training session"
            className="w-full max-h-[300px] object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}