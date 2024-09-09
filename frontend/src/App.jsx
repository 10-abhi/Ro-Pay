
import { BrowserRouter , Routes , Route } from "react-router-dom"
import { Dashboard } from "./pages/dashboard"
import { Signup } from "./pages/signup"
import { Signin } from "./pages/signin"
import { Send } from "./pages/sendMoney"
// import { PayDone } from "./pages/payDone"

function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="" element={<Signup/>}> </Route>
          <Route path="signin" element={<Signin/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}> </Route>
          <Route path="/send" element={<Send/>}></Route> 
          {/* <Route path="/success" element={<PayDone/>}> </Route> */}
        </Routes>
      </BrowserRouter>  
    </div>

    
  )
}

export default App
