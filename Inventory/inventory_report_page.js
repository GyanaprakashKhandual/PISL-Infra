












import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 150, // Number of virtual users
  duration: '10s', // Test duration
};

export default function () {
  const res = http.get('https://pr.avidusinteractive.com/api/web/inventory-report?page=1&limit=50&sortBy=updated_at&sortOrder=desc&inventoryType=BOQ&site_id=65547a86c44d8a2878e57bb8');

  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time < 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1); // Simulate user think time
}
