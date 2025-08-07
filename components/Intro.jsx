const Intro = ({ name }) => {
  return (
    <section className="intro p-0 relative -top-15">
      <div className="container">
        <div className="intro">
          <h2 className="text-marigold text-5xl mb-3 font-helvetica-neue-bold">{name}</h2>
        </div>
      </div>
    </section>
  );
};

export default Intro;