import type { Envelope, User } from 'api'
import { v4 as uuid } from 'uuid';
import { faker } from '@faker-js/faker'

type UserMap = { [id: string]: User }
type EnvelopeMap = { [id: string]: Envelope }

let users: User[] = Array.apply(null, Array(100)).map(() => ({
  id: uuid(),
  username: faker.hacker.noun(),
  name: faker.name.findName(),
  phone: faker.phone.number(),
  avatarUrl: faker.image.avatar(),
}))

let userMap: UserMap = users.reduce<UserMap>((userMap, user) => {
  userMap[user.id] = user;
  return userMap;
}, {})

let envelopes: Envelope[] = Array.apply(null, Array(400)).map(() => ({
  id: uuid(),
  inboxId: uuid(),
  message: faker.random.words(5),
  status: 'delivered',
}))

let envelopeMap: EnvelopeMap = envelopes.reduce<EnvelopeMap>((envelopeMap, envelope) => {
  envelopeMap[envelope.id] = envelope;
  return envelopeMap;
}, {})




class Db {
  public version: number = 1;
  public users: UserMap = userMap;
  public envelopes: EnvelopeMap = envelopeMap;
}

export default new Db;