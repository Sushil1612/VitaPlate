import React, { useState, useEffect } from "react";

const AddressSelector = ({ total }) => {
  const [addresses, setAddresses] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [newAddress, setNewAddress] = useState("");
  const [useNew, setUseNew] = useState(false);

  // 👉 Using hardcoded static address data instead of fetching
  useEffect(() => {
    const dummyAddresses = [
      { id: 1, full: "Flat 4B, Meghdoot Society, Kothrud, Pune" },
      { id: 2, full: "301, Green Valley Apt, Baner, Pune" },
    ];
    setAddresses(dummyAddresses);
  }, []);

  const handleSubmit = () => {
    const finalAddress = useNew
      ? newAddress
      : addresses.find((a) => a.id === selectedId)?.full;

    if (!finalAddress) {
      alert("Please select or enter an address");
      return;
    }

    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    console.log("✔ Order placed with:");
    console.log("Address:", finalAddress);
    console.log("Cart:", cartItems);
    console.log("Total:", total);

    alert("Order placed successfully (demo)!");
  };

  return (
    <div className="address-selector">
      <h3>Select Address</h3>

      {!useNew &&
        addresses.map((addr) => (
          <label key={addr.id} style={{ display: "block", marginBottom: "0.5rem" }}>
            <input
              type="radio"
              name="address"
              value={addr.id}
              onChange={() => setSelectedId(addr.id)}
              style={{ marginRight: "0.5rem" }}
            />
            {addr.full}
          </label>
        ))}

      <div style={{ marginTop: "1rem" }}>
        <input
          type="checkbox"
          checked={useNew}
          onChange={() => setUseNew(!useNew)}
          id="new-address-check"
        />
        <label htmlFor="new-address-check" style={{ marginLeft: "0.5rem" }}>
          Add New Address
        </label>
      </div>

      {useNew && (
        <textarea
          placeholder="Enter full address"
          value={newAddress}
          onChange={(e) => setNewAddress(e.target.value)}
          style={{ width: "100%", marginTop: "1rem", padding: "0.5rem" }}
        />
      )}

      <button
        onClick={handleSubmit}
        style={{
          marginTop: "1.5rem",
          padding: "10px 20px",
          backgroundColor: "#f77f00",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Confirm & Pay
      </button>
    </div>
  );
};

export default AddressSelector;
