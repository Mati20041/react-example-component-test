import {FunctionComponent} from 'react'

interface CallbackProps {
    content: string;
    callback: (result: string) => unknown
}

export const Callback: FunctionComponent<CallbackProps> = ({content, callback}) => {
    return (<div>
        <p role="article">
            {content}
        </p>
        <button onClick={() => callback(content)}>Click me!</button>
    </div>);
};
