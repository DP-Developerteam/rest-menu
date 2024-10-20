// Importing the createStore function from Redux to create a Redux store
import { createStore } from 'redux';
// Importing persistStore and persistReducer from redux-persist for state persistence across sessions
import { persistStore, persistReducer } from 'redux-persist';
// Importing the default storage engine from redux-persist, which uses localStorage for web applications
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
// Importing the rootReducer which combines all the individual reducers for the Redux store
import rootReducer from './reducers'; // Import your root reducer

// Configuration object for redux-persist
const persistConfig = {
    // The key for the storage, used to identify the persisted data
    key: 'root',
    // Specifying the storage engine to use for persistence
    storage,
};

// Creating a persisted reducer using the rootReducer and the persistConfig
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Creating the Redux store with the persisted reducer
export const store = createStore(persistedReducer);
// Creating the persistor, which will manage the persistence of the Redux store
export const persistor = persistStore(store);
