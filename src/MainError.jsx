function MainError(props) {
  return ( 
    <div className="main-error container is-centered">
      <h1>This is an error!</h1>
      <p>{props.message}</p>
    </div>
   );
}

export default MainError;