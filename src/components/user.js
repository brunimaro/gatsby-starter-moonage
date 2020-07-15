import React from "react"
import styles from "./user.module.css"
//console.log(Styles)


// module user
export default function User(props) {
  return <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
}
