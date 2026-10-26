import React from "react";
import { useNavigate } from "react-router-dom"; // १. useNavigate इंपोर्ट केला

function Signup() {
  const navigate = useNavigate(); // २. नेव्हिगेट फंक्शन तयार केले

  const handleSignupSubmit = (e) => {
    e.preventDefault(); // पेज रीलोड होण्यापासून रोखते
    
    // इथे तुम्ही हवं तर अलर्ट दाखवू शकता
    alert("Signup Successful! Redirecting to Home...");
    
    // ३. युझरला होम पेजवर पाठवले
    navigate("/"); 
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center" style={{ minHeight: "70vh" }}>
        {/* डावी बाजू: इमेज */}
        <div className="col-md-6 text-center">
          <img 
            src="/images/coin.png" 
            alt="Signup Graphic" 
            style={{ width: "70%", maxWidth: "400px" }} 
          />
        </div>

        {/* उजवी बाजू: साइनअप फॉर्म */}
        <div className="col-md-5 offset-md-1">
          <h1 className="fw-normal mb-3" style={{ fontSize: "2.2rem", color: "#424242" }}>
            Join 1.5+ crore investors
          </h1>
          <p className="text-muted mb-4" style={{ fontSize: "1.1rem" }}>
            Invest in stocks, direct mutual funds, ETFs, and more.
          </p>
          
          {/* ४. फॉर्म सबमिट झाल्यावर handleSignupSubmit फंक्शन चालू होईल */}
          <form onSubmit={handleSignupSubmit}>
            <div className="mb-3">
              <label htmlFor="mobile" className="form-label text-muted">
                Enter your 10 digit mobile number
              </label>
              <div className="input-group">
                <span className="input-group-text bg-light">+91</span>
                <input
                  type="tel"
                  className="form-control form-control-lg"
                  id="mobile"
                  placeholder="Mobile number"
                  maxLength="10"
                  required
                />
              </div>
            </div>
            
            <p className="text-muted small">
              You will receive an OTP on this number for verification.
            </p>
            
            <button type="submit" className="btn btn-primary btn-lg w-100 mt-2" style={{ backgroundColor: "#387ed1", border: "none" }}>
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
