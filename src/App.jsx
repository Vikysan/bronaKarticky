import { useState, useEffect, useRef } from "react";
import Card from "./components/Card";
import whichIsBetter from "./store/whichIsBetter.json"
import trueOrFalse from "./store/trueOrFalse.json"
import questions from "./store/questions.json"
import Controller from "./components/Controller";
import ModalMenu from "./components/ModalMenu";
import Help from "./components/Help";

export default function App() {
  const modalMenuRef = useRef()
  const modalHelpRef = useRef()

  const [deck, setDeck] = useState(whichIsBetter);
  const [starterDeck, setStarterDeck] = useState(whichIsBetter)
  const [typeOfGame, setTypeOfGame] = useState(null)

  useEffect(()=>{
    if (!typeOfGame) {
      modalMenuRef.current.open()
    }
  },[])

  useEffect(() => {
    setDeck(starterDeck)
  }, [starterDeck])

  const nextHandler = () => {
    setDeck((prevDeck) => {
      if (prevDeck.length > 2) return prevDeck.slice(2);
      return starterDeck;
    });
  };

  const menuHandler = () => {
    modalMenuRef.current.open()
  }

  const openHelpHandler =()=>{
    // console.log("jo")
    modalHelpRef.current.open()
  }
  const gameChangeHandler = (newTypeOfGame) => {
    setTypeOfGame(newTypeOfGame);
    switch (newTypeOfGame) {
      case "true_or_false":
        setStarterDeck(trueOrFalse);
        break;
      case "which_is_better":
        setStarterDeck(whichIsBetter);
        break;
        case "questions":
          setStarterDeck(questions);
          break;
      default: 

        break;
    }
    modalMenuRef.current.close()
  }

  return (
      <div className="flex flex-col space-y-1 w-screen justify-center items-center bg-[#7dd3fc] min-h-screen ">
        <ModalMenu ref={modalMenuRef} gameChangeHandler={gameChangeHandler} />
        <Help  ref={modalHelpRef}/>
        <div className="min-w-[20rem] max-w-[25rem] space-y-1">

        <Card type={typeOfGame} content={[deck[0], deck[1]]} openHelpHandler={openHelpHandler}/>
        <Controller nextHandler={nextHandler} menuHandler={menuHandler} typeOfGame={typeOfGame}/>
        </div>
    </div>
  );
}
