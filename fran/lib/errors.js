// ERROR FUNCTION

export default function sendError(error, res){
  // Log the error to the terminal
  console.error(error)

  // ValidationError (422 UNPROCESSABLE ENTITY)
  if (error.name === 'ValidationError') return res.status(422).json(error)

  // NotFound (404 NOT FOUND)
  if (error.name === 'DocumentNotFoundError') return res.status(404).json({ message: error.query })

  // Duplicate Key (409 CONFLICT)
  if (error.name === 'MongoServerError' && error.code === 11000) {
    const [ keyName, keyValue ] = Object.entries(error.keyValue)[0]
    return res.status(409).json({
      [keyName]: `${keyValue} has already been used. Please pick a different one.`
    })
  }

  // Generic error response (if no other errors match)
  return res.status(500).json({ message: 'Something went wrong' })
}

export const sendUnauthorized = (res) => {
  return res.status(401).json({ message: 'Access credentials don\'t appear to be correct.' })
}