import monsoon from "./../assets/season/monsoon.jpg";
const StarIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-yellow-700"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
};

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
