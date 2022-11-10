import { Link } from "react-router-dom"

export default function contact(props) {

  return (
    <Link to={`/chat/${props.id}`} className="contact" key={props.propKey}>
      <img src={props.img} alt="profile" />
      <h3 className="contact__name">{props.name}</h3>
      <h3 className="contact__phone">{props.phone}</h3>
    </Link>
  )
}
