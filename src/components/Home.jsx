import React, { useRef } from "react";
import { Button } from "@chakra-ui/react";
function Home() {
  const servicesRef = useRef(null);
  function scrollToServices() {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({
        behavior: "smooth", // You can change this to 'auto' for instant scrolling
        block: "start", // You can change this to 'end' or 'center' as needed
      });
    }
  }
  return (
    <>
      <div
        style={{
          height: "100vh",
          backgroundImage:
            "url(https://images.squarespace-cdn.com/content/v1/5f0087fc0414060b9b15c82d/8e80efa6-312b-4cb4-b33e-251a16e9d81e/KH-FWBarberShop-2A8A9959.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          flexDirection: "column",
        }}
      >
        <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>Lorem ipsum</h1>
        <Button size={"lg"} onClick={() => scrollToServices()}>
          Služby
        </Button>
      </div>
      <div
        ref={servicesRef}
        style={{
          height: "100vh",
          backgroundColor: "gray",
          width: "100%",
          display: "flex",
          alignItems: "center",
          color: "white",
          flexDirection: "column",
        }}
      >
        <img
          src="https://images.squarespace-cdn.com/content/v1/5f0087fc0414060b9b15c82d/1594137978242-O9YO0X7U11QYXVBDH2DZ/Divider.png"
          alt="menu"
          style={{ color: "white", marginTop: "20px" }}
          width={"50%"}
        ></img>
        <h1
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            marginTop: "40px",
          }}
        >
          Služby
        </h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "49% 49%",
            gap: "2%",
            width: "50%",
            marginTop: "20px",
            height: "150px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            Sluzba 1
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            Sluzba 2
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "49% 49%",
            gap: "2%",
            width: "50%",
            marginTop: "20px",
            height: "150px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            Sluzba 1
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            Sluzba 2
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "49% 49%",
            gap: "2%",
            width: "50%",
            marginTop: "20px",
            height: "150px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            Sluzba 1
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            Sluzba 2
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "49% 49%",
            gap: "2%",
            width: "50%",
            marginTop: "20px",
            height: "150px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            Sluzba 1
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            Sluzba 2
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
