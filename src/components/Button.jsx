export const Button = ({
  onClick,
  children,
  type = "button",
  active = true,
}) => {
  return (
    <button
      className={`bg-purple-700 text-white px-6 py-4 rounded-md w-full hover:opacity-50 transition-all duration-200 ${
        active ? "bg-purple-700" : "bg-purple-400"
      }`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
