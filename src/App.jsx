import { useLazyQuery } from "@apollo/client";
import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import { GET_USER_DETAILS, QUERY_STATES } from "./constants";
import Response from "./components/Responses/Response";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [getUserDetails, { loading, error, data }] =
    useLazyQuery(GET_USER_DETAILS);
  const handleSubmit = () => {
    getUserDetails({ variables: { username: inputValue } });
  };
  return (
    <div className="w-full min-h-lvh flex flex-col justify-center items-center gap-8 bg-slate-900">
      <Logo />
      <h1 className="text-yellow-400 text-3xl  sm:text-5xl lg:text-6xl font-bold font-serif mt-[100px] sm:mt-0">
        Github User
      </h1>

      <QUERY_STATES.Provider value={{ loading, error, data }}>
        <Form
          inputValue={inputValue}
          handleSubmit={handleSubmit}
          setInputValue={setInputValue}
        />
        <Response />
      </QUERY_STATES.Provider>
    </div>
  );
}

export default App;
