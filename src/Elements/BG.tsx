const BG = () => {
  return (
    <div>
      <img
        src="./pattern-bg.svg"
        alt="pattern bg"
        className="absolute right-[72px] bottom-[92px] lg:right-[30px] lg:top-[25px] lg:w-[320px] lg:object-cover lg:left-1/2 lg:transform lg:-translate-x-1/2"
      />
      <img
        src="./pattern-curve.svg"
        alt="pattern curve"
        className="absolute left-0 bottom-0"
      />
    </div>
  );
};

export default BG;
