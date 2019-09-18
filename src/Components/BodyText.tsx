import * as React from 'react';

export interface BodyProps {
    text: string;
}

export const BodyText: React.FunctionComponent<BodyProps> = (props: BodyProps): JSX.Element => {
    return (
        <p>
            { props.text }
        </p>
    );
}
