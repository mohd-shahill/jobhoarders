import React from "react";
import { useSearchParams } from "react-router-dom";

const Webview = () => {
  const [searchParams] = useSearchParams();
  const externalUrl = searchParams.get("url");

  if (!externalUrl) {
    return <div className="p-4 text-center">⚠️ No URL Provided.</div>;
  }

  return (
    <div style={{ height: "100vh" }}>
      <iframe
        src={externalUrl}
        title="External Tool"
        width="100%"
        height="100%"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
};

export default Webview;
