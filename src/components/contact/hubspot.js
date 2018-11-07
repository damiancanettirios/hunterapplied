import React from "react";
import HubspotForm from "react-hubspot-form";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

export default () => {
  return (
    <HubspotForm
      portalId="4233057"
      formId="17f63fb5-4074-4b34-984e-d21e58639880"
      onSubmit={() => console.log("Submit!")}
      onReady={form => console.log("Form ready!")}
      loading={
        <Grid container justify="center" style={{ marginTop: 30 }}>
          <CircularProgress />
        </Grid>
      }
      style={{ minWidth: 320, height: 580 }}
    />
  );
};
