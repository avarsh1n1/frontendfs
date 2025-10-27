import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [data, setData] = useState(null);
  const [msg, setMsg] = useState(null);

  const handleGet = async () => {
    try {
      const resp = await axios.get("https://backend-bgdt.onrender.com/stationery");
      setData(resp.data);
      setMsg(resp.data.msg);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    handleGet();
  }, []);

  const styles = {
    container: {
      background: "#f4f7fa",
      padding: "50px",
      textAlign: "center",
    },
    card: {
      background: "#fff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
      margin: "15px auto",
      width: "60%",
    },
    title: {
      color: "#f384bdff",
      marginBottom: "30px",
    },
    item: {
      fontSize: "18px",
      color: "#126decff",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}></h1>

      {data ? (
        data.map((d) => (
          <div key={d.id} style={styles.card}>
            <p style={styles.item}>
              <strong>ID:</strong> {d.id} <br />
              <strong>Name:</strong> {d.name} <br />
              <strong>Color:</strong> {d.color} <br />
              <strong>Quantity:</strong> {d.qty}
            </p>
          </div>
        ))
      ) : (
        <h3>No data loaded</h3>
      )}

      {msg && <p>{msg}</p>}
    </div>
  );
}

export default Home;
