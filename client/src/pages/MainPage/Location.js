const Location = () => {
  return (
    <div className="bg-[#D3E4D0] ">
      <div class="container mx-auto px-4 py-8">
        <div class="flex flex-col md:flex-row justify-between">
          <div class="flex-1">
            <h1 class="text-3xl font-bold uppercase [font-family:'Inter-SemiBold',Helvetica]">
              Gir National Park
            </h1>
            <p class="mt-4 font-light [font-family:'Inter-SemiBold',Helvetica] uppercase">
              Explore the majestic home of the Asiatic lions
            </p>
          </div>
        </div>
        <div class="flex flex-wrap justify-between">
          <div class="w-[18rem] h-[18rem] flex-shrink-0 bg-gray-200 m-4 text-center">
            <h3>By Bus </h3>
          </div>

          <div class="w-[18rem] h-[18rem] flex-shrink-0 bg-gray-200 m-4 text-center">
            <h3>By Train</h3>
          </div>

          <div class="w-[18rem] h-[18rem] flex-shrink-0 bg-gray-200 m-4 text-center">
            <h3>By Aeroplane</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
