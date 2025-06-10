import UseTitleName from "../../components/UseTitleName";
import posts from "../../PostData.json";
import PostGrid2 from "../components/post grid/PostGrid2";

function ShipConstructions() {
  UseTitleName("Ship Constructions | OCU Engineering Club");

  // Filter posts by category
  const shipConstructionsPosts = posts.filter(post => post.category === "Ship Constructions");

  return (
    <div>
      <PostGrid2 posts={shipConstructionsPosts} />
    </div>
  );
}

export default ShipConstructions;