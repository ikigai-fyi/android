import * as React from "react";

import Router from "./router";

import { AuthProvider } from "./store/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}
