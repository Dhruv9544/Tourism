import winter from "./../assets/season/winter.jpg";
import summer from "./../assets/season/summer.jpg";
import monsoon from "./../assets/season/monsoon.jpg";
import { Carousel, Typography, Button } from "@material-tailwind/react";

const Season = () => {
  return (
    <div className="max-w-screen h-[45rem]">
      <Carousel className="rounded-sm" autoplay={5000} loop={true}>
        <div className="relative h-full w-full">
          <img src={monsoon} alt=" 2" className="h-full w-full object-cover" />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
            <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Beauty of Monsoon
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                It is not so much for its beauty that the forest makes a claim
                upon men&apos;s hearts, as for that subtle something, that
                quality of air that emanation from old trees, that so
                wonderfully changes and renews a weary spirit.
              </Typography>
              <div className="flex gap-2">
                <Button size="lg" color="white">
                  Explore
                </Button>
                {/* <Button size="lg" color="white" variant="text">
                  Gallery
                </Button> */}
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-full w-full">
          <img src={summer} alt=" 2" className="h-full w-full object-cover" />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
            <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Summer shine
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                It is not so much for its beauty that the forest makes a claim
                upon men&apos;s hearts, as for that subtle something, that
                quality of air that emanation from old trees, that so
                wonderfully changes and renews a weary spirit.
              </Typography>
              <div className="flex gap-2">
                <Button size="lg" color="white">
                  Explore
                </Button>
                {/* <Button size="lg" color="white" variant="text">
                  Gallery
                </Button> */}
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-full w-full">
          <img src={winter} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
            <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Explore Winter winds
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                It is not so much for its beauty that the forest makes a claim
                upon men&apos;s hearts, as for that subtle something, that
                quality of air that emanation from old trees, that so
                wonderfully changes and renews a weary spirit.
              </Typography>
              <div className="flex gap-2">
                <Button size="lg" color="white">
                  Explore
                </Button>
                {/* <Button size="lg" color="white" variant="text">
                  Gallery
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};
export default Season;
