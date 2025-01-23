"use client"

import { useEffect, useRef } from "react"
import { Previewer } from "pagedjs"
import "./page.css"

export default function Home() {
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
      <section className="chapter" id="introduction">
        <h1>Welcome to Our Multi-Page Document</h1>
        <input name="search" type="search" placeholder="Search this document" />
        <p>This document demonstrates the use of PagedJS to create a multi-page layout. Each section below represents a different chapter or topic.</p>
      </section>

      <section className="chapter" id="chapter1">
        <h2>Chapter 1: Lorem Ipsum</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      </section>

      <section className="chapter" id="chapter2">
        <h2>Chapter 2: De Finibus Bonorum et Malorum</h2>
        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
      </section>
    </div>
  )
}
