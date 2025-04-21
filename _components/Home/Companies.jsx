import React from "react";

const companies = [
  {
    name: "Rajputana Stainless Limited",
    logo: "/img/logos/rajputana_stainless_limited.png", // Replace with actual logo URL or path
    description: "Leading manufacturer of high-quality stainless steel products for various industries.",
  },
  {
    name: "Setco Auto System Pvt Ltd",
    logo: "/img/logos/setco_auto_system.webp",
    description: "Specializes in manufacturing clutches and auto components for commercial vehicles.",
  },
  {
    name: "MG Motors",
    logo: "/img/logos/mg_motors.png", // Replace with actual logo URL or path
    description: "A global automotive giant known for its innovative and premium vehicles.",
  },
  {
    name: "R.K. Feed Equipments",
    logo: "/img/logos/rk_feed_equipments.jpg", // Replace with actual logo URL or path
    description: "Provides advanced feed machinery and equipment for the agriculture sector.",
  },
  {
    name: "Sandhar Engineering Pvt Ltd",
    logo: "/img/logos/sandhar_engineering.png", // Replace with actual logo URL or path
    description: "Manufacturer of automotive components with expertise in innovative engineering solutions.",
  },
  {
    name: "Supreme Treon",
    logo: "/img/logos/supreme_treon.png", // Replace with actual logo URL or path
    description: "Delivers advanced polymer solutions and high-quality industrial products.",
  },
  {
    name: "R.K. Bio Feed Machine",
    logo: "/img/logos/rk_bio_feed_machine.png", // Replace with actual logo URL or path
    description: "Specializes in bio feed machines, contributing to sustainable agricultural practices.",
  },
  {
    name: "Purity Flex Pack Ltd",
    logo: "/img/logos/purity_flex_pack.webp", // Replace with actual logo URL or path
    description: "Experts in flexible packaging solutions for various industries, including food and pharmaceuticals.",
  },
  {
    name: "R.P. Products Pharma Pvt Ltd",
    logo: "/img/logos/rp_products_pharma.png", // Replace with actual logo URL or path
    description: "A leading pharmaceutical company focused on innovative healthcare solutions.",
  },
  {
    name: "Krishna Defence and Allied Industries Ltd",
    logo: "/img/logos/krishna_defence.png", // Replace with actual logo URL or path
    description: "Engaged in manufacturing defense and allied products for national security.",
  },
  {
    name: "New Vishwakarma Engineering",
    logo: "/img/logos/new_vishwakarma_engineering.png", // Replace with actual logo URL or path
    description: "Offers custom engineering solutions and high-quality industrial machinery.",
  },
  {
    name: "Rubamin Ltd",
    logo: "/img/logos/rubamin.png", // Replace with actual logo URL or path
    description: "A leader in metal recycling and chemical manufacturing with a focus on sustainability.",
  },
];

const CorporateGuestsSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Trusted by Industry Leaders
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          These esteemed companies chose our hotel for their stay, experiencing unparalleled comfort and exceptional service.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="w-24 h-24 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {company.name}
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                {company.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorporateGuestsSection;
