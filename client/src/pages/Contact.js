import { IconButton } from "@material-tailwind/react";
import hillstation from "./../assets/category/hillstation.jpg";
const Contact = () => {
  return (
    <div class="flex items-center justify-center min-h-screen bg-rose-50">
      {/* <!-- Card Container --> */}
      <div class="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
        {/* <!-- Right Side (Image at the top on smaller screens) --> */}
        <img
          src={hillstation}
          alt=""
          class="w-full xl:rounded-b-2xl rounded-t-2xl md:w-[430px] md:rounded-r-2xl md:rounded-b-none"
        />
        {/* <!-- Left Side (Text and Icon) --> */}
        <div class="p-6 md:p-20">
          {/* <!-- Top Content --> */}
          <h2 class="font-sans mb-5 text-4xl font-bold">Kedarnath Trek</h2>
          <IconButton color="blue">
            <i className="fas fa-chevron-left" />
          </IconButton>
          {/* <!-- Text content here --> */}
          <p class="max-w-sm mt-12 font-sans font-light text-gray-600">
            {/* <!-- Text content here --> */}
            Kedarnath Yatra is one of the most spiritual pilgrimages in India.
            Kedarnath, the abode of Lord Shiva attracts thousands of devotees
            within a span of 6 months when the shrine remains open. Kedarnath is
            a part of the sacred C
          </p>
          {/* <!-- border --> */}
          <div class="mt-12 border-b border-b-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
