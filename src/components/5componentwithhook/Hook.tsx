import {FunctionComponent} from 'react'
import {useMyDomainLogic} from "./__tests__/useMyDomainLogic";

export const Hook: FunctionComponent = () => {
    const {loading, fetch} = useMyDomainLogic()

    return (<div>
        {loading && <div data-testid="spinner">Spinner</div>}
        <button onClick={() => fetch()}>Fetch</button>
    </div>);
};
