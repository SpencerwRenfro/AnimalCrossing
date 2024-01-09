import "./App.css";
import formBackground from "./images/assets/animal-crossing-wood-bg.png";
import background from "./images/assets/animal-crossing-bg.jpg";
function App() {
  return (
    <div style={{ backgroundImage: `url(${background})` }} className="h-screen">
      <div className="flex flex-col mx-auto pt-10">
        <form
          style={{ backgroundImage: `url(${formBackground})`, height: "400px" }}
          className="flex flex-col self-center w-1/2"
        >
          <div className="flex flex-row h-12 space-between w-full">
            <div className="basis-1/3">
              <p className="bg-yellow-200">Species</p>
            </div>
            <div className="basis-full">
              <p className="bg-white">Koala</p>
            </div>
          </div>
          <div className="flex flex-row h-12 space-between w-full">
            <div className="basis-1/3">
              <p className="bg-blue-200">Personality</p>
            </div>
            <div className="basis-full">
              <p className="bg-white">Normal</p>
            </div>
          </div>
          <div className="flex flex-row h-12 space-between w-full">
            <div className="basis-1/3">
              <p className="bg-red-200">Hobby</p>
            </div>
            <div className="basis-full">
              <p className="bg-white">Education</p>
            </div>
          </div>
          <div className="flex flex-row h-12 space-between w-full">
            <div className="basis-1/3">
              <p className="bg-green-200">Birthday</p>
            </div>
            <div className="basis-full">
              <p className="bg-white">October 15th, 1994</p>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
}

export default App;
