export const Button = ({ onClick, children, type = "button" }) => {
  return (
    <button
      className="bg-purple-700 text-white px-6 py-2 rounded-md"
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
