import React, {useState, useEffect} from "react";
import Header from "../components/Header"
import ChartItem from "../components/ChartItem";
import ChartList from "../components/ChartList";

const ChartBox = () => {

    const [song, setSong] = useState({});
    const [loaded, setLoaded] = useState(false);

    const getSong = () => {
        console.log("Getting sog info...");
        fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=20/json`)
        .then(res => res.json())
        .then(data => setSong(data))
        .then(() => setLoaded(true))
    }
    return(
        <>
            <Header title="Itunes Top 20"/>
            
        </>
    )
};

export default ChartBox;