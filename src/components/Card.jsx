




const Card = ({ type, content }) => {
  if (type === "which_is_better") {
    return (
      <div className="bg-white rounded-lg    shadow-2xl h-70 p-4">
        <div className="bg-green-200 p-2 rounded-lg ">
          <div className="divide-y divide-green-700 w-12">
            <h2 className="text-xl font-bold border-solid border-c whitespace-nowrap">{content[0][0]?.word}</h2>
            <h2 className="text-xl font-bold whitespace-nowrap">{content[0][1]?.word}</h2>
          </div>
          <div className="border-s-2 border-green-700 px-1 mb-10 text-xs">
            <p className="text-green-700"> {content[0][0]?.translation}</p>
            <p className="text-green-700"> {content[0][1]?.translation}</p>
          </div>
          <div className="divide-y divide-green-700 w-12">
            <h2 className="text-xl font-bold border-solid border-c whitespace-nowrap">{content[1][0]?.word}</h2>
            <h2 className="text-xl font-bold whitespace-nowrap">{content[1][1]?.word}</h2>
          </div>
          <div className="border-s-2 border-green-700 px-1 mb-20 text-xs">
            <p className="text-green-700"> {content[1][0]?.translation}</p>
            <p className="text-green-700"> {content[1][1]?.translation}</p>
          </div>
        </div>

        <div className="bg-green-700 rounded-lg p-2 mt-2">
          <h3 className="text-white text-center">Co je lepší - WHICH IS BETTER</h3>
        </div>
      </div>
    );
  }
  if (type === "true_or_false") {
    return (
      <div className="bg-white rounded-lg shadow-2xl  h-70 p-4">
        <div className="bg-red-100 p-2 rounded-lg">
          <h2 className="text-xl font-bold mb-4">{content[0].sentence}</h2>
            <p className="text-red-600 border-solid border-s-2 border-red-600 pl-2 text-xs mb-8">{content[0].translation}</p>  
          <h2 className="text-xl font-bold mb-4">{content[1].sentence}</h2>
          <p className="text-red-600 border-solid border-s-2 border-red-600 pl-2 text-xs mb-8">{content[1].translation}</p>
        </div>
        <div className="bg-red-600 rounded-lg p-2 mt-2">
          <h3 className="text-white text-center">pravda/lež - TRUE/FALSE</h3>
        </div>
      </div>
    );
  }
  return ""
};

export default Card;
