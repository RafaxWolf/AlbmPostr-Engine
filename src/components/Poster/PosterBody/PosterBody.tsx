import type { PosterBodyProps } from "../../../models/types";

function PosterBody(props: PosterBodyProps) {
    const { children } = props

    return (
        <div>
            {children}
        </div>
    )
}

export default PosterBody