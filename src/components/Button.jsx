/* eslint-disable react/prop-types */
import { BsArrowReturnRight  } from "react-icons/bs";

function Button({title = "Start a Project"}) {
  return (
    <div className=" w-36 h-8 px-3 py-[3px] bg-white rounded-full text-black flex items-center justify-between">
        <span className=" text-sm tracking-none  font-normal"> {title} </span>
        <BsArrowReturnRight style={{width:"12px"}} />
    </div>
  )
}

export default Button;
