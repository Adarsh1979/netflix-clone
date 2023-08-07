import { Link } from "react-router-dom";
import "./product.css";
import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = "http://localhost:5000/api"; // becoz I wasnt able to send movies data from prev page😞😞😞

export default function Product() {
  const movieId = window.location.pathname.split("/").pop();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(`${API_URL}/movies/find/${movieId}`);
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [movieId]);
  console.log(movie);

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Update Movie</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src={movie.img}
              alt=""
              className="productInfoImg"
            />
            <span className="productName">{movie.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{movie._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">genre:</span>
              <span className="productInfoValue">{movie.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">year:</span>
              <span className="productInfoValue">{movie.year}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Title</label>
            <input
              type="text"
              placeholder={movie.title}
            />
            <label>Description</label>
            <input
              type="text"
              placeholder="Desc"
            />
            <label>Year</label>
            <input
              type="text"
              placeholder={movie.year}
            />
            <label>Genre</label>
            <input
              type="text"
              placeholder={movie.genre}
            />
            <label>Limit</label>
            <input
              type="text"
              placeholder={movie.limit}
            />
            <label>Is series ?</label>
            <select
              name="isSeries"
            >
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
            <label>Image</label>
            <input
              type="file"
              placeholder={movie.img}
            />
            <label>Title Image</label>
            <input
              type="file"
              placeholder={movie.imgTitle}
            />
            <label>Thumbnail</label>
            <input
              type="file"
              placeholder={movie.imgSm}
            />
            <label>Trailer</label>
            <input
              type="file"
              placeholder={movie.trailer}
            />
            <label>Video</label>
            <input
              type="file"
              placeholder={movie.video}
            />
          </div>
          <div className="productFormRight">
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
