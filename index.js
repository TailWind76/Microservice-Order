// order-service.js
const Seneca = require('seneca')();
const PORT = 3002;

Seneca.add({ role: 'order', cmd: 'getOrder' }, (msg, respond) => {
  const orderId = msg.orderId;
 

  const order = {
    id: orderId,
    products: ['Product A', 'Product B'],
    total: 100.0,
  };

  respond(null, { success: true, data: order });
});

Seneca.listen({ type: 'tcp', port: PORT });
console.log(`Order Service is listening on port ${PORT}`);
