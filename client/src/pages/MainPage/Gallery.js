const Gallery = () => {
  return (
    <div>
      <section className="bg-[#21825c] min-h-screen flex flex-wrap items-center justify-center">
        <div className="text-white font-bold flex flex-wrap justify-around items-center container mx-auto p-5 text-2xl font-serif  ">
          <div className="w-full sm:w-1/2 p-4">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Product"
              className="max-w-full h-auto mx-auto rounded-lg"
            />
          </div>
          <div className="w-full sm:w-1/2 p-4">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Product"
              className="max-w-full h-auto mx-auto rounded-lg"
            />
          </div>
          <div className="w-full sm:w-1/2 p-4">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Product"
              className="max-w-full h-auto mx-auto rounded-lg"
            />
          </div>
          <div className="w-full sm:w-1/2 p-4">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Product"
              className="max-w-full h-auto mx-auto rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
