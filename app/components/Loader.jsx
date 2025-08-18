// components/Loader.js
"use client";

import React from "react";
import styles from "./Loader.module.css";


export default function Loader() {
  return (
    <div className={styles.loader}>
      <div className={styles.loading}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
