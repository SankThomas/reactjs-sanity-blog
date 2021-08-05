import client from "@sanity/client"

export default client({
  projectId: "2hp9gld0",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-08-05",
})
