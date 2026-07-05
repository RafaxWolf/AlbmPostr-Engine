import type { PosterProps } from "../../models/PosterProps"
import AlbumCover from "./AlbumCover"
import TrackList from "./TrackList"

/**
 * Generador del Poster
 * @param props Propiedades del Poster
 * @returns Poster Generado por el Motor
 */
function Poster(props: PosterProps) {
    const { album } = props

    return (
        <section>
            <AlbumCover cover={album.cover}/>

            <div>
                <TrackList tracks={album.tracks}/>
            </div>
        </section>
    )

    /* return (
        <section>
            
            <h2>{artist}</h2>
            <h3>{title}</h3>

            <ol>
                {tracks.map((song) => (
                    <li key={song}>{song}</li>
                ))}
            </ol>

        </section>
    ) */
}

export default Poster