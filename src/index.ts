/* -------------------------------------------------------------------------- */
/*                              Intersection Type                             */
/* -------------------------------------------------------------------------- */
interface HasID {
  id: number
}

function addIdToValue<T>(val: T): T & HasID {
  const id = Math.random()

  return {...val, id}
}
// this is T
interface Post {
  title: string
  thumbsUp: number
}

const post = addIdToValue<Post>({title: 'Marmite Rules', thumbsUp: 521})
console.log(post);