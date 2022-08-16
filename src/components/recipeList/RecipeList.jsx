//styling
import "./RecipeList.css";

//router
import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
function RecipeList({ recipes }) {
  const { mode } = useTheme();
  return (
    <div className="recipe-list">
      {recipes.length === 0 && (
        <span className="error">دستوری برای نمایش وجود ندارد...</span>
      )}
      {recipes.map((recipe) => (
        <div className={`card ${mode}`} key={recipe.id}>
          <h2 className="card-title">{recipe.title}</h2>
          <p className="cook-time">{recipe.cookingTime} برای پخت.</p>
          <p className="card-method">{recipe.method.substring(0, 100)}...</p>
          <Link to={`/recipe/${recipe.id}`} className="cook-this-cta">
            پخت غذا
          </Link>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
