import { Link } from "react-router-dom";

const Video = ({
  videoId = "og3J4GmEpC0",
  height = 580,
  ctaText = "Customize This Model",
  ctaLink = "/models",
  showBackToTop = true,
}) => {
  const scrollToTop = () => {
    const el = document.getElementById("page-top");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="p-0">
      <div className="container">
        <iframe
          width="100%"
          height={height}
          src={`https://www.youtube.com/embed/${videoId}?rel=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            to={ctaLink}
            className="bg-lightYellow text-white tracking-[-0.02em]
              font-helvetica-neue-bold px-10 pt-[15px] pb-[12px] md:text-lg
              hover:bg-green transition-colors"
          >
            {ctaText}
          </Link>

          {/* Back to Top */}
          {showBackToTop && (
            <button
              onClick={scrollToTop}
              className="block mx-auto mt-6 text-sm text-green
                underline underline-offset-4 hover:text-lightYellow
                transition-colors"
            >
              Back to top ↑
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Video;
