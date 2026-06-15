import {Counter} from "./timer";
import ToDo from "./todo";
import Assistant from "./assistent";


function App() {
  return (
    <div className="min-h-screen bg-[url(/src/assets/images.jpg)]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8">
          Nerdy Neighbor
        </h1>

        <div className="grid gap-6">
          <Counter />
          <ToDo />
          <Assistant />
        </div>
      </div>
    </div>
  );
}

export default App;