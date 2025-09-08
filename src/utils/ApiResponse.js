class ApiResponse {
  constructor(statusCode, message = "sucess", data) {
    this.statusCode = statusCode < 400;
    this.message = message;
    this.success = true;
    this.data = data
  }
}