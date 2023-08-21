interface ImgProps {
  src: string;
}

const Img = ({ src }: ImgProps) => {
  return (
    <section>
      <img
        src={`./${src}`}
        alt={src}
        className="w-[540px] h-[540px] object-cover rounded-md shadow-2xl lg:w-[252px] lg:h-[252px]"
      />
    </section>
  );
};

export default Img;
