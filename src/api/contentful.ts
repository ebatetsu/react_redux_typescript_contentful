import * as contentful from 'contentful'

const client = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN!
})

export const contentfulApi = {
  async entries() { return client.getEntries() },
  async entry(id: string) { return client.getEntry(id) }
}
