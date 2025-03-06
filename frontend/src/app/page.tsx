"use client";

import React from "react";
// import { useEffect } from "react";
// import ReactPlayer from "react-player";
import Header from "@/Components/Header";
import BotMiddle from "@/Components/Bot-Middle";
import Card from "@/Components/Card";
import { useContext } from "react";
import { Truecontext } from "@/Components/Povider";
import Moredown from "@/Components/Moredown";
import Footer from "@/Components/footer";

// import Video from "../../public/"
export default function Home() {

 
  const { show, setshow } = useContext(Truecontext)

  return (
    <div>
      <Header />

      <div className="relative">

      {show &&
          <div className="flex flex-row justify-end z-30 absolute top-0 right-0 " onMouseEnter={() => setshow(true)} onMouseLeave={() => setshow(false)}>
            <Card />
          </div>
        }
                <div className="z-10">
     *
      </div>
      </div>


      <BotMiddle />
      <div className="mt-10">
      <Moredown />
      </div>
      <div>
        <Footer />
        
      </div>
    </div>
  );
}
