
import { BrowserRouter , Routes , Route } from "react-router-dom"
import { Dashboard } from "./pages/dashboard"
import { Signup } from "./pages/signup"
import { Signin } from "./pages/signin"
import { Send } from "./pages/sendMoney"

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>} > </Route>
          <Route path="signin" element={<Signin/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}> </Route>
          <Route path="/send" element={<Send/>}></Route> 
        </Routes>
      </BrowserRouter>  
    </div>
  )
}

export default App
