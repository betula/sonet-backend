

module.exports = ({ route, users, comments }) => {

  route('POST', '/user', async ({ json: { comment }, headers: { token } }) => {
    const user = await users.findOne({ token });
    if (!user) return 403;

    return await comments.insert({ comment, author: user.id });
  });

};