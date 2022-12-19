import "./MainError.scss";

function MainError(props) {
  return (
    <div className="main-error">
      <div className="my-message notification is-danger">
        <h1>This is an error!</h1>
        <p>{props.message}</p>
      </div>
    </div>
  );
}

export default MainError;
