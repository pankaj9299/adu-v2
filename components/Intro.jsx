const Intro = ({ name }) => {
  return (
    <section className="intro p-0">
      <div class="container">
        <div class="intro">
          <h2 class="text-secondary-gold text-[68px] mb-3 font-normal">{name}</h2>
        </div>
      </div>
    </section>
  );
};

export default Intro;