import { Post } from "../../data/store/post/types";

type Props = {
  key: any;
  post: Post;
};

function PostItem(props: Props) {
  const mouseEnter = () => {};
  const mouseLeave = () => {};

  return (
    <div
      className="post"
      onMouseEnter={() => mouseEnter()}
      onMouseLeave={() => mouseLeave()}>
      <div className="content">
        <div className="overlay">
          <div className="top-items">
            {/* <app-save-button></app-save-button> */}
          </div>
          <div className="bottom-items">
            {/* a link */}
            <span></span>
            {/* End a link */}

            {/* Share menu */}
            {/* <app-circle-button> */}
            {/* <fa-icon [icon]="iconShare" buttonIcon></fa-icon> */}
            {/* </app-circle-button> */}
            {/* End Share menu */}

            {/* Image menu */}
            {/* <app-circle-button> */}
            {/* <fa-icon [icon]="iconEllipsis" buttonIcon></fa-icon> */}
            {/* </app-circle-button> */}
            {/* End Image menu */}
          </div>
        </div>

        {/* Post image */}
        <div className="post-image-container">
          <img
            src={props.post.image_url}
            loading="lazy"
            className="post-image"
            alt={props.post.name}
          />
        </div>
        {/* End Post image */}
      </div>
      <div className="info">
        {/* Author */}
        <a className="post-author" href="javascript">
          <img
            alt={props.post.name}
            className="post-author-image"
            src="https://hamidjavadi.com/assets/template/hamidjavadi/img/logo-hamid-javadi.jpg"
          />
          <span className="post-author-name">Hamid Javadi</span>
        </a>
        {/* End Author */}

        {/* Reactions */}

        {/* End Reactions */}
      </div>
    </div>
  );
}

export default PostItem;
