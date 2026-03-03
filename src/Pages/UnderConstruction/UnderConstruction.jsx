import React from "react";
import Loader from "../../Components/Loaders/Loader";

const UnderConstruction = () => {
  return (
    <div>
      <div className="h-screen flex items-center justify-center">
        <Loader />
      </div>
      {/* <h1 className="text-center text-2xl font-bold mt-4" >Site Under Development</h1> */}

    </div>
  );
};

export default UnderConstruction;
