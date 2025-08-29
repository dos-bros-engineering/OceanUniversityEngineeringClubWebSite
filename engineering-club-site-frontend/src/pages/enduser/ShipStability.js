import UseTitleName from "../../utils/UseTitleName";
import PaginationPostGrid from "../../components/post grid/PaginationPostGrid";
import { useData } from "../../utils/DataContext";

const ShipStability = () => {
  UseTitleName("Ship Stability | OCU Engineering Club");
  const { articles } = useData();

  // Filter posts by category
  const shipStabilityPosts = articles.filter(post => post.category === "Ship Stability" && post.publish).sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      <PaginationPostGrid posts={shipStabilityPosts} styleType={"post-grid"} />
    </>
  );
}

export default ShipStability;
