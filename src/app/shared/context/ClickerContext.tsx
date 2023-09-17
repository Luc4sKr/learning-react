import React, { createContext, useState, ReactNode } from "react";

type ClickerContextType = {
    clicks: number;
    setClicks: React.Dispatch<React.SetStateAction<number>>;
    addClick: () => void;
};

const defaultClickerContext: ClickerContextType = {
    clicks: 0,
    setClicks: () => { },
    addClick: () => { },
};

export const ClickerContext = createContext<ClickerContextType>(defaultClickerContext);

type ClickerProviderProps = {
    children: ReactNode;
};

export const ClickerProvider: React.FC<ClickerProviderProps> = ({ children }) => {
    const [clicks, setClicks] = useState(0);

    const addClick = () => {
        console.log(clicks)
        setClicks(clicks + 1);
    }

    const contextValue: ClickerContextType = {
        clicks,
        setClicks,
        addClick,
    };

    return (
        <ClickerContext.Provider value={contextValue}>
            {children}
        </ClickerContext.Provider>
    );
};
