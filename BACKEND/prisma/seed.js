const { PrismaClient } = require("../prisma/src/generated/client");

const prisma = new PrismaClient()

// const userData = [
//   {
//     name: 'Alice',
//     email: 'alice@prisma.io',
//     posts: {
//       create: [
//         {
//           title: 'Join the Prisma Slack',
//           content: 'https://slack.prisma.io',
//           published: true,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Nilu',
//     email: 'nilu@prisma.io',
//     posts: {
//       create: [
//         {
//           title: 'Follow Prisma on Twitter',
//           content: 'https://www.twitter.com/prisma',
//           published: true,
//           viewCount: 42,
//         },
//       ],
//     },
//   },
//   {
//     name: 'Mahmoud',
//     email: 'mahmoud@prisma.io',
//     posts: {
//       create: [
//         {
//           title: 'Ask a question about Prisma on GitHub',
//           content: 'https://www.github.com/prisma/prisma/discussions',
//           published: true,
//           viewCount: 128,
//         },
//         {
//           title: 'Prisma on YouTube',
//           content: 'https://pris.ly/youtube',
//         },
//       ],
//     },
//   },
// ]

const userData = [
  {
    name: 'AME Administrator',
    email: 'ameadmin@yopmail.com',
    contact_name: 'Jhon Smith',
    password: '$2a$12$z7lMYWDVXrVTsPLGpl4/J.oB0w43FnwVZmRsq8isk44Nmj.8QfyD.',
    address: 'UK',
    contact: '7894561236',
    user_type: 3
  }
]

async function main() {
  console.log(`Start seeding ...`)
  for (const u of userData) {
    const user = await prisma.users.create({
      data: u,
    })
    console.log(`Created user with id: ${user.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
