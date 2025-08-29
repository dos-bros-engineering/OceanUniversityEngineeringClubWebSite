import UseTitleName from "../../utils/UseTitleName";
import PaginationPostGrid from "../../components/post grid/PaginationPostGrid";
import { useData } from "../../utils/DataContext";

const Other = () => {
  UseTitleName("Other | OCU Engineering Club");
  const { articles } = useData();

  // Filter posts by category
  const otherPosts = articles.filter(post => post.category === "Other" && post.publish).sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      <PaginationPostGrid posts={otherPosts} styleType={"post-grid"} />
    </>
  );
}

export default Other;
