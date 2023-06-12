import React from "react";

function Entry(props: { emoji: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) {
    return (
        <div className="term">
        <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
            {props.emoji}
            </span>
            <span>{props.name}</span>
        </dt>
        <dd>
            {props.description}
        </dd>
        </div>
    );

}

export default Entry;