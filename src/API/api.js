import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com";

export const getTodoData = () => {
  let url = `${baseURL}/todos?_limit=10`;
  return axios.get(url).then(
    (response) => {
      return response.data;
    },
    (error) => {
      console.log(error);
    }
  );
};

export const deleteTodoData = (id) => {
  let url = `${baseURL}/todos/${id}`;
  return axios.delete(`${baseURL}/todos/${id}`).then(
    (response) => {
      return response.data;
    },
    (error) => {
      console.log(error);
    }
  );
};

export const addTodoData = (payload) => {
  let url = `${baseURL}/todos`;
  let response = axios.post(url, payload).then(
    (response) => {
      return response.data;
    },
    (error) => {
      console.log(error);
    }
  );
  return response;
};
