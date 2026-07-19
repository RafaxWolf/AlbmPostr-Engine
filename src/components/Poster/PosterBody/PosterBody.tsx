import type { PosterBodyProps } from "../../../models/types";

function PosterBody(props: PosterBodyProps) {
    const { children } = props

    return (
        <div className="poster__body">
            {children}
        </div>
    )
}

export default PosterBody