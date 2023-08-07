import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import "./featured.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api"


function Featured({ type, setGenre }) {

    const [content, setContent] = useState({});

    useEffect(() => {
        const getRandomContent = async () => {
            try {
                const newUrl = type ? `${API_URL}/movies/random?type=${type}` : `${API_URL}/movies/random`;
                const res = await axios.get(newUrl, {
                    headers: {
                        Token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODU3ZGU5NGE1ZWIyNzdiOTM5MDExMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MTQxMTM2MSwiZXhwIjoxNjkxODQzMzYxfQ.Y53xow-a3oV5vLflFQS-LGELxLpHNPA5ejlfTnLP7fc"
                    }
                });
                setContent(res.data[0]);
            } catch (err) {
                console.log(err);
            }
        }
        getRandomContent();
    }, [type])

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre" onChange={(e) => setGenre(e.target.value)} >
            <option>Genre</option>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentry">Documentry</option>
          </select>
        </div>
      )}

      <img
        src={content.img}
        alt="featured-img"
      ></img>

      <div className="info">
        <img
          src={content.imgTitle}
          alt="title-img"
        ></img>
        <span className="desc">
            {content.desc}
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
