import BG from "./Elements/BG";
import Card from "./Elements/Card";

const App = () => {
  return (
    <main className="h-max lg:overflow-x-hidden">
      <BG />
      <div className="flex min-h-screen w-screen justify-center items-center relative z-10 lg:justify-start lg:items-start">
        <Card
          text="“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”"
          name="Tanya Sinclair"
          position="UX Engineer"
          src="image-tanya.jpg"
          id={0}
        />
        <Card
          text="“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”"
          name="John Tarkpor"
          position="Junior Front-end Developer"
          src="image-john.jpg"
          id={1}
        />
      </div>
    </main>
  );
};

export default App;
