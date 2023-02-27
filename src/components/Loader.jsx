import "../css/Loader.css";

const Loader = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <body>

      <div className="container">
        <span class="ring"></span>
        <span class="ring"></span>
        <span class="ring"></span>
        <p>Loading.......</p>
      </div>
      </body>

    </div>
  );
};

export default Loader;
