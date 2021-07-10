import React, { useState } from "react";

import "./App.css";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  const pages = [<Homepage></Homepage>, <Contact></Contact>];
  const [page, setPage] = useState(pages[0]);
  return (
    <div className="App">
      <Nav pages = {pages} setPage = {setPage}></Nav>
      {page}
      <Footer></Footer>
    </div>
  );
}

export default App;
