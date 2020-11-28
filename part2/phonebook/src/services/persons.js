import axios from 'axios'
const baseUrl = 'http://localhost:3000/persons'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = (newPerson) => {
  return axios.post(baseUrl, newPerson);
}

const update = (person, id) => {
  return axios.put(`${baseUrl}/${id}`, person);
}

const remove = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
}

export default {getAll, create, update, remove}