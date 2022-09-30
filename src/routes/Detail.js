import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState(null);
    const getMovie = async () => {
        const response = await(await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        console.log(response.data.movie);
        setMovie(response.data.movie);
        setLoading(false);
    };
    useEffect(() => {
        getMovie();
    }, []);
    return <div>
        {loading ? <h1>Loading...</h1> : <div>
            <img src={movie.large_cover_image}/>
            <h1>{movie.title}</h1>
            <h3>{movie.description_full}</h3>
        </div>}
    </div>;
}

export default Detail;
