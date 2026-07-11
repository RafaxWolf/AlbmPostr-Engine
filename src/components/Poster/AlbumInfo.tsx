import type { AlbumInfoProps } from "../../models/types"


function AlbumInfo(props: AlbumInfoProps) {
    const { artist, title, genere, releaseDate } = props

    return (
        <div>
            <h2>{artist}</h2>
            <h1>{title}</h1>
            {genere && <p>{genere}</p>}
            {releaseDate && <h4>{releaseDate}</h4>}
        </div>
    )
}

export default AlbumInfo