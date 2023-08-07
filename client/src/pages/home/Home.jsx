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
                const res = await axios.get(newUrl,
                    {
                        headers: {
                            Token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODU3ZGU5NGE1ZWIyNzdiOTM5MDExMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MTQxMTM2MSwiZXhwIjoxNjkxODQzMzYxfQ.Y53xow-a3oV5vLflFQS-LGELxLpHNPA5ejlfTnLP7fc"
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
        <Featured type={type} setGenre={setGenre} />
        {
            lists.map( list => (
                <List list={list}
            />) )
        }
    </div>
  )
}

export default Home