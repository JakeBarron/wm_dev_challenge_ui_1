const config = {
  baseUrl: "http://localhost:5000/api",
};

export async function search(term) {
  const response = await fetch(config.baseUrl + `/Titles/search/${term}`, {
    method: "GET",
    mode: "cors",
  });
  return response.json();
}

export async function getDetailsById(id) {
  const response = await fetch(config.baseUrl + `/Titles/${id}`, {
    method: "GET",
    mode: "cors",
  });
  return response.json();
}
