interface TextProps {
  text: string;
  name: string;
  position: string;
}

const Text = ({ text, name, position }: TextProps) => {
  return (
    <section className="max-w-[620px] relative left-[60px]">
      <h1 className="text-[35px] tracking-tighter text-dark-blue font-light">
        {text}
      </h1>
      <p className="text-xl text-grayish-blue mt-6">
        <span className="font-bold text-dark-blue">{name}</span> {position}
      </p>
    </section>
  );
};

export default Text;
