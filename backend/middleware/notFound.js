const notFound = (req, res) => {
  res.status(404).send('<h3>Not Found </h3>')
}

export default notFound
