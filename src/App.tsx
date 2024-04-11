import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useSearch } from "./hooks/useSearch";
import { Person } from "./models/Person";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState<Array<Person>>([]);

  const onSuccess = ({ data }: { data: Array<Person> }) => {
    if (data) setData(data);
  };
  const { refetch } = useSearch(
    { q: searchTerm },
    onSuccess,
    (e: any) => console.log(e),
    false
  );
  const handleSerach = () => {
    refetch();
  };

  return (
    <div className="App">
      <input type="text" onChange={(e) => setSearchTerm(e.target.value)} />
      <button onClick={handleSerach}>Search...</button>
      {data.length &&
        data.map(({ name, address }) => {
          return (
            <>
              <h1>{name}</h1>
              <h1>{address}</h1>
            </>
          );
        })}
    </div>
  );
}

export default App;
