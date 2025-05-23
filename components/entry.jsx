


export default function Entry(props){
  return(
    <div className="entry">
      <div className="imageparent">
    <img src={props.img.src} alt={props.img.alt} className="pic"/>
      </div>
    <div>

    <img src="../images/marker.png" alt="marker" className="marker"/>
    <span className="country">{props.country}</span>
    <a href={props.googleMapsLink} className="googlelink1">View on Google Maps</a>
    <h1 className="title">{props.title} <small>{props.dates}</small></h1>
    <span className="content">{props.text}
      </span>
    </div>
    </div>



  )





}
