import Text from "./Text";
import Img from "./Img";
import Changer from "./Changer";
import useIdStore from "../store";

interface CardProps {
  text: string;
  name: string;
  position: string;
  src: string;
  id: number;
}

const Card = ({ text, name, position, src, id }: CardProps) => {
  const { activeId } = useIdStore((s) => s);

  return (
    <div
      className="flex justify-center items-center absolute transition-opacity"
      style={
        activeId !== id ? { opacity: 0, zIndex: 0 } : { opacity: 1, zIndex: 10 }
      }
    >
      <Text text={text} name={name} position={position} />
      <div>
        <Img src={src} />
        <Changer />
      </div>
    </div>
  );
};

export default Card;
