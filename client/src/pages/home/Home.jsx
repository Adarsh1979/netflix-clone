import { useEffect, useState } from "react"
import Featured from "../../components/featured/Featured"
import List from "../../components/list/List"
import Navbar from "../../components/navbar/Navbar"
import "./home.scss"
import axios from 'axios'

const API_URL = "http://localhost:5000/api";

function Home({type}) {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState("horror");

    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const newUrl = type ? `${API_URL}/lists?type=${type}${genre ? "&genre=" + genre : ""}` : `${API_URL}/lists`;
                console.log(newUrl);
                const res = await axios.get(newUrl,
                    {
                        headers: {
                            Token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODU3ZGU5NGE1ZWIyNzdiOTM5MDExMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODUwNjYzOCwiZXhwIjoxNjg4OTM4NjM4fQ.7IktPwb_Y0a47Ri6SbKUvO0lEYalswT2Az7xrQkvY-4"
                        }
                    }
                )
                setLists(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getRandomLists();
    }, [type, genre]);


  return (
    <div className="home">
        <Navbar />
        <Featured type={type} />
        {
            lists.map( list => (
                <List list={list}
            />) )
        }
    </div>
  )
}

export default Home