process.on('uncaughtException', error => {
  throw new Error(error, 'Uncaught exception');
});
