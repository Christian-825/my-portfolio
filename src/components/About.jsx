import React, { useState } from "react";

const certificates = [
  {
    id: 1,
    title: "Frontend Course",
    src: "/images/certificates/Frontend-Course.jpeg",
    alt: "Frontend Course",
  },
  {
    id: 2,
    title: "Preparatory Course — Git, HTML, CSS",
    src: "/images/certificates/Prep-course 1.jpeg",
    alt: "Preparatory Course — Git, HTML, CSS",
  },
  {
     id: 3,
     title: "Preparatory Course — JavaScript",
     issuer: "Zuitt Coding Bootcamp",
     src: "/images/certificates/Prep-course 2.jpeg",
     alt: "Preparatory Course — JavaScript",
  },
  {
     id: 4,
     title: "Preparatory Course — MongoDB",
     src: "/images/certificates/Prep-course 3.jpeg",
     alt: "Preparatory Course — MongoDB",
  },
];

export default function About() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentCert, setCurrentCert] = useState(null);

  const openModal = (cert) => {
    setCurrentCert(cert);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentCert(null);
  };

  return (
    <>
      {/* Intro Section */}
      <section
        id="landing"
        className="w-full min-h-screen pt-24 px-6 sm:px-12 md:px-20 flex items-center bg-gradient-to-br from-black via-gray-900 to-black"
        aria-label="About Christian Nievera"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 items-center gap-10">
          {/* Profile Image */}
          <div className="md:col-span-5 flex justify-center md:justify-end order-1 md:order-2">
            <img
              src="/images/me.jpg"
              alt="Christian Nievera"
              className="rounded-full w-[280px] h-[280px] object-contain bg-black border-4 border-blue-300 shadow-2xl transform transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>

          {/* Text Content */}
          <div className="md:col-span-7 text-center md:text-left text-white order-2 md:order-1 mt-10 md:mt-0">
            <p className="uppercase text-sm tracking-widest text-blue-300 mb-4 font-semibold drop-shadow-md">
              Welcome to my world
            </p>
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-3 drop-shadow-lg">
              Hi, I’m <span className="text-blue-300">Christian Nievera</span>
            </h1>
            <h2 className="text-4xl font-bold mb-8 drop-shadow-md">a Web Developer.</h2>
            <div className="mt-6">
              <a
                href="#projects"
                className="inline-block border-2 border-blue-300 text-blue-300 font-semibold py-3 px-8 rounded-lg 
                  hover:bg-gradient-to-r hover:from-blue-300 hover:to-blue-700 hover:text-white
                  transition duration-300 shadow-md hover:shadow-lg"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Description Section */}
     <section
       id="about-description"
       className="w-full px-6 sm:px-12 md:px-20 pb-16 bg-gray-900 flex justify-center items-center"
       aria-label="More About Christian Nievera"
       style={{ minHeight: "60vh" }}
     >
       <div className="max-w-4xl text-center md:text-left">
         <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 pt-20 drop-shadow-md">
           About
         </h2>
         <p className="text-lg leading-relaxed mb-8 max-w-3xl mx-auto md:mx-0">
           I recently completed an intensive web development bootcamp where I gained hands-on experience building responsive, user-friendly websites. I’m excited to apply what I’ve learned and continue growing as a developer by tackling real-world projects.
         </p>

         <p className="text-blue-300 text-md leading-relaxed mb-8 max-w-3xl mx-auto md:mx-0 flex items-center justify-center md:justify-start gap-3">
           <span role="img" aria-label="rocket" className="text-2xl">
             🚀
           </span>
           Currently building on my full-stack skills with React, Node.js, and databases to create scalable and efficient web applications.
         </p>

         <blockquote className="text-gray-400 italic max-w-3xl mx-auto md:mx-0 border-l-4 border-blue-300 pl-6">
           <q className="not-italic leading-relaxed text-lg">
             “Change is the end result of all true learning.”
           </q>
           <footer className="mt-2 text-sm text-blue-300 font-semibold">— Leo Buscaglia</footer>
         </blockquote>
       </div>
     </section>


      {/* Certificates Section */}
      <section
        id="certificates"
        className="w-full px-6 sm:px-12 md:px-20 pb-32 bg-gray-900"
        aria-label="Certificates of Christian Nievera"
      >
        <div className="max-w-6xl mx-auto text-gray-300">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 pt-20 text-center drop-shadow-md">
            Certificates
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="flex flex-col items-center text-center cursor-pointer transform transition-transform duration-300 hover:scale-105"
                onClick={() => openModal(cert)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && openModal(cert)}
                aria-label={`View certificate: ${cert.title}`}
              >
                <img
                  src={cert.src}
                  alt={cert.alt}
                  className="object-contain mb-4 rounded-lg shadow-md w-76 h-76"
                  loading="lazy"
                />
                <p className="font-semibold text-blue-300">{cert.title}</p>
                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalOpen && currentCert && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 p-6"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={`Full view of certificate`}
        >
          <div
            className="max-w-4xl max-h-[90vh] rounded-lg shadow-lg p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Certificate Image */}
            <img
              src={currentCert.src}
              alt={currentCert.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
              loading="lazy"
            />
          </div>

          {/* Close Button - Outside the image container */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white text-4xl font-bold hover:text-red-600 focus:outline-none z-50"
            aria-label="Close certificate view"
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
}
