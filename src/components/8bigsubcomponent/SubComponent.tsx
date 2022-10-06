import {FunctionComponent} from "react";


interface SubComponentProps {
    projectId: number
}

export const SubComponent: FunctionComponent<SubComponentProps> = ({projectId}) => {
  return (<div><h2>VERY LONG RENDERING</h2>{projectId}</div>);
};
