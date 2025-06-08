import { Container, Row } from "react-bootstrap";
import UseTitleName from "../../components/UseTitleName";
import Slider from "../components/slider/Slider";
import PostGrid from "../components/post grid/PostGrid";
import posts from "../../PostData.json";

function Home() {
  UseTitleName("OCU Engineering Club");

  return (
    <>
      <Container fluid className="p-0 m-0" data-aos="fade-up">
        <Row className="p-0 m-0">
          <div className="my-3 p-0">
            <Slider posts={posts} />
          </div>
        </Row>
        <Row className="p-0 m-0 mt-4">
          <div className="col-lg-6" data-aos="fade-left">
            <PostGrid posts={posts} category="News" />
          </div>
          <div className="col-lg-6" data-aos="fade-right">
            <PostGrid posts={posts} category="Latest Article" />
          </div>
        </Row>
        <Row className="p-0 m-0 mt-4" data-aos="fade-up">
          <div>
            <PostGrid posts={posts} category="Pumps" />
          </div>
        </Row>
        <Row className="p-0 m-0 mt-4" data-aos="fade-up">
          <div>
            <PostGrid posts={posts} category="Ship Constructions" />
          </div>
        </Row>
        <Row className="p-0 m-0 mt-4">
          <div className="col-lg-6" data-aos="fade-left">
            <PostGrid posts={posts} category="Ship Stability" />
          </div>
          <div className="col-lg-6" data-aos="fade-right">
            <PostGrid posts={posts} category="Ship Type" />
          </div>
        </Row>
        <Row className="p-0 m-0 my-4" data-aos="fade-up">
          <div>
            <PostGrid posts={posts} category="Other" />
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Home;
