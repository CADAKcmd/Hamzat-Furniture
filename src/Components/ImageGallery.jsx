import { useState } from "react";

export default function ImageGallery() {
  const images = [
    { src: "https://pantry.axiomthemes.com/wp-content/uploads/2023/05/portfolio-image9-copyright-890x664.jpg", title: "Furniture", subtitle: "All about the detail", link: "#" },
    { src: "https://pantry.axiomthemes.com/wp-content/uploads/2023/05/portfolio-image10-copyright-890x664.jpg", title: "Furniture", subtitle: "Breaking with trends", link: "#" },
    { src: "https://pantry.axiomthemes.com/wp-content/uploads/2023/05/portfolio-image11-copyright-890x664.jpg", title: "Furniture", subtitle: "Old meets new", link: "#" },
    { src: "https://pantry.axiomthemes.com/wp-content/uploads/2023/05/portfolio-image12-copyright-890x664.jpg", title: "Furniture", subtitle: "Maintaining character", link: "#" },
    { src: "https://pantry.axiomthemes.com/wp-content/uploads/2023/05/portfolio-image13-copyright-890x664.jpg", title: "Furniture", subtitle: "Cozy and comfortable", link: "#" },
  ];

  return (
    <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-8  overflow-hidden">
      {images.map((img, index) => (
        <ImageItem key={index} img={img} />
      ))}
    </div>
  );
}

function ImageItem({ img }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative transition-all duration-500 ease-in-out overflow-hidden ${hovered ? "col-span-2 row-span-2" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={img.src} alt={img.title} className="w-full h-auto object-cover transition-transform duration-500 ease-in-out transform scale-100 hover:scale-110" />
      <div
        className={`absolute bottom-0 left-0 w-full bg-white p-4 transition-all duration-500 ease-in-out ${hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <p className="text-sm text-gray-500">{img.title}</p>
        <h3 className="text-lg font-semibold">{img.subtitle}</h3>
        <a href={img.link} className="text-black hover:underline block">Read More</a>
      </div>
    </div>
  );
}
