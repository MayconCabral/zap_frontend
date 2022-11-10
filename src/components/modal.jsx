import { useState } from "react"

export default function Modal(props) {
  const [ addClass, setAddClass ] = useState(false); 
  let close = addClass

  if (props.show) {
    setAddClass(true)
  }

  const turnOff = () => {   
    setAddClass(true)
  };

  return (
    <div className={`modal ${close}`}>
        <div className="modal__content">
          <div className="absolute">
            <button className="modal__content__btn" onClick={() => ( turnOff() )}>close</button>
          </div>
          <div className="modal__content__textBox">
            <p>{props.text}</p>
          </div>
        </div>
    </div>
  )
}
