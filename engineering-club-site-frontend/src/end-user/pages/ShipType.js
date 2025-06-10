import UseTitleName from "../../components/UseTitleName";
import posts from "../../PostData.json";
import PostGrid2 from "../components/post grid/PostGrid2";

function ShipType() {
  UseTitleName("Ship Type | OCU Engineering Club");

  // Filter posts by category
  const shipTypePosts = posts.filter(post => post.category === "Ship Type");

  return (
    <div>
      <PostGrid2 posts={shipTypePosts} />
    </div>
  );
}

export default ShipType;