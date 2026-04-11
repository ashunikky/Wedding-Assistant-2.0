import axios from "axios";

const API_URL = "http://127.0.0.1:8000/chat";

export const sendMessage = async (query) => {
  const role = localStorage.getItem("role");
  const session_id = localStorage.getItem("session_id");

  const res = await axios.post(API_URL, {
    query,
    role,
    session_id,
  });

  return res.data;
};