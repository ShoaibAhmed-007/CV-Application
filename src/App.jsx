import { useEffect, useState } from "react";
import "./App.css";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Info from "./Components/Info";
import CvDisplay from "./Components/CvDisplay";

function App() {
  const [cvState, setCvState] = useState({
    name: "",
    email: "",
    phone: "",
    institute: "",
    degree: "",
    date: "",
    company: "",
    position: "",
    responsibility: "",
    dateFrom: "",
    dateTo: "",
  });

  const [showCV, setShowCV] = useState({});

  const handleSubmit = () => {
    setShowCV(cvState);
    setCvState({
      name: "",
      email: "",
      phone: "",
      institute: "",
      degree: "",
      date: "",
      company: "",
      position: "",
      responsibility: "",
      dateFrom: "",
      dateTo: "",
    });
  };

  const handleEdit = () => {
    setCvState(showCV);
  };

  useEffect(() => {
    console.log(cvState);
  }, [cvState]);

  return (
    <>
      <header className="w-full flex justify-center items-center py-6 bg-gray-800 shadow-md">
        <h1 className="text-4xl text-white font-bold">CV Application</h1>
      </header>
      <main className="container mx-auto py-10 px-4">
        <div className="flex flex-col lg:flex-row lg:justify-around items-center mb-10 w-full">
          <h2 className="text-2xl font-semibold text-gray-800">Form</h2>
          <h2 className="text-2xl font-semibold text-gray-800">CV</h2>
        </div>
        <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg p-8">
          <div className="flex flex-col w-full lg:w-1/2 gap-6 border border-2 border-black p-2 rounded-xl">
            <Info setForm={setCvState} form={cvState} />
            <Education setForm={setCvState} form={cvState} />
            <Experience setForm={setCvState} form={cvState} />
            <div className="flex gap-2 mt-6">
              <button
                className="w-full h-10 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                onClick={handleSubmit}
              >
                Submit
              </button>
              <button
                className="w-full h-10 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                onClick={handleEdit}
              >
                Edit
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-6 mt-10 lg:mt-0 lg:ml-10 border border-2 border-black p-2 rounded-xl">
            <CvDisplay cv={showCV} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
