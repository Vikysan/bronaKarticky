import Button from "./UI/Button"

const Controller = ({nextHandler,menuHandler}) => {
  return (
    <div className="grid grid-cols-2 h-10 w-72 mx-auto">
      <Button onClick={menuHandler} className="rounded-l-lg bg-red-700" >Menu</Button>
      <Button onClick={nextHandler} className="bg-green-700 rounded-r-lg">Next</Button>
    </div>
  )
}

export default Controller
