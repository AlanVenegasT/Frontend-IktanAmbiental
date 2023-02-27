import "../css/Loader.css";

const Loader = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="container">
        <div className="ring"></div>
        <div className="ring"></div>
        <div className="ring"></div>
      </div>
    </div>
  );
};

export default Loader;
