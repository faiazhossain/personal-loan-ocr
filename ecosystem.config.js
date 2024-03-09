module.exports = {
  apps: [
    {
      name: "personal_loan_ocr",
      script: "node server.js",
      env: {
        PORT: 4000,
      },
    },
  ],
};
