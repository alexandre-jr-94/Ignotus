import { AiTwotoneHome, AiOutlineGlobal } from "react-icons/ai";
import { GiFingerPrint, GiCookie } from "react-icons/gi";

const Barralado = () => {
    return (
      <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-neutral-700 shadow-lg">
            <a className=" bg-neutral-700 mx-auto py-3 px-2 mt-3 hover:ml-1 text-center text-white hover:bg-gradient-to-r from-blue-900 to-neutral-700 rounded " href='#'> <AiTwotoneHome size="28" /> </a>
            <div className="my-5"></div>
            <a className=" bg-neutral-700 mx-auto py-3 px-2 mt-3 hover:ml-1 text-center text-white hover:bg-gradient-to-r from-blue-900 to-neutral-700 rounded " href='#Extensao'> <AiOutlineGlobal size="28" /></a>
            <a className=" bg-neutral-700 mx-auto py-3 px-2 mt-3 hover:ml-1 text-center text-white hover:bg-gradient-to-r from-blue-900 to-neutral-700 rounded " href='#cookies'> <GiCookie size="28"/> </a>
            <a className=" bg-neutral-700 mx-auto py-3 px-2 mt-3 hover:ml-1 text-center text-white hover:bg-gradient-to-r from-blue-900 to-neutral-700 rounded " href='#fingerprint'> <GiFingerPrint size="28" /></a>

        </div>
     );
};



export default Barralado

