import { AiFillEyeInvisible } from "react-icons/ai";
import Animacao from "./animacao";

const TopB = () => {
    return(
        <div className=" drop-shadow-xl bg-neutral-800 fixed pl-24 pt-3 pb-3 text-white flex flex-row w-full">
            <div className=" mr-1 ml-2 my-auto">
            <AiFillEyeInvisible size= '40' />
            </div>
            <div className=" mr-1 ml-2 pb-1 my-auto text-xl font-normal">
            <Animacao />
            </div>
            <div className=  " text-neutral-500 absolute right-5 pt-2 pb-3">
            <p>#privacyaware</p>
            </div>
        </div>
    );
};

export default TopB