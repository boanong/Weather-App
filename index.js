import { registerRootComponent } from 'expo';

import App from './App';
import { AppContextProvider } from './Context/Context';


function MyApp() {
    return (
        <AppContextProvider>
            <App />
        </AppContextProvider>
    )
}

registerRootComponent(MyApp);
