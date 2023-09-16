import { IconButton } from "@material-tailwind/react";
import hillstation from "./../assets/category/hillstation.jpg";
const Contact = () => {
  return (
    <div class="flex items-center justify-center min-h-screen bg-rose-50">
      {/* <!-- Card Container --> */}
      <div class="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
        {/* <!-- Left Side --> */}
        <div class="p-6 md:p-20">
          {/* <!-- Top Content --> */}
          <h2 class="font-sans mb-5 text-4xl font-bold">Kedarnath Trek</h2>
          <p class="max-w-sm mb-12 font-sans font-light text-gray-600">
            Kedarnath Yatra is one of the most spiritual pilgrimages in India.
            Kedarnath, the abode of Lord Shiva attracts thousands of devotees
            within a span of 6 months when the shrine remains open. Kedarnath is
            a part of the sacred Char Dhams (4 pilgrimages) as well as a part of
            the Panch Kedars. This blog is about our experience of the Kedarnath
            Trek done in the month of October. Read on to know more about
            Kedarnath Yatra, how to reach and where to stay and other related
            information.
          </p>
          {/* <!-- border --> */}
          <div class="mt-12 border-b border-b-gray-300"></div>
          <IconButton color="blue">
            <i className="fas fa-chevron-left" />
          </IconButton>
        </div>
        {/* <!-- Right Side --> */}
        <img
          src={hillstation}
          alt=""
          class="w-[430px] flex md:flex-row md:block rounded-r-2xl"
        />
      </div>
    </div>
  );
};

export default Contact;
