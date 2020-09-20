import React from "react";
import Spinner from "../Spinner";
import styles from "./body.module.css";

export default function Body() {
  const f = "fffff";
  if (!f) {
    return <Spinner />;
  }

  return (
    <div className={styles.Body}>
      <div className={styles.textBody}>
        <div>
          <img
            src="https://www.pinclipart.com/picdir/big/351-3510590_rick-and-morty-clipart-african-american-rick-and.png"
            alt="logo"
            width="30%"
            height="30%"
          />
        </div>
      
      </div>
    </div>
  );
}
