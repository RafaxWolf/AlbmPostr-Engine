import type { TrackListProps } from "../../models/types"

function TrackList(props: TrackListProps) {
    const { tracks } = props

    return (
        <div>
            <h1>Track List</h1>
            <ul>
                {tracks.map((track) => (
                    <li key={track}>{track}</li>
                ))}
            </ul>
        </div>
    )
}

export default TrackList