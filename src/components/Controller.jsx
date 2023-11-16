import Button from "./UI/Button"

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
    <div className="grid grid-cols-2 h-10 w-72 mx-auto gap-1">
      <Button onClick={menuHandler} className={`${btnColor}  rounded-lg text-white`}>Menu</Button>
      <Button onClick={nextHandler} className={`${btnColor}  rounded-lg text-white`}>Next</Button>
    </div>
  )
}

export default Controller
