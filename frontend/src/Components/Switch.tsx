import React from "react";

const SwitchButton = () => {
    const [firstdiv, setfirstdiv] = React.useState("bg-blue-300");
    const [seconddiv, setseconddiv] = React.useState("ml-auto");
  
    const Onoff = () => {
      if (firstdiv === "bg-blue-300") {
        setfirstdiv("bg-gray-400");
      } else {
        setfirstdiv("bg-blue-300");
      }
  
      if (seconddiv == "ml-auto") {
        setseconddiv("ml-0");
      } else {
        setseconddiv("ml-auto");
      }
    };
  
    return (
      <div>
   
  
        <div onClick={Onoff}>
          <div
            className={`
         rounded-lg h-[30px] w-[60px] bg-amber-300 cursor-pointer  mt-10 ml-10
         ${firstdiv}
        `}
          >
            <div className={`rounded-full h-full w-[30px] bg-blue-500 ${seconddiv} `}></div>
          </div>
     
        </div>
      </div>
    );
  };
  
  export default SwitchButton;
  