import RecipeList from "../../components/recipeList/RecipeList";
import ThemeSelector from "../../components/themeSelector/ThemeSelector";
import { useFetch } from "../../hooks/useFetch";
import "./Home.css";
function Home() {
  const { data, isPending, error } = useFetch("http://localhost:3000/recipes");
  return (
    <div className="home">
      <ThemeSelector />
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">در حال پردازش ...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}

export default Home;
