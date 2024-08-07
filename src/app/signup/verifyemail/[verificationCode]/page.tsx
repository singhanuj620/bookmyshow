"use client";
import { Spinner } from "reactstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function VerificationEmail({
  params: { verificationCode },
}: {
  params: { verificationCode: string };
}) {
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { data: resp } = await axios.post("/api/verifyemail", {
          verificationCode,
        });
        if (resp.data === "Email verified") {
          window.location.href = "/login";
        } else {
          toast.error(resp.error);
          setErrorMsg(resp.error);
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  return (
    <div className="flex h-[90vh] justify-center items-center flex-col">
      {!errorMsg && (
        <>
          <div>
            <Spinner />
          </div>
          <div className="mt-4 text-2xl">
            Hold on, we are verifying your email !!
          </div>
        </>
      )}
      {errorMsg && (
        <div className="text-2xl text-red-500">
          {errorMsg}. Please try again.
        </div>
      )}
    </div>
  );
}
