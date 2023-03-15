const Presentation = () => {
  return (
    <div
      style={{ minHeight: "70vh" }}
      className="px-5 text-white flex justify-center items-start sm:items-center"
    >
      <div className="flex basis-1/2 px-10">
        <img src="question.png" alt="en bild på mig själv" />
      </div>
      <div className="flex basis-1/2 px-10 flex-col">
        {" "}
        <h2>Title</h2>
        <p>En som random texts</p>
      </div>
    </div>
  );
};
export default Presentation;
