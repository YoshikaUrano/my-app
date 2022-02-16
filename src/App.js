import { useEffect, useState } from "react";
import Select from "./components/Select";
import Table from "./components/Table";
import "./App.css";

const App = () => {
  const observation = [
    { city: "Tokyo" },
    { city: "London" },
    { city: "Los Angeles" },
    { city: "Paris" },
    { city: "New York" },
    { city: "Sydney" },
  ];
  const [site, setSite] = useState(observation[0]);
  const [loading, setLoading] = useState(true);
  const [apiData, setApiData] = useState(
    `https://api.openweathermap.org/data/2.5/weather?q=${observation[0]}&appid=efa43bf6c58851a8866774ec9dcf56de&units=metric`
  );
  const HandleChange = (e) => SelectSite(e.target.value);
  const SelectSite = (value) => {
    const pos = observation.map((site) => site.city).indexOf(value);
    setSite(observation[pos]);
  };
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${site.city}&appid=efa43bf6c58851a8866774ec9dcf56de&units=metric`
    )
      .then((res) => res.json())
      .then((result) => {
        setApiData(result);
        setLoading(false);
      });
  }, [site]);
  if (loading) {
    return <></>;
  } else {
    return (
      <div className="app">
        <div>
          <Select HandleChange={HandleChange} />
          <Table data={apiData} />
        </div>
      </div>
    );
  }
};
export default App;