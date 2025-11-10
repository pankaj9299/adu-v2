const Intro = ({ name }) => {
  return (
    <section className="intro p-0 relative md:-top-15">
      <div className="container">
        <div className="intro max-w-[435px]">
          <h2 className="text-marigold text-3xl mb-3 font-helvetica-neue-bold">{name}</h2>
        </div>
      </div>
    </section>
  );
};

export default Intro;