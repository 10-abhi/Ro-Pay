
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup"></Route>
          <Route path="signin"></Route>
          <Route path="/dashboard"> </Route>
          <Route path="/send"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
