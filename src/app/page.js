import Image from "next/image";
import Home from "./home/page";
import Contact from "./contact/page";

export default function App() {
  return (
   <div>
      <Home />
      {/* <Contact className=" sm:hidden"/> */}
   </div>
  );
}
