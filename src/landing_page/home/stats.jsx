import React from "react";

function Stats() {
  return (
    <div className="container p-3">
      <div className="row">
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>
          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>
          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your <br /> pace, the way you like.
          </p>
          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments <br />in 30+
            fintech startups offer you tailored services <br />specific to your needs.
          </p>
          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            With initiatives like{" "}
            <a href="" style={{ color: "#387ed1" }}>
              Nudge
            </a>{" "}
            and{" "}
            <a href="" style={{ color: "#387ed1" }}>
              Kill Switch
            </a>
            , we don't just <br />facilitate transactions, but actively help you do
            better <br />with your money.
          </p>
        </div>
        <div className="col-6 p-5">
          <img
            src="Media\Images\ecosystem.png"
            alt=""
            style={{ width: "110%" }}
          />
          <div>
            <a
              href=""
              className="mx-5"
              style={{ color: "#387ed1", textDecoration: "none" }}
            >
              Explore our products <i class="fa-solid fa-arrow-right-long"></i>
            </a>
            <a href="" style={{ color: "#387ed1", textDecoration: "none" }}>
              Try Kite demo <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
