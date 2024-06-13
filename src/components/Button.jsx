export const Button = ({ onClick, children, type = "button" }) => {
  return (
    <button
      className="bg-purple-700 text-white px-6 py-4 rounded-md w-full hover:opacity-50 transition-all duration-200"
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
