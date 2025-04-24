const OurServices = () => {
  return (
    <section className="w-full py-16  md:mt-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-semibold text-center mb-16 text-gray-400">
          Our Services
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs uppercase text-gray-200 font-semibold tracking-widest mb-2">Top Services</p>
            <h3 className="text-4xl font-extrabold leading-snug text-white">
              Crafting elegance in every corner
            </h3>
            <p className="text-lg text-white mt-6 leading-relaxed">
              Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
            <p className="text-lg text-white mt-4 leading-relaxed">
              Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;