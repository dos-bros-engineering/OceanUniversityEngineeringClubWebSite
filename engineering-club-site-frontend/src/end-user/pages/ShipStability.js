import UseTitleName from "../../components/UseTitleName";
import posts from "../../PostData.json";
import PostGrid2 from "../components/post grid/PostGrid2";

function ShipStability() {
  UseTitleName("Ship Stability | OCU Engineering Club");

  // Filter posts by category
  const shipStabilityPosts = posts.filter(post => post.category === "Ship Stability");

  return (
    <div>
      <PostGrid2 posts={shipStabilityPosts} />
    </div>
  );
}

export default ShipStability;
