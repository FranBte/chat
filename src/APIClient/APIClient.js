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
    const content = await response.json();
    return content;
  }


}

export default APIClient;
