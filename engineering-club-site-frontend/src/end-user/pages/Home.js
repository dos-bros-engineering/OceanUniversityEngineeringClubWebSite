import { Container, Row } from "react-bootstrap";
import UseTitleName from "../../components/UseTitleName";
import Slider from "../components/slider/Slider";
import PostGrid from "../components/post grid/PostGrid";
import posts from "../../PostData.json";

function Home() {
  UseTitleName("OCU Engineering Club");

  // Filter posts by category
  const newsPosts = posts.filter(post => !post.category);
  const pumpsPosts = posts.filter(post => post.category === "Pumps");
  const shipConstructionsPosts = posts.filter(post => post.category === "Ship Constructions");
  const shipStabilityPosts = posts.filter(post => post.category === "Ship Stability");
  const shipTypePosts = posts.filter(post => post.category === "Ship Type");
  const otherPosts = posts.filter(post => post.category === "Other");

  return (
    <>
      <Container fluid className="p-0 m-0">
        <Row className="p-0 m-0">
          <div className="my-3 p-0" data-aos="fade-up">
            <Slider posts={posts} />
          </div>
        </Row>
        <Row className="p-0 m-0 mt-4">
          <div className="col-lg-6" data-aos="fade-left">
            <PostGrid posts={newsPosts} category="News" />
          </div>
          <div className="col-lg-6" data-aos="fade-right">
            <PostGrid posts={posts} category="Latest Article" />
          </div>
        </Row>
        <Row className="p-0 m-0 mt-4" data-aos="fade-up">
          <div>
            <PostGrid posts={pumpsPosts} category="Pumps" />
          </div>
        </Row>
        <Row className="p-0 m-0 mt-4" data-aos="fade-up">
          <div>
            <PostGrid posts={shipConstructionsPosts} category="Ship Constructions" />
          </div>
        </Row>
        <Row className="p-0 m-0 mt-4">
          <div className="col-lg-6" data-aos="fade-left">
            <PostGrid posts={shipStabilityPosts} category="Ship Stability" />
          </div>
          <div className="col-lg-6" data-aos="fade-right">
            <PostGrid posts={shipTypePosts} category="Ship Type" />
          </div>
        </Row>
        <Row className="p-0 m-0 my-4" data-aos="fade-up">
          <div>
            <PostGrid posts={otherPosts} category="Other" />
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Home;
