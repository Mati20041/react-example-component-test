import {FunctionComponent} from 'react'

interface SimpleProps {
    content: string;
}

export const Simple: FunctionComponent<SimpleProps> = ({content}) => {
    return (<div>
        <p role="article">
            {content}
        </p>
        <a href="https://example.com">Example link</a>
        <footer>Example footer</footer>
    </div>);
};
