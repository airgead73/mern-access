const policies = {
  directives: {
    "default-src": ["'self'"],
    "img-src": ["'self'", "*.cloudinary.com", "data:"],
    "font-src": ["'self'", "https://fonts.googleapis.com", "https://fonts.gstatic.com"],
    "style-src-elem": ["'self'", "'nonce-htueffffhehendgvhfdhggfwasaweqfkjkjhvdhghsfdfkjhpofjfbndfhsflkdlknfkjbnlfvyucdrsdysf'", "https://fonts.googleapis.com", "https://fonts.gstatic.com"],
    "style-src": ["'self'", "'nonce-htueffffhehendgvhfdhggfwasaweqfkjkjhvdhghsfdfkjhpofjfbndfhsflkdlknfkjbnlfvyucdrsdysf'"]
  }
}

module.exports = policies;