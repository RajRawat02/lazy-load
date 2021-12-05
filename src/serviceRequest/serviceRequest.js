export const serviceRequest = (params) => {
  return fetch(params.url, {
    method: params.method || "GET",
    body: params.body,
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};
