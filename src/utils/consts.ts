export const consts = {
  API_URL:
    process.env.NODE_ENV !== 'production'
      ? `http://localhost:4000`
      : `https://api.build-store-test.test-tasks.ru`
}
