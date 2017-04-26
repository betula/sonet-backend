

module.exports = ({ route, comments }) => {

  route('GET', '/user/:id', async ({ id }) => {
    console.log(id);
    const comment = await comments.findOne({ id });
    if (!comment) return 404;

    return comment;
  });

};