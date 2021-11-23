import "./App.css";
import { getMonth } from "./util";
function App() {
  console.table(getMonth());
  return (
    <>
      <div className="h-screen flex flex-columns">
        <CalenderHeader />
        <div className="flex flex-1">
          <SideBar />
        </div>
      </div>
    </>
  );
}

export default App;
