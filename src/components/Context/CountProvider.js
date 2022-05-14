import { createContext, useEffect, useContext, useState } from "react"

const CountContext = createContext();
const CountContextDispatcher = createContext();



const CountProvider = ({ children }) => {

    const [count, setCount] = useState(100);

    useEffect(() => {
        const time = setInterval(() => {
            count > 0 && setCount(count - 1)
        }, 1000);
        return () => clearInterval(time)
    }, [count])

    return (
        <CountContext.Provider value={count}>
            <CountContextDispatcher.Provider value={setCount}>
                {children}
            </CountContextDispatcher.Provider>
        </CountContext.Provider>
    );
}

export default CountProvider;

export const useCount = () => useContext(CountContext);
export const useCountAction = () => useContext(CountContextDispatcher);