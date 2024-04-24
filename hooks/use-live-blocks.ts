import { useOthers, useSelf } from '@/liveblocks.config'
import { faker } from '@faker-js/faker'

export const useLiveOthers = () => {
  return useOthers().map((user) =>
    user.id
      ? user
      : {
          ...user,
          info: { name: faker.person.firstName(), avatar: `https://robohash.org/${faker.person.firstName()}?set=set4`, id: faker.string.uuid() }
        }
  )
}

export const useLiveSelf = () => {
  const myself = useSelf()
  return myself?.id
    ? myself
    : {
        ...myself,
        info: { name: faker.person.firstName(), avatar: `https://robohash.org/${faker.person.firstName()}?set=set4`, id: faker.string.uuid() }
      }
}
