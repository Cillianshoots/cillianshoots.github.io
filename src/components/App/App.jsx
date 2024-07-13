import { useState } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Corporate from "../../assets/images/corporate";
import Weddings from "../../assets/images/weddings";
import About from "../About/About";
import Film from "../Film/Film";
import Gallery from "../Gallery/Gallery";
import Header from "../Header/Header";
import Landing from "../Landing/Landing";
import Modal from "../Modal/Modal";
import ModalContext from "../Modal/ModalContext";
import VideoModal from "../VideoModal/VideoModal";
import VideoModalContext from "../VideoModal/VideoModalContext";
import "./App.css";
import SubLanding from "../SubLanding/SubLanding";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/weddings/gallery",
      element: (
        <>
          <Header prefix="weddings" />
          <Gallery images={Weddings} />
        </>
      ),
    },
    {
      path: "/corporate/gallery",
      element: (
        <>
          <Header prefix="corporate" />
          <Gallery images={Corporate} />
        </>
      ),
    },
    {
      path: "/weddings",
      element: (
        <>
          <Header prefix="weddings" />
          <SubLanding src={Weddings[7]} prefix={"weddings"} />
        </>
      ),
    },
    {
      path: "/corporate",
      element: (
        <>
          <Header prefix="corporate" />
          <SubLanding src={Corporate[4]} prefix={"corporate"} />
        </>
      ),
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "/weddings/film",
      element: (
        <>
          <Header prefix="weddings" />
          <Film />
        </>
      ),
    },
    {
      path: "/corporate/film",
      element: (
        <>
          <Header prefix="corporate" />
          <Film />
        </>
      ),
    },
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ]);

  const [modalSrc, setModalSrc] = useState(null);
  const [videoModalSrc, setVideoModalSrc] = useState(null);

  return (
    <>
      <VideoModalContext.Provider value={{ videoModalSrc, setVideoModalSrc }}>
        <ModalContext.Provider value={{ modalSrc, setModalSrc }}>
          <VideoModal />
          <Modal />
          <RouterProvider router={router} />
        </ModalContext.Provider>
      </VideoModalContext.Provider>
    </>
  );
}

export default App;
