import * as React from 'react';

export interface BodyProps {
    text: string;
}

//: React.FunctionComponent<BodyProps>

export const BodyText: React.FunctionComponent<BodyProps> = (props: BodyProps): JSX.Element => {
    return (
        <p className="grey-body-text">
            { props.text }
        </p>
    );
}
