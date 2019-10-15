class APIClient {
  constructor(url, token) {
    this.url = `${url}?token=${token}`;
  }

  async sendMessage(name, input) {
    const response = await fetch(this.url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        author: name,
        message: input
      })
    });
    if (response.status >= 400 && response.status < 600) {
      throw new Error("Bad response from server");
    }
    const content = await response.json();
    return content;
  }

  async getLastTenMessages(time) {
    const apiCall = `${this.url}&since=${time}&limit=10`;
    const response = await fetch(apiCall);
    if (response.status >= 400 && response.status < 600) {
      throw new Error("Bad response from server");
    }
    const data = await response.json();
    return data;
  }

  async getAllMessages() {
    const apiCall = this.url;
    const response = await fetch(apiCall);
    if (response.status >= 400 && response.status < 600) {
      throw new Error("Bad response from server");
    }
    const data = await response.json();
    return data;
  }
}

export default APIClient;

