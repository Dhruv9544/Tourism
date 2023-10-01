import { Typography } from "@material-tailwind/react";
import { Fragment } from "react";

const Contact = () => {
  return (
    <Fragment>
      <figure className="relative h-96 w-full">
        <img
          className="h-full w-full object-cover object-center"
          src="https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg"
          alt="name"
        />
        <figcaption className="absolute bottom-8 left-2/4 flex w-50 -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
          <div>
            <Typography variant="h3" color="blue-gray">
              Summer
            </Typography>
          </div>
        </figcaption>
      </figure>
      <div className="container mx-auto">
        <div class="bg-white p-2">
          <div class="flex justify-between items-center font-semibold text-lg text-black">
            <div class=" p-2 rounded-lg w-1/2 text-center border-b-2 border-orange-700">
              About
            </div>
            <div class=" p-2 rounded-lg w-1/2 text-center">Map</div>
          </div>
        </div>
        <div className="p-2">
          <h2 className="font-semibold">About Place :</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="p-2">
          <h2 className="font-semibold">Main Attraction :</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div className="bg-orange-100">
        <div className="text-center  font-sans  container mx-auto">
          <h2 className="font-semibold align-middle text-2xl p-5">
            How To Get There
          </h2>
          <div class="flex mb-4 p-5">
            <img
              src="https://static.vecteezy.com/system/resources/previews/020/211/376/non_2x/bus-icon-free-vector.jpg"
              alt="John Doe"
              class="w-16 h-16 mr-4 bg-orange-100"
            />
            <div>
              <p class="text-lg font-semibold text-start">By Road</p>
              <p class="text-gray-600">
                Lakhpat lies 135 km northwest to Bhuj.state and private buses
                service the city from all major parts of Gujarat.
              </p>
            </div>
          </div>
          <div class="flex mb-4 p-5">
            <img
              src="https://static.vecteezy.com/system/resources/previews/020/211/376/non_2x/bus-icon-free-vector.jpg"
              alt="John Doe"
              class="w-16 h-16 mr-4 bg-orange-200"
            />
            <div>
              <p class="text-lg font-semibold text-start">By Train</p>
              <p class="text-gray-600">
                Bhuj railway station lies on the western railways network
              </p>
            </div>
          </div>
          <div class="flex mb-4 p-5">
            <img
              src="https://static.vecteezy.com/system/resources/previews/020/211/376/non_2x/bus-icon-free-vector.jpg"
              alt="John Doe"
              class="w-16 h-16 mr-4 bg-orange-200"
            />
            <div>
              <p class="text-lg font-semibold text-start">By Air</p>
              <p class="text-gray-600">
                The Bhuj airport lies 4km from the city and has ample domestic
                flights from major destinations in India.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col items-center justify-center mb-5 ">
        <h2 className="font-semibold text-center text-2xl p-5">
          Related Video
        </h2>
        <div className="mt-5">
          <img
            src="https://www.gujarattourism.com/content/dam/gujrattourism/images/heritage-sites/lakhpat-fort/Lakhpat-Fort-2.jpg"
            alt="file"
            className="min-w-max h-72"
          />
        </div>
        <h2 className="font-semibold text-center text-2xl p-5">
          Related Places
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-10 gap-x-10 ">
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://cdn.pixabay.com/photo/2015/05/11/14/44/pencils-762555_1280.jpg"
              alt="Blog Post 1"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h2 class="text-xl font-semibold mb-2">Exam</h2>
              <p class="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                auctor eros sit amet turpis lacinia, id ullamcorper libero
                sodales.
              </p>
              <a
                href="/singleblogpage.html"
                class="text-blue-500 hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://cdn.pixabay.com/photo/2014/02/13/07/28/security-265130_1280.jpg"
              alt="Blog Post 1"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h2 class="text-xl font-semibold mb-2">Security</h2>
              <p class="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                auctor eros sit amet turpis lacinia, id ullamcorper libero
                sodales.
              </p>
              <a
                href="/singleblogpage.html"
                class="text-blue-500 hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://cdn.pixabay.com/photo/2020/02/27/14/05/planner-4884740_1280.jpg"
              alt="Blog Post 1"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h2 class="text-xl font-semibold mb-2">Drawing</h2>
              <p class="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                auctor eros sit amet turpis lacinia, id ullamcorper libero
                sodales.
              </p>
              <a
                href="/singleblogpage.html"
                class="text-blue-500 hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
        </div>{" "}
      </div>
    </Fragment>
  );
};

export default Contact;
