"use client";

import { ReactNode } from "react";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import store from "./store";
import LoadingDots from "../components/common/LoadingDots/LoadingDots";

function StoreProvider({ children }: { children: ReactNode }) {
  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<LoadingDots />}>
        {children}
      </PersistGate>
    </Provider>
  );
}

export default StoreProvider;
