import React from "react";
import { useAuth } from "../../hooks/useAuth";
import All_Shark_Investor from "./All_Shark_Investor";
import RequireLoginMessage from "../../utility/RequireLoginMessage";

function SharkInvestor() {
  const { user } = useAuth();
  return (
    <div>
      <All_Shark_Investor />
      {/* {user ? (
        <All_Shark_Investor />
      ) : (
        <RequireLoginMessage page="Shark Investors" />
      )} */}
    </div>
  );
}

export default SharkInvestor;
