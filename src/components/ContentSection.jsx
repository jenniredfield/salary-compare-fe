export const ContentSection = ({ title, content }) => {
  return (
    <div className="max-w-[400px] text-justify">
      <h2 className="font-bold text-xl mb-6">{title}</h2>
      <p className="max-w-[600px] mb-10">{content}</p>
    </div>
  );
};
