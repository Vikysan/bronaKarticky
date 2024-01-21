const CardCover = ({ children, brightColor, darkColor, textFooter }) => {
  return (
    <div className="bg-white rounded-lg    shadow-2xl  p-4 min-w-[20rem] max-w-[25rem] ">
      <div className={`p-2 rounded-lg ${brightColor} h-[34rem] px-5 pt-5`}>
      {children}
      </div>
      <div className={`p-2 rounded-lg mt-2 ${darkColor}`}>
        <h3 className="text-white text-center">{textFooter}</h3>
      </div>
    </div>
  )
}
  
const Card = ({ type, content }) => {
  if (type === "which_is_better") {
    return (
      <CardCover brightColor="bg-green-200" darkColor="bg-green-700" textFooter="Co je lepší - WHICH IS BETTER">
          <div className="divide-y divide-green-700 w-12">
            <h2 className="text-2xl font-bold border-solid border-c whitespace-nowrap ">{content[0][0]?.word}</h2>
            <h2 className="text-2xl font-bold whitespace-nowrap">{content[0][1]?.word}</h2>
          </div>
          <div className="border-s-2 border-green-700 px-1  text-xs mb-3 w-[18rem]">
            <p className="text-green-700"> {content[0][0]?.translation}</p>
            <p className="text-green-700"> {content[0][1]?.translation}</p>
          </div>
          <div className="divide-y divide-green-700 w-12">
            <h2 className="text-2xl font-bold border-solid border-c whitespace-nowrap">{content[1][0]?.word}</h2>
            <h2 className="text-2xl font-bold whitespace-nowrap">{content[1][1]?.word}</h2>
          </div>
          <div className="border-s-2 border-green-700 px-1  text-xs">
            <p className="text-green-700"> {content[1][0]?.translation}</p>
            <p className="text-green-700"> {content[1][1]?.translation}</p>
          </div>
      </CardCover>
    );
  }


  if (type === "true_or_false") {
    return (
      <CardCover brightColor="bg-red-100" darkColor="bg-red-600" textFooter="pravda/lež - TRUE/FALSE">
          <h2 className="text-xl font-bold mb-4">{content[0].sentence}</h2>
          <p className="text-red-600 border-solid border-s-2 border-red-600 pl-2 text-xs mb-8">{content[0].translation}</p>
          <h2 className="text-xl font-bold mb-4">{content[1].sentence}</h2>
          <p className="text-red-600 border-solid border-s-2 border-red-600 pl-2 text-xs mb-8">{content[1].translation}</p> 
      </CardCover>
    );
  }

  if (type === "questions") {
    return (
      <CardCover brightColor="bg-pink-100" darkColor="bg-pink-950" textFooter="otázky - QUESTIONS">
          <h2 className="text-xl font-bold mb-4">{content[0].sentence}</h2>
          <p className="text-pink-950 border-solid border-s-2 border-pink-950 pl-2 text-xs mb-8">{content[0].translation}</p>
          <h2 className="text-xl font-bold mb-4">{content[1].sentence}</h2>
          <p className="text-red-950 border-solid border-s-2 border-pink-950 pl-2 text-xs mb-8">{content[1].translation}</p> 
      </CardCover>
    );
  }
  return ""
};

export default Card;
