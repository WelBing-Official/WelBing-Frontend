import {BrowserRouter, Routes, Route} from "react-router-dom"
import WaitList from "./pages/waitlist"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WaitList />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
