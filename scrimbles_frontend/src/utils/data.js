export const userQuery = (userId) => {
  const query = `*[_type == "user" && _id == '${userId}']`

  return query
}

export const searchQuery = (searchTerm) => {
  const query = `*[_type == 'scrimbl' && title match '${searchTerm}*' || category match '${searchTerm}' || about match ]{
        image {
            asset -> {
                url
            }
        },
        _id,
        destination,
        postedBy => {
            _id,
            userName,
            image
        },
        save[] {
          _key,
          postedBy -> {
            _id,
            userName,
            image
          },
        },
    }`
  return query
}

export const feedQuery = `*[_type == 'scrimbl'] | order(_createAt desc) {
  image {
            asset -> {
                url
            }
        },
        _id,
        destination,
        title,
        postedBy -> {
            _id,
            userName,
            image
        },
        save[] {
          _key,
          postedBy -> {
            _id,
            userName,
            image
          },
        },
    }`
