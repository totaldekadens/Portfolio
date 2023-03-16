const PresText = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  return (
    <>
      <p style={{ fontSize: 16, color: "white" }}>{question}</p>
      <p style={{ fontSize: 14, color: "white", marginBottom: 12 }}>
        {" "}
        {answer}
      </p>
    </>
  );
};

export default PresText;
