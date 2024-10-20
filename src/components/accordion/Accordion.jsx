import "./Accordion.css"

const Accordion = ({ toggleAccordion, id, show, title, children }) => {
  const clickHandler = () => {
    toggleAccordion(id)
  }
  return (
    <div className="border border-gray-300 rounded-lg mb-4">
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={clickHandler}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        <div
          className={`transform ${
            show ? "rotate-180" : "rotate-0"
          } transition-transform`}
        >
          ▼
        </div>
      </div>
      {show && <div className="p-4 border-t border-gray-300">{children}</div>}
    </div>
  )
}

export default Accordion
