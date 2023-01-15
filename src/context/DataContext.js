// React hooks
import { createContext, useState, useEffect } from "react";

// Custom react hooks
import useAxiosFetch from "../hooks/useAxiosFetch";

// Empty object to start
const DataContext = createContext({});

// DataProvider provides data to different components ({ children })
// Data will be available to children of DataProvider
export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const { data, fetchError, isLoading } = useAxiosFetch(
    "http://localhost:3500/posts"
  );

  useEffect(() => {
    setPosts(data);
  }, [data]);

  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResults(filteredResults.reverse());
  }, [posts, search]);
  
  return (
    // Put different state/props in the DataContext.Provider
    // DataProvider provides access as we use the 'useContext' hook
    <DataContext.Provider
      value={{
        search,
        setSearch,
        searchResults,
        fetchError,
        isLoading,
        posts,
        setPosts
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
