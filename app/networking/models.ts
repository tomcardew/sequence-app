/* eslint-disable prettier/prettier */

// TODO: Separate inside a folder when necessary
enum RequestMethod {
  GET = "GET",
  POST = "POST",
  PATCH = "PATCH",
  PUT = "PUT",
  DELETE = "DELETE",
}

type ObjectType = {
  [key: string]: any;
};

interface NetworkingConfig {
  url: string;
  path: string;
  method: RequestMethod;
}

export { RequestMethod, ObjectType, NetworkingConfig }
