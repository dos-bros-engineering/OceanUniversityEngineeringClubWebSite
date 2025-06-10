import UseTitleName from "../../components/UseTitleName";
import posts from "../../PostData.json";
import PostGrid2 from "../components/post grid/PostGrid2";

function Other() {
  UseTitleName("Other | OCU Engineering Club");

  // Filter posts by category
  const otherPosts = posts.filter(post => post.category === "Other");

  return (
    <div>
      <PostGrid2 posts={otherPosts} />
    </div>
  );
}

export default Other;
