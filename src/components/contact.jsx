export default function contact(props) {

  return (
    <div className="contact">
      <img src="" alt="profile" />
      <h3 className="contact__name">{props.name}</h3>
      <h3 className="contact__phone">{props.phone}</h3>
    </div>
  )
}
