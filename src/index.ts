export * from './Redis'

// import { Redis } from './Redis'

// async function main() {
//   const m = new Redis({
//     connection: 'redis://localhost:6379',
//     commands: [
//       { command: 'get', args: ['abc'] },
//       'get abcd'
//     ]
//   } as Redis)
//   m.prepare()
//   await m.beforeExec()
//   await m.exec()
// }

// main()