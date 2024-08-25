import { Provider } from "react-redux";
import { Toaster } from "sonner";
import { PersistGate } from "redux-persist/integration/react";
import AuthProvider from "./AuthProvider";
import { persistor, store } from "@/redux/store";


const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <Toaster position="top-center" richColors={true} />
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>{children}</AuthProvider>
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;