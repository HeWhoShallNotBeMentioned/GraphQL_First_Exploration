function feed(root, args, context, info) {
  return context.prisma.links();
}

function info(root, args, context, info) {
  return 'This is a GraphQL database application.';
}

module.exports = { feed, info };
