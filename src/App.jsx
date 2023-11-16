import { useState, useEffect, useRef } from "react";
import Card from "./components/Card";
import whichIsBetter from "./store/whichIsBetter.json"
import trueOrFalse from "./store/trueOrFalse.json"
import questions from "./store/questions.json"
import Controller from "./components/Controller";
import ModalMenu from "./components/ModalMenu";

export default function App() {
  const modalMenuRef = useRef()

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
      <div className="grid grid-cols-1  gap-2  w-full ">
        <ModalMenu ref={modalMenuRef} gameChangeHandler={gameChangeHandler} />
        <Card type={typeOfGame} content={[deck[0], deck[1]]} />
        <Controller nextHandler={nextHandler} menuHandler={menuHandler} typeOfGame={typeOfGame} />
    </div>
  );
}
