import type { AlbumInfoProps } from "../../../models/types"

function AlbumInfo(props: AlbumInfoProps) {
    const { artist, title, genre, releaseDate } = props

    return (
        <div>
            <h2>{artist}</h2>
            <h1>{title}</h1>
            {genre && <p>{genre}</p>}
            <h4>{releaseDate}</h4>
        </div>
    )
}

export default AlbumInfo