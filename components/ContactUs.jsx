import { LazyLoadImage } from "react-lazy-load-image-component";

const ContactUs = () => {
  return (
    <section className="contact-us">
      <div className="container">
        <div className="form-wrapper">
          <h1
            className="font-arial font-normal text-dark-green mb-3 tracking-[-0.05em]
              text-4xl sm:text-5xl md:text-6xl lg:text-[85px]"
          >
            Clarity Starts Here
          </h1>
          <h2
            className="font-helvetica-neue-bold font-normal text-marigold mb-10
              text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[-0.02em]"
          >
            Book a Discovery Call with our team.
          </h2>
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/VlpAeKAGDcNYJN4OfM7r"
            width="100%"
            height="800px"
            style={{ border: "none" }}
          />
        </div>
        <div className="image-wrapper flex gap-20 sm:flex-row flex-col items-center">
          <div>
            <LazyLoadImage
              src="/image/contact/adu1.png"
              alt="ADU 1"
              width="100%"
              height="100%"
              style={{ border: "none" }}
            />
          </div>
          <div>
            <LazyLoadImage
              src="/image/contact/adu2.png"
              alt="ADU 1"
              width="100%"
              height="100%"
              style={{ border: "none" }}
            />
          </div>
          <div>
            <LazyLoadImage
              src="/image/contact/adu3.png"
              alt="ADU 1"
              width="100%"
              height="100%"
              style={{ border: "none" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
