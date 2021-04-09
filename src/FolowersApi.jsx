import axios from "axios";

const folowersApi = async () => {
  const url = "https://reqres.in/api/users?page=2";
  var results = await axios.get(`${url}`);
  console.log("called api");

  return results.data.data;
};

export default folowersApi;
