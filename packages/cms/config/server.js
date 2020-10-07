module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0')+"/cms",
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'random-secret-token'),
    },
  },
});
