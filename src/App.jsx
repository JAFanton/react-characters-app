import { Route, Routes } from "react-router-dom"
import Homepage from "./components/Homepage"

function App() {

  return (
    <>
      <h1>React Characters App</h1>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<p>This is the About page</p>} />
      </Routes>
    </>
  )
}

export default App
