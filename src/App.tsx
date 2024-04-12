import { useState } from "react";
import { useSearch } from "./hooks/useSearch";
import { Person } from "./models/Person";
import InputSUI from "./components/InputSui";
import Container from "./components/Container";
import CardItem from "./components/CardItem";
import "./styles/container.css";
import "./styles/main.css";
import CardGroup from "semantic-ui-react/dist/commonjs/views/Card/CardGroup";
import MessageSUI from "./components/MessageSUI";
import { REQUEST_STATUS } from "./models/RequestStatus";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<Array<Person>>();
  const [status, setStatus] = useState<REQUEST_STATUS>(REQUEST_STATUS.NONE);

  const onSuccess = ({ data }: { data: Array<Person> }) => {
    if (data) setResults(data);
  };
  const { isLoading, refetch, isFetching } = useSearch(
    { q: searchTerm },
    onSuccess,
    (e: any) => <MessageSUI meesage="Oops some error occurred! " />,
    false
  );
  const handleSerach = async () => {
    setStatus(REQUEST_STATUS.NONE);
    setResults(undefined);
    if (searchTerm === "") return;
    const response = await refetch();

    const responseStatus = response.status;
    if (isFetching) setStatus(REQUEST_STATUS.LOADING);
    if (responseStatus === "error") setStatus(REQUEST_STATUS.ERROR);

    if (response.status === "success") {
      setSearchTerm("");
    }
  };
  return (
    <Container className={"main__warpper"}>
      <div className="search_input__wrapper">
        <InputSUI
          placeholder="Search..."
          onChange={(e) => setSearchTerm(e.target.value)}
          handleSerach={handleSerach}
          name="Search"
          value={searchTerm}
        />
      </div>

      <CardGroup className="result__wrapper">
        {results &&
          results.length > 0 &&
          results.map(({ name, address, age, phone, portrait }, idx) => {
            return (
              <CardItem
                key={idx}
                name={name}
                age={age}
                address={address}
                phone={phone}
                portrait={portrait}
              />
            );
          })}
      </CardGroup>
      {results && results.length === 0 ? (
        <MessageSUI meesage="No results, please review your search or try a different one" />
      ) : (
        ""
      )}

      {isFetching && <LoadingSpinner />}
      {status === REQUEST_STATUS.ERROR && (
        <MessageSUI meesage="Oops some error occurred! " />
      )}
    </Container>
  );
}

export default App;
