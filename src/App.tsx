import {Counter} from "./timer";
import ToDo from "./todo";
import Assistant from "./assistent";


function App() {
  return (
    <div>
    <div className="min-h-screen bg-gradient-to-br from slate-950 via-purple-950 to-slate-950">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-stretch-extra-condensed text-5xl text-white font-bold text-center mb-8">
          Nerdy Neighbor
        </h1>

        <div className="grid gap-6">
          <Counter />
          <ToDo />
          <Assistant />
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;