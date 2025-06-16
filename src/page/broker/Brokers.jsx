import React from "react";
import { useAuth } from "../../hooks/useAuth";
import All_Brokers from "./All_Brokers";
import RequireLoginMessage from "../../utility/RequireLoginMessage";

function Brokers() {
  const { user } = useAuth();

  return (
    <div>{user ? <All_Brokers /> : <RequireLoginMessage page="Broker" />}</div>
  );
}

export default Brokers;
