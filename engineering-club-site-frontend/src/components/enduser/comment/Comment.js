import db from "../../../data/db.json";
import FormatDate from "../../../utils/FormatDate";

const Comment = ({ post_id }) => {
  const comment = db.comment.filter((comment) => comment.article_id === post_id);

  return (
    <div>
      <h4>
        Comments{" "}
        <span class="badge rounded-pill text-bg-light fs-6">
          {comment.length}
        </span>
      </h4>
      {comment
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map((comment) => (
          <div className="mt-2 row" key={comment.id}>
            <div className="col-2 col-lg-1 ps-5">
              <i className="bi bi-person-circle fs-2"></i>
            </div>
            <div className="col-10 col-lg-11">
              <h6 className="pt-1">
                <span className="me-4">{comment.name}</span>
                <span>{FormatDate(comment.date)}</span>
                <div>{comment.email}</div>
              </h6>
              <p>{comment.comment}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Comment;
