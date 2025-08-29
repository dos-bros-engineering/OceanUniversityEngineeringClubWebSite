import UseTitleName from "../../utils/UseTitleName";
import PaginationPostGrid from "../../components/post grid/PaginationPostGrid";
import { useData } from "../../utils/DataContext";

const ShipType = () => {
  UseTitleName("Ship Type | OCU Engineering Club");
  const { articles } = useData();

  // Filter posts by category
  const shipTypePosts = articles.filter(post => post.category === "Ship Type" && post.publish).sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      <PaginationPostGrid posts={shipTypePosts} styleType={"post-grid"} />
    </>
  );
}

export default ShipType;