import { LazyLoadImage } from "react-lazy-load-image-component";

const Card = (props) => {
  return (
    <div className="card display-flex">
      <div className="card_left_section">
        <LazyLoadImage src={props.user.photo} />
      </div>
      <div className="card-body card_right_section">
        <div>
          <h5 className="card-title txt-ellipses">{props?.user?.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted txt-ellipses">
            {props?.user?.company?.name}
          </h6>
          <p className="card-text txt-ellipses">
            {" "}
            {props?.user?.company?.catchPhrase}{" "}
          </p>
        </div>
        <div>
          {props.showAction ? (
            <div className="card-action txt_align_right">
              <button
                className="action_btn"
                onClick={() => onDelete(props?.user?.id)}
              >
                Delete
              </button>
              <button
                className="action_btn"
                onClick={() => onUpdate(props?.user)}
              >
                Update
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Card;
