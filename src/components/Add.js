import React, { useState } from "react";
import axios from "axios";

function Add() {
  const [msg, setMsg] = useState(null);
  const [stationery, setStationery] = useState({
    id: "",
    name: "",
    color: "",
    qty: "",
  });

  const handlePost = async () => {
    try {
      const resp = await axios.post("https://backend-bgdt.onrender.com/stationery", stationery);
      setMsg(resp.data.msg);
    } catch (e) {
      setMsg("Error: " + e.message);
      console.error(e);
    }
  };

  const styles = {
    container: {
      background: "#f4f7fa",
      height: "75vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    card: {
      background: "#fff",
      padding: "40px",
      borderRadius: "12px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      width: "400px",
      textAlign: "center",
    },
    input: {
      width: "90%",
      margin: "8px 0",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "8px",
    },
    button: {
      marginTop: "15px",
      padding: "10px 20px",
      border: "none",
      borderRadius: "8px",
      background: "#007bff",
      color: "#fff",
      fontWeight: "bold",
      cursor: "pointer",
    },
    msg: { marginTop: "15px", color: "#333" },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={{ color: "#007bff" }}>Add New Item</h1>
        <input
          type="number"
          style={styles.input}
          placeholder="Stationery item ID"
          value={stationery.id}
          onChange={(e) => setStationery({ ...stationery, id: e.target.value })}
        />
        <input
          type="text"
          style={styles.input}
          placeholder="Stationery Item Name"
          value={stationery.name}
          onChange={(e) => setStationery({ ...stationery, name: e.target.value })}
        />
        <input
          type="text"
          style={styles.input}
          placeholder="Color"
          value={stationery.color}
          onChange={(e) => setStationery({ ...stationery, color: e.target.value })}
        />
        <input
          type="number"
          style={styles.input}
          placeholder="Quantity"
          value={stationery.qty}
          onChange={(e) => setStationery({ ...stationery, qty: e.target.value })}
        />
        <button style={styles.button} onClick={handlePost}>
          ➕ Add Item
        </button>
        {msg && <p style={styles.msg}>{msg}</p>}
      </div>
    </div>
  );
}

export default Add;
