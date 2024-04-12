export default {
  jwt: {
    expiresIn: '99h',
    secret: process.env.JWT_SECRET,
  },
}
