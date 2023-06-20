import { Routes,Route } from "react-router";
import Homepage from "./Components/Home";
import RoomPage from "./Vedio/Room";

function App() {
  return (
    <div >
<Routes>
  <Route path="/" element={<Homepage/>}/>

  <Route path="/Room/:RoomId" element={<RoomPage/>}/>

</Routes>

    </div>
  
  );
}

export default App;
