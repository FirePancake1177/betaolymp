import axios from "axios";

axios.get("http://localhost:5000/posts").then((data) => console.log(data["data"][0])).catch(e => console.log(e))