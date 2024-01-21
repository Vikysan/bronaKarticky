import Button from "./UI/Button"
import { TbArrowBigRightFilled,TbBaselineDensitySmall  } from "react-icons/tb";


const Controller = ({nextHandler,menuHandler,typeOfGame}) => {
let btnColor
  switch (typeOfGame) {
    case "true_or_false":
      btnColor="bg-red-600"
      break;
    case "which_is_better":
      btnColor="bg-green-700"
      break;
      case "questions":
      btnColor="bg-pink-950"
        break;
    default:

      break;
  }
  return (
    <div className="flex  space-x-1 w-full">
      <Button onClick={menuHandler} className={`${btnColor}  rounded-lg text-white`}><TbBaselineDensitySmall className="w-full h-10" /></Button>
      <Button onClick={nextHandler} className={`${btnColor}  rounded-lg text-white`}><TbArrowBigRightFilled className="w-full h-10"/></Button>
    </div>
  )
}

export default Controller
 