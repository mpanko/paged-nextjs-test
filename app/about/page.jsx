"use client"

import { useEffect, useRef } from "react"
import { Previewer } from "pagedjs"
import "./about.css"

export default function About() {
  const appRef = useRef(null)

  useEffect(() => {
    if (appRef.current) {
      const paged = new Previewer()
      paged.preview(appRef.current).then((flow) => {
        console.log("Rendered", flow.total, "pages.")
      })
    }
  }, [])

  return (
    <div className="App" ref={appRef}>
      <section className="chapter" id="about-page" data-reference="001">
        <h2 className="title" id="label-title">
          About
        </h2>
        <p className="text">Lorem ipsum dolor sit amet consectetur adipiscing elit. Duis nibh tortor</p>
      </section>

      <section className="chapter" id="chapter1-page" data-reference="002">
        <h2 className="title">Chapter 1</h2>
        <p className="text">Lorem ipsum dolor sit amet</p>
      </section>

      <section className="chapter" id="chapter2-page" data-reference="003">
        <h2 className="title">Chapter 2</h2>
        <p className="text">consectetur adipiscing elit</p>
      </section>

      <section className="chapter" id="chapter3-page" data-reference="004">
        <h2 className="title">Chapter 3</h2>
        <p className="text">Duis nibh tortor, pellentesque eu suscipit vel</p>
      </section>
    </div>
  )
}

