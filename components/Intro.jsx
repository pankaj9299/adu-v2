const Intro = ({ name }) => {
  return (
    <section className="intro p-0">
      <div className="container">
        <div className="intro">
          <h2 className="text-dark-green text-[68px] mb-3 font-normal">{name}</h2>
        </div>
      </div>
    </section>
  );
};

export default Intro;