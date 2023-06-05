import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

export const FAQ = ({question, answer}) => {
  const [active, setActive] = useState(false);

  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  const toggleAccordion = () => {
    setActive(!active);
  };
  
  return (
    <>
      <div className="App">
        <div>
          <button
            className={`question-section ${active}`}
            onClick={toggleAccordion}
          >
            <div>
              <div className="question-align">
                <h4 className="question-style">
                    {question}
                </h4>
                <IoIosArrowDown
                  className={active ? `question-icon rotate` : `question-icon`}
                /> 
              </div>
              <div
                ref={contentRef}
                className={active ? `answer answer-divider` : `answer`}
              >
                <p>{answer}</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}