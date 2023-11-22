import { createClient } from "@sanity/client";

export default createClient({
  projectId: "hs1ns0gk", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  apiVersion: "2022-03-25",
  useCdn: false,
});
