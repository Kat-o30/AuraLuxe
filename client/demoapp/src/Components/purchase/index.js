import React from 'react';

const Purchase = () => {
  return (
    <div>
      <div className="purchase">
        <div className="add-to-cart" style={{ paddingTop: "15px" }}>
          <span>Add To Bag</span>
        </div>
        <div className="divider--purchase"></div>

        <div className="delivery">


          <div className="heading" style={{ marginLeft: "30px" }}>
            <i
              className="fas fa-map-marker-alt"
              style={{ marginRight: "8px", color: "#494646" }}
            ></i>
            <span style={{ color: "#494646" }}>Delivery Options</span>
          </div>


          <div className="pinCode" style={{ position: 'relative', marginTop: '10px', width: '200px' }}>
            <input
              name=""
              id=""
              placeholder="Enter pincode"
              style={{
                width: '200px',
                height: '40px',
                paddingRight: '50px',
                boxSizing: 'border-box',
                marginLeft: "30px"
              }}
            />

            <span
              style={{
                position: 'absolute',
                right: '-20px',
                top: '50%',
                transform: 'translateY(-20px)',
                cursor: 'pointer',
                color: '#007BFF'
              }}
            >
              check
            </span>
          </div>
        </div>
      </div>

      <div className="divider--footer"
        style={{
          width: "655px",
          height: "1px",
          backgroundColor: "#b2aaaa",
          marginTop: "50px",
          transform: "translateX(-35px)"
        }}
      >
      </div>

      <div className="footer--right--section" >
        {/* <FontAwesomeIcon icon={faLipstick} style={{ fontSize: '24px', color: '#ff69b4' }} /> */}
        <span style={{ fontSize: "1rem", color: "#b2aaaa", marginTop: "5px", color: "#676768" }}>100 % genuine products</span>
        <span style={{ fontSize: "1rem", color: "#b2aaaa", fontWeight: "400", color: "#676768" }}>easy return policy</span>
        <span style={{ fontSize: "1rem", color: "#b2aaaa", marginTop: "5px", color: "#676768" }}>sold by : AuraLuxe</span>
      </div>
    </div>
  );
};

export default Purchase;
