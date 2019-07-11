// eslint-disable
// this is an auto generated file. This will be overwritten

export const getDesign = `query GetDesign($id: ID!) {
  getDesign(id: $id) {
    id
    name
    description
    videoUrl
    imageUrl
  }
}
`;
export const listDesigns = `query ListDesigns(
  $filter: ModelDesignFilterInput
  $limit: Int
  $nextToken: String
) {
  listDesigns(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      videoUrl
      imageUrl
    }
    nextToken
  }
}
`;
