import "./SearchBar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  //react router
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${searchValue}`);
    setSearchValue("");
  };
  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="اینجا جستجو کنید..."
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          required
        />
      </form>
    </div>
  );
};
export default SearchBar;
