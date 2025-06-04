



import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 150, // Number of virtual users
  duration: '10s', // Test duration
};

export default function () {
  const res = http.get('https://pr.avidusinteractive.com/api/web/dmr_purchase_order/order-status-count?userId=663a083316b02d57048c6eac');

  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time < 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1); // Simulate user think time
}
