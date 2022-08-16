import "./Create.css";
import { useState, useRef, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
function Create() {
  const { mode } = useTheme();
  //react router
  const navigate = useNavigate();
  //using controlled component

  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredients, setNewIngredients] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const inputIng = useRef(null);
  const { data, error, postData } = useFetch("http://localhost:3000/recipes", "POST");
  const handleSubmit = (e) => {
    e.preventDefault();
    //json server adds id automatically we dont need to provide it manually
    postData({
      title,
      ingredients,
      method,
      cookingTime: cookingTime + " دقیقه",
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const ing = newIngredients.trim();
    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIng) => [...prevIng, ing]);
    }
    //clearing the input again (cause' we have two way binding here value will be cleared this way)
    //the value in the input is set to this state
    setNewIngredients("");
    //focusing the input automatically
    inputIng.current.focus();
  };
  //redirecting the user when we get a response back
  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, [data]);
  return (
    <div className={`create-recipe ${mode}`}>
      <form onSubmit={handleSubmit}>
        <div className="form-field title-wrapper">
          <label htmlFor="recipe-title">عنوان دستور:</label>
          <input
            type="text"
            id="recipe-title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </div>
        <div className="form-field ing-field-wrapper">
          <label htmlFor="add-ing">مواد مورد نیاز:</label>
          <div className="ing-wrapper">
            <input
              id="add-ing"
              type="text"
              onChange={(e) => setNewIngredients(e.target.value)}
              value={newIngredients}
              ref={inputIng}
            />
            <button onClick={handleAdd} className="ing-btn">
              اضافه کردن
            </button>
          </div>
          <p className="sub-input-ing">
            مواد فعلی:
            {ingredients.map((i) => (
              <em key={i}>{i}, </em>
            ))}
          </p>
        </div>
        <div className="form-field method-wrapper">
          <label htmlFor="recipe-method">نحوه ی پخت:</label>
          <input
            type="text"
            id="recipe-method"
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </div>
        <div className="form-field method-wrapper">
          <label htmlFor="recipe-time">مدت زمان پخت:</label>
          <input
            type="number"
            id="recipe-time"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </div>
        <input className="submit-btn" type="submit" value="ثبت" />
      </form>
    </div>
  );
}

export default Create;
