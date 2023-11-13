import Button from "./UI/Button"

const Controller = ({nextHandler,menuHandler}) => {
  return (
    <div className="flex my-2 h-10">
      <Button onClick={menuHandler} className="rounded-l-lg bg-red-700" >Menu</Button>
      <Button onClick={nextHandler} className="bg-green-700 rounded-r-lg">Next</Button>
    </div>
  )
}

export default Controller
