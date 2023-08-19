import { Link } from "react-router-dom";
import {} from "./list.css";
import { useState } from "react";

export default function List() {
  // const listId = window.location.pathname.split("/").pop();

  const [list] = useState({});

  // useEffect(() => {
  //   const getMovie = async () => {
  //     try {
  //       const res = await axios.get(`${API_URL}/list//${listId}`);
  //       setMovie(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getMovie();
  // }, [movieId]);
  // console.log(movie);

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">List</h1>
        <Link to="/newList">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <span className="productName">{list.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{list._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">genre:</span>
              <span className="productInfoValue">{list.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">type:</span>
              <span className="productInfoValue">{list.type}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>List Title</label>
            <input type="text" placeholder={list.title} />
            <label>Type</label>
            <input type="text" placeholder={list.type} />
            <label>Genre</label>
            <input type="text" placeholder={list.genre} />
          </div>
          <div className="productFormRight">
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
