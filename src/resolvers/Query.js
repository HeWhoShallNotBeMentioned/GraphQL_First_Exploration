async function feed(parent, args, context, info) {
  const where = args.filter
    ? {
        OR: [
          { description_contains: args.filter },
          { url_contains: args.filter },
        ],
      }
    : {};

  const links = await context.prisma.links({
    where,
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy,
  });
  const count = await context.prisma
    .linksConnection({
      where,
    })
    .aggregate()
    .count();
  return {
    links,
    count,
  };
}

function info(root, args, context, info) {
  return 'This is a GraphQL database application.';
}

module.exports = { feed, info };
