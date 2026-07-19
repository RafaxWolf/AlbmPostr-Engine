import type { TrackListProps } from "../../../models/types"

function TrackList(props: TrackListProps) {
    const { tracks } = props

    return (
        <div className="track-list">
            <h1>TrackList</h1>
            <ol>
                {tracks.map((track, index) => (
                    <li key={index}>{track}</li>
                ))}
            </ol>
        </div>
    )
}

export default TrackList