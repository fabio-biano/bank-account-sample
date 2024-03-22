const PROXY_CONFIG = {
  context: [
    "/BankAccount",
  ],
  target: "https://localhost:8031",
  secure: true,
  changeOrigin: true
}

module.exports = PROXY_CONFIG;
