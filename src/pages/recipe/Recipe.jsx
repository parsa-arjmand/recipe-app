import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import "./Recipe.css";
import { useTheme } from "../../hooks/useTheme";
function Recipe() {
  const { id } = useParams();
  const {
    data: recipe,
    isPending,
    error,
  } = useFetch(`http://localhost:3000/recipes/${id}`);
  const { mode } = useTheme();
  return (
    <div className={`recipe ${mode}`}>
      {error && <p className="error">مشکلی در دریافت اطلاعات پیش آمده !</p>}
      {isPending && <p className="loading">...در حال دریافت اطلاعات</p>}
      {recipe && (
        <div>
          <h2>{recipe.title}</h2>
          <p>زمان برای پخت {recipe.title}: </p>
          <ul>
            {recipe.ingredients.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
        </div>
      )}
    </div>
  );
}

export default Recipe;
