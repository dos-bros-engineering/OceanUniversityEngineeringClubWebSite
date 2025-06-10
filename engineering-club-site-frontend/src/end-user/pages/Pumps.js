import UseTitleName from "../../components/UseTitleName";
import posts from "../../PostData.json";
import PostGrid2 from "../components/post grid/PostGrid2";

function Pumps() {
  UseTitleName("Pumps | OCU Engineering Club");

  // Filter posts by category
  const pumpsPosts = posts.filter(post => post.category === "Pumps");

  return (
    <div>
      <PostGrid2 posts={pumpsPosts} />
    </div>
  );
}

export default Pumps;