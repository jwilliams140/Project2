import React, { useEffect } from "react";
import "./ClickSpark.css";

const ClickSpark = () => {

  useEffect(() => {

    const handleClick = (e) => {

      const spark = document.createElement("span");
      spark.className = "click-spark";

      spark.style.left = e.clientX + "px";
      spark.style.top = e.clientY + "px";

      document.body.appendChild(spark);

      setTimeout(() => {
        spark.remove();
      }, 600);

    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };

  }, []);

  return null;
};

export default ClickSpark;