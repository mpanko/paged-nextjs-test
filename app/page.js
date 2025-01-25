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

      <div className="two-column-layout">
      <section className="chapter" id="introduction">
        <h1>Welcome to Our Multi-Page Document</h1>
        <input name="search" type="search" placeholder="Search this document" />
        <p>This document demonstrates the use of PagedJS to create a multi-page layout. Each section below represents a different chapter or topic.</p>
      </section>

        <div className="chapter" id="chapter1">
          <h2>Chapter 1: Foundations</h2>
          {/* Chapter 1 content */}
          <p>1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>2 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>3 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <p>4 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>5 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
          <p>6 Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
          <p>7 Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
          <p>8 Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
          <p>9 Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
          <p>10 Et harum quidem rerum facilis est et expedita distinctio nam libero tempore. Et harum quidem rerum facilis est et expedita distinctio nam libero tempore.</p>
        </div>

        <div className="chapter" id="chapter2">
          <h2>Chapter 2: Advanced Concepts</h2>
          {/* Chapter 2 content */}
          <p>1 At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.</p>
          <p>2 Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
          <p>3 Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.</p>
          <p>4 Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores.</p>
          <p>5 Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.</p>
          <p>6 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
          <p>7 Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
          <p>8 Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
          <p>9 Et harum quidem rerum facilis est et expedita distinctio nam libero tempore. Et harum quidem rerum facilis est et expedita distinctio nam libero tempore.</p>
          <p>10 Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.</p>
          <p>11 Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
          <p>12 Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores.</p>
        </div>
      </div>
    </div>
  )
}