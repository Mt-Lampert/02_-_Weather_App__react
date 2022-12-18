
function FooterCard(props) {
  return ( 
    <div>
      <figure><img src={"./assets/" + props.svg} alt={props.type + " symbol"} /></figure>
      <p>{props.desc}</p>
    </div>
   );
}

export default FooterCard;