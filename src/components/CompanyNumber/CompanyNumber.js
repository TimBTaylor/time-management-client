import React, { useRef, useState } from "react";

export const CompanyNumber = () => {
  const [companyNumber] = useState([]);

  const firstInput = useRef(null);
  const secondInput = useRef(null);
  const thirdInput = useRef(null);
  const fourthInput = useRef(null);
  const fifthInput = useRef(null);
  const sixthInput = useRef(null);

  const nextInput = (e, pos, next) => {
    if (e.target.value.length === 1) {
      companyNumber.splice(pos, 0, e.target.value);
      next.current.focus();
      console.log("focus");
    } else {
      companyNumber.splice(pos, 1);
      console.log("else");
    }
    console.log(companyNumber);
  };

  return (
    <div>
      <h1>Must enter your company's 6 digit code</h1>
      <p>You can recieve this code from your employer</p>
      <div className="digits">
        <input
          disabled={false}
          type="text"
          maxLength="1"
          ref={firstInput}
          onChange={(e) => nextInput(e, 0, secondInput)}
        />
        <input
          type="text"
          maxLength="1"
          ref={secondInput}
          onChange={(e) => nextInput(e, 1, thirdInput)}
        />
        <input
          type="text"
          maxLength="1"
          ref={thirdInput}
          onChange={(e) => nextInput(e, 2, fourthInput)}
        />
        <input
          type="text"
          maxLength="1"
          ref={fourthInput}
          onChange={(e) => nextInput(e, 3, fifthInput)}
        />
        <input
          type="text"
          maxLength="1"
          ref={fifthInput}
          onChange={(e) => nextInput(e, 4, sixthInput)}
        />
        <input
          type="text"
          maxLength="1"
          ref={sixthInput}
          onChange={(e) => nextInput(e, 5)}
        />
      </div>
    </div>
  );
};
