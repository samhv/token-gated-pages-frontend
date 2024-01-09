import { useState, createContext, useContext } from 'react';

export enum ROUTES {
    ABOUT,
    INDEX_PAGES,
    CREATE_PAGE,
    SHOW_PAGE,
}

type Route = {
    page: ROUTES,
    params: {
        [key: string]: number
    }
}

export const RouteProvider = ({ children }: {
    children: React.ReactNode
}) => {
    const [route, setRoute] = useState<Route>(initialState);
  
    return (
      <StoreContext.Provider value={{ route, setRoute }}>
        {children}
      </StoreContext.Provider>
    );
};

const initialState = {
    page: ROUTES.INDEX_PAGES,
    params: {},
};

const StoreContext = createContext<{
    route: Route,
    setRoute: (route: Route) => void,
}>({
    route: initialState,
    setRoute: (route: Route) => { route },
});

export const useRoute = () => {
    return useContext(StoreContext)
}
