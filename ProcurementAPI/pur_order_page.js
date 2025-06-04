


import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 150, // Number of virtual users
  duration: '1m', // Test duration
};

export default function () {
  const res = http.get('https://pr.avidusinteractive.com/api/web/purchase_order?page=1&date=undefined&per_page=20&filter_by=status&filter_value=pending&purchase_type=no&userId=663a083316b02d57048c6eac&site=&title=&vendor=');

  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time < 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1); // Simulate user think time
}
