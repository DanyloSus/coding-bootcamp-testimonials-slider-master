interface TextProps {
  text: string;
  name: string;
  position: string;
}

const Text = ({ text, name, position }: TextProps) => {
  return (
    <section className="max-w-[620px] lg:w-full lg:left-0 relative left-[60px] lg:text-center lg:items-center lg:justify-center lg:mt-6">
      <img
        src="./pattern-quotes.svg"
        alt="pattern quotes"
        className="absolute left-[100px] -top-[60px] lg:top-0 lg:h-[56.25px] object-cover lg:relative lg:left-0 lg:mx-auto"
      />
      <h1 className="text-[35px] tracking-tighter text-dark-blue font-light lg:text-[19.7px] lg:leading-[24px] lg:relative lg:-top-[40px] lg:px-9">
        {text}
      </h1>
      <p className="text-xl text-grayish-blue mt-6 lg:flex flex-col lg:relative lg:-top-[40px] lg:text-sm">
        <span className="font-bold text-dark-blue">{name}</span> {position}
      </p>
    </section>
  );
};

export default Text;
