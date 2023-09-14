const SubCategoryCard = () => {
  return (
    <div class="flex justify-between gap-5 mx-16 mt-5">
      <div class="w-1/2 relative rounded-lg overflow-hidden group">
        <img src={monsoon} alt="" class="w-full h-60" />
        <div class="absolute inset-0 flex items-center h-60 justify-center bg-black bg-opacity-50 transition-opacity duration-300 opacity-0 group-hover:opacity-100 group-hover:visible">
          {/* <!-- Left-aligned heading and stars --> */}
          <div class="w-full h-60 flex items-center justify-center p-2">
            <h2 class="text-white text-2xl font-semibold ml-3">
              Card 1 Heading
            </h2>
            <div class="flex items-center space-x-2 mr-3"></div>
          </div>
        </div>
        {/* below content  */}
        <div class=" absolute bottom-0 w-full flex items-start justify-between bg-transparent transition-opacity duration-300  p-2 opacity-100 visible group-hover:opacity-0 group-hover:invisible">
          {/* <!-- Right-aligned heading and stars --> */}
          <div class="flex items-center justify-between w-full p-2">
            <h2 class="text-white text-2xl font-semibold ml-3">
              Card 1 Heading
            </h2>
            <div className="flex items-center space-x-2 mr-3">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCategoryCard;
