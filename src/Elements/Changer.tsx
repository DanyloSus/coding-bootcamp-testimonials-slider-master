import useIdStore from "../store";

const Changer = () => {
  const { nextId, pastId } = useIdStore((s) => s);

  return (
    <div className="h-14 w-[112px] bg-white rounded-full relative bottom-7 shadow-lg left-[52px] flex items-center justify-around overflow-hidden">
      <div
        className="w-1/2 flex justify-around items-center hover:bg-grayish-blue transition-colors h-full"
        onClick={pastId}
      >
        <img src="./icon-prev.svg" alt="icon prev" />
      </div>
      <div
        className="w-1/2 flex justify-around items-center hover:bg-grayish-blue transition-colors h-full"
        onClick={nextId}
      >
        <img src="./icon-next.svg" alt="icon next" />
      </div>
    </div>
  );
};

export default Changer;
