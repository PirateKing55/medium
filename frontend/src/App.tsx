import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp } from "./pages";
import { SignIn } from "./pages";
import { Blog } from "./pages";
import { Blogs } from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
