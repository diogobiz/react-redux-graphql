import sheetsu from 'sheetsu-node'
import uuid from 'node-uuid'

const client = sheetsu({ address: 'https://sheetsu.com/apis/v1.0su/49b7ed0f3147' })

const toJson = (data) => JSON.parse(data)

export const all = () => client.read().then(toJson)

export const find = (preventValue, args) => client.read({ search: { id: args.id } }).then(toJson).then((res) => res[0])

export const create = (preventValue, args) => client.create({ id: uuid(), title: args.title }).then(toJson)

export const update = (preventValue, args) => find(preventValue, args).then((todo) => client.update('id', args.id, { done: args.done }).then(() => ({ ...todo, done: args.done })))