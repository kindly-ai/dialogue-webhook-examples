# Dialogue webhook examples

These are examples of how to solve common issues using a dialogue webhook:

- [Give different replies based on the hour of the day](./src/examples/triggerByHour.js) - `/trigger-by-hour`.

## Get started

You can play with the examples by issuing the following commands:

```bash
nvm use
npm install
npm start

curl http://localhost:8000/triger-by-hour  # in another window
```

To test with Kindly you can use ngrok to tunnel webhooks to your local machine:

```bash
ngrok http 8000  # in another window
```
