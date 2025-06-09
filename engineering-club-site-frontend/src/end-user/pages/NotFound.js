import { Container, Row } from "react-bootstrap";
import NotFoundAnimation from "../../components/animation/NotFoundAnimation";
import UseTitleName from "../../components/UseTitleName";
import { useNavigate } from "react-router-dom";

function NotFound() {
  UseTitleName("Page Not Found | OCU Engineering Club");

  const navigate = useNavigate();

  return (
    <Container fluid className="p-0 m-0" data-aos="fade-up">
      <Row className="my-5 p-0 m-0">
        <div className="m-0 p-0 col-lg-7">
          <div className="d-lg-none mx-4">
            <h1 className="mb-0">Lost at Sea</h1>
            <div className="divider pt-1 bg-white rounded"></div>
          </div>
          <div>
            <NotFoundAnimation />
          </div>
        </div>
        <div className="m-0 p-0 col-lg-4">
          <div className="d-none d-lg-block">
            <h1 className="mb-0">Lost at Sea</h1>
            <div className="divider pt-1 bg-white rounded"></div>
          </div>
          <div className="mt-3">
            <h4 className="text-center text-lg-start mx-4 mx-lg-0">
              Land ho? Nay! This page be swallowed by the sea, never to be seen
              again!
            </h4>
            <div className="d-flex justify-content-center">
              <button type="button" class="btn btn-light btn-lg mt-2 fw-bold" onClick={() => navigate("/")}>
                Sail Home
              </button>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default NotFound;
