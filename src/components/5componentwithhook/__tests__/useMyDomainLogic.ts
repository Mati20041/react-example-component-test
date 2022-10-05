import {useState} from "react";

export const useMyDomainLogic = () => {
    const [loading, setLoading] = useState(true)
    return {loading, fetch: () => setLoading(false)}
}
