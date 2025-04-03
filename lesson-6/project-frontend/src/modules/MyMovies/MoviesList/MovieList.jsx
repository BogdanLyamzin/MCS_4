import MovieListItem from "./MovieListItem";

const MovieList = ({items = [], onDelete})=> {

    const elements = items.map(item => <MovieListItem key={item.id} {...item} onDelete={onDelete} />);

    return (
        <ul>
            {elements}
        </ul>
    )
}

export default MovieList;