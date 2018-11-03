import React from "react";
import HubspotForm from "react-hubspot-form";

export default () => {
  return (
    <HubspotForm
      portalId="4233057"
      formId="17f63fb5-4074-4b34-984e-d21e58639880"
      onSubmit={() => console.log("Submit!")}
      onReady={form => console.log("Form ready!")}
      loading={<div>Loading...</div>}
      style={{ minWidth: 320, height: 580 }}
    />
  );
};
