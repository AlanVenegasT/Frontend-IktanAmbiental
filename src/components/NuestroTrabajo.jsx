import { RModalImages } from "react-modal-images";

const navigation = {
  imagenes: [
    {
      small: "/blog/blog1.jpg",
      medium: "/blog/blog1.jpg",
      alt: "An alternate text for this image1",
    },
    {
      small: "/blog/blog1.jpg",
      medium: "/blog/blog1.jpg",
      alt: "An alternate text for this image2",
    },
    {
      small: "/blog/blog1.jpg",
      medium: "/blog/blog1.jpg",
      alt: "An alternate text for this image3",
    },
    {
      small: "/blog/blog1.jpg",
      medium: "/blog/blog1.jpg",
      alt: "An alternate text for this image4",
    },
    {
      small: "/blog/blog1.jpg",
      medium: "/blog/blog1.jpg",
      alt: "An alternate text for this image5",
    },
    {
      small: "blog/blog1.jpg",
      medium: "blog/blog1.jpg",
      alt: "An alternate text for this image6",
    },
  ],
};

const NuestroTrabajo = () => {
  return (
    <section className="container mx-auto px-5 sm:px-6 lg:px-8" id="ntrabajo">
      <h1 className="text-[#00963B] text-4xl font-semibold text-center py-12">
        Nuestro{" "}
        <span className="text-[#0C3858] border-b-4 border-[#9DCCB8] py-3">
          {" "}
          Trabajo{" "}
        </span>
      </h1>
      {/* Cards */}
      <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-8 lg:gap-x-8">
        {navigation.imagenes.map((item, i) => (
          <div key={i}>
            <RModalImages
              className={"w-full h-full object-cover"}
              hideDownloadButton={true}
              hideRotateButton={true}
              hideZoomButton={true}
              small={item.small}
              medium={item.medium}
              // large={"https://dummyimage.com/1020x800/000/aaa"}
              alt={item.alt}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default NuestroTrabajo;
