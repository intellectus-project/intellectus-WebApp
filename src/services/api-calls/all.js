import client from "./http-client";
import auth from "./auth.api-calls";
import user from "./user.api-calls";
import reports from "./reports.api-calls";

const defaultClient = client({});

export default () => ({
  ...auth(defaultClient),
  ...user(defaultClient),
  ...reports(defaultClient)
});
