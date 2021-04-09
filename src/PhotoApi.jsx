import axios from "axios";

const getPhoto = async () => {
  const url =
    "https://api.unsplash.com/photos/?client_id=telfA16ms4QtxlJOkkWCH7qSzL2IB9ET7WHcfYXfEko";

  const res = await axios.get(`${url}`);
  const photos = res.data;
  console.log(" data here " + photos, res);
  return photos;
};

export default getPhoto;


