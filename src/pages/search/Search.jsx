import "./Search.css";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import RecipeList from "../../components/recipeList/RecipeList";
function Search() {
  const queryString = useLocation().search; //gets use a string like ?q=something
  const queryParamas = new URLSearchParams(queryString);
  const query = queryParamas.get("q");
  const url = "http://localhost:3000/recipes?q=" + query;

  const { error, data, isPending } = useFetch(url);
  return (
    <div className="search-page">
      <h2 className="search-page-title">
        دستوراتی که شامل <span>{query}</span> می شوند
      </h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">در حال پردازش ...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}

export default Search;
