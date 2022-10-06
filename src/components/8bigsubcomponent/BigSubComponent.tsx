import {FunctionComponent} from "react";
import {SubComponent} from "./SubComponent";

export const BigSubComponent: FunctionComponent = () => {
    const projectId = 5; // from hook

    return (<div>
        <h1>Title</h1>
        <SubComponent projectId={projectId}/>
        </div>);
};
