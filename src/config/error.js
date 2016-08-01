import { inherits } from 'util';

const build = (type) => {
  const ErrorBuilt = ({ inherit, message, context }) => {
    Error.captureStackTrace(this, this.constructor);
    this.name = type;
    this.message = message;
    this.context = context;

    if (!!inherit && inherit instanceof Error) {
      if (!!inherit.stack) {
        this.stack += `\n\n${inherit.stack}`;
      }
    }
  };

  inherits(ErrorBuilt, Error);
  return ErrorBuilt;
};

export { build };
