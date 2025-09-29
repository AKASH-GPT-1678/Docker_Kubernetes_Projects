"use client";

import React from "react";
import Header from "@/Components/Header";
import BotMiddle from "@/Components/Bot-Middle";
import Card from "@/Components/Card";
import { useContext } from "react";
import { Truecontext } from "@/Components/Povider";
import Moredown from "@/Components/Moredown";
import Footer from "@/Components/footer";
import Chatroom from "@/Components/Chatroom";
import { ShowChat } from "@/Components/Povider";
import { Formofaci } from "@/Components/Servicedrop";
import { Button } from "@/Components/ui/button";
export default function Home() {


  const { show, setshow } = useContext(Truecontext)
  const { showchat, setShow } = useContext(ShowChat)
  const [report , setreport] = React.useState(false)



  return (
    <div>
      <Header chat={showchat} />

      <div className="relative">

        {show &&
          <div className="flex flex-row justify-end z-30 absolute top-0 right-0 " onMouseEnter={() => setshow(true)} onMouseLeave={() => setshow(false)}>
            <Card />
          </div>
        }
        <div>
          {
            report && <Formofaci/>
          }
        </div>

        {showchat ?

          <div className=" flex flex-row justify-end z-20 absolute top-0 right-0 w-full ">
            <Chatroom />
          </div>
          :
          null
        }
        <div>
          <Button onClick={() =>setreport(!report)}>chnage</Button>
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
