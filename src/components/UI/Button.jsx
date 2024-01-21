const Button = (props) => {
  return (
    <button {...props} className={`${props.className} w-full text-lg font-bold hover:text-white`}>
      {props.children}
    </button>
  );
};

export default Button;
