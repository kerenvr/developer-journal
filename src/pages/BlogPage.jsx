import Accordion from "../components/accordion/Accordion"
import { useState } from "react"
import journalData from "../journal-data"

const BlogPage = () => {
  const [items, setItems] = useState(journalData)

  const toggleAccordion = (id) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, show: !item.show }
          : { ...item, show: false }
      )
    )
  }

  return (
    <>
      <div className="text-4xl font-bold pb-4">
        Blog Page
      </div>
    </>
  )
}

export default BlogPage
