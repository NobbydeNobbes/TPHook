module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '44ae43df5166d051958327db35011fa8'),
  },
});
