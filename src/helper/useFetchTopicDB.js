import  { useState } from "react";
import { useContext, useEffect } from "react";
import { IsLoadingContex } from "../Contexts/IsLoadingContex";
import axios from "axios";
function useFetchTopicDB(QTopicName) {
  const { loading, setLoading } = useContext(IsLoadingContex);

  const [data, setData] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setLoading(true);

    axios
      .get(`https://js-manual2-backend.vercel.app/jstopics/${QTopicName}`)
      .then((res) => {
        setData(res.data.data);
      })

      .catch((err) => {
        setErr(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [QTopicName,setLoading]);

  return { data, loading, err };
}

export default useFetchTopicDB;
