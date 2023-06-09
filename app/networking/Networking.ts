/* eslint-disable prettier/prettier */
import objToQueryString from "../utils";
import { NetworkingConfig, ObjectType, RequestMethod } from "./models";

export default class RequestData {
  public url: string = "";

  public path: string = "";

  public method: RequestMethod = RequestMethod.GET;

  constructor(
    public service: NetworkingConfig,
    public token?: string,
    public params?: string,
    public query?: string,
    public body?: ObjectType,
    public formData?: FormData
  ) {
    this.url = service.url;
    this.path = service.path;
    this.method = service.method;
    this.token = token;
    this.params = params;
    this.query = query;
    this.body = body;
    this.formData = formData;
  }

  get fullPath() {
    return `${this.url}/${this.path}${this.params ? this.params : ""}${this.query ? `?${this.query}`:""}`;
  }

  setQuery(query: ObjectType) {
    this.query = objToQueryString(query);
    return this;
  }

  setBody(body: ObjectType) {
    this.body = body;
    return this;
  }

  setParams(params: string) {
    this.params = params;
    return this;
  }

  setFormData(data: FormData) {
    this.formData = data;
    return this;
  }

  async request() {
    // Logger.info("Requesting endpoint", this.fullPath);
    const data = this.formData
      ? await this.requestFormData()
      : await this.requestBody();
    if (data.error) {
      // Logger.error(
      //   "Request to endpoint",
      //   this.fullPath,
      //   " failed:",
      //   data.error
      // );
    } else {
      // Logger.success("Request to endpoint", this.fullPath, "was successful");
    }
    return data;
  }

  private async requestBody() {
    // this.body && Logger.warn(this.body);
    try {
      // Logger.info("Data used", JSON.stringify(this.body));
      const result = await fetch(this.fullPath, {
        method: this.method,
        body: JSON.stringify(this.body),
        headers: {
          "Content-Type": "application/json",
          Authorization: this.token ?? "",
        },
      });
      return await result.json();
    } catch (error) {
      return {
        error: {
          code: 0,
          message: error,
        },
      };
    }
  }

  private async requestFormData() {
    // this.formData && Logger.debug(this.formData);
    try {
      const result = await fetch(this.fullPath, {
        method: this.method,
        body: this.formData,
        headers: {
          Authorization: this.token ?? "",
        },
      });
      return await result.json();
    } catch (error: any) {
      return {
        error: {
          code: 0,
          message: { ...error },
        },
      };
    }
  }

}
