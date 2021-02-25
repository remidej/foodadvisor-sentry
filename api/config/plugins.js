module.exports = ({ env }) => ({
  // All plugins config go here
  sentry: {
    dsn: env('SENTRY_DSN'),
    init: {
      release: env('SENTRY_RELEASE'),
    }
  }
});
