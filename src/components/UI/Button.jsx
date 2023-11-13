const Button = (props) => {
  return (
    <button {...props} className={`${props.className} w-full text-lg font-bold`}>
      {props.children}
    </button>
  );
};

export default Button;
