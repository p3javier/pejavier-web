const BioSummary = (props: { text: string }) => {
  return (
    <>
      <h2 className="text-white text-center text-3xl my-6">Javier Pérez</h2>
      <p className="text-white text-center">{props.text}</p>
    </>
  );
};

export default BioSummary;
