import UseTitleName from "../../utils/UseTitleName";
import PaginationPostGrid from "../../components/post grid/PaginationPostGrid";
import { useData } from "../../utils/DataContext";

const Pumps = () => {
  UseTitleName("Pumps | OCU Engineering Club");
  const { articles } = useData();

  // Filter posts by category
  const pumpsPosts = articles.filter(post => post.category === "Pumps" && post.publish).sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      <PaginationPostGrid posts={pumpsPosts} styleType={"post-grid"} />
    </>
  );
}

export default Pumps;