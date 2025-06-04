



import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 150, // Number of virtual users
  duration: '10s', // Test duration
};

export default function () {
  const res = http.get('https://pr.avidusinteractive.com/api/web/gst');

  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time < 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1); // Simulate user think time
}
