const policies = {
  directives: {
    "default-src": ["'self'"],
    "img-src": ["'self'", "*.cloudinary.com", "data:"],
    "font-src": [
      "'self'", 
      "https://fonts.googleapis.com", 
      "https://fonts.gstatic.com"
    ],
    "style-src-elem": [
      "'self'", 
      "'unsafe-inline'", 
      "https://fonts.gstatic.com"
    ],
    "style-src": [
      "'self'", 
      "'unsafe-inline'"]
  }
}

module.exports = policies;