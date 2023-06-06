const errorHandler = (error, req, res, next) => {
  return res.status(500).json({ msg: 'something went wrong try later' })
}

export default errorHandler
