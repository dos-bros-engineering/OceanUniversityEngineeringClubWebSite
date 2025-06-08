import { Container, Row } from "react-bootstrap";
import UseTitleName from "../../components/UseTitleName";
import Slider from "../components/slider/Slider";
import PostGrid2 from "../components/post grid/PostGrid2";
import Sidebar from "../components/sidebar/Sidebar";
import posts from "../../PostData.json";

function News() {
  UseTitleName("News | OCU Engineering Club");

  return (
    <>
      <Container fluid className="p-0 m-0">
        <Row className="p-0 m-0">
          <div className="my-3 p-0" data-aos="fade-up">
            <Slider posts={posts} />
          </div>
        </Row>
        <Row className="p-0 m-0 my-4">
          <div className="col-lg-8" data-aos="fade-up">
            <PostGrid2 posts={posts} />
          </div>
          <div className="col-lg-4">
            <Sidebar />
          </div>
        </Row>
      </Container>
    </>
  );
}

export default News;
