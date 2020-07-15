import React from "react"
import sectionStyles from "./section.module.css"

export default function Section({ children }) {
  return <section className={sectionStyles.section}>{children}</section>
}
