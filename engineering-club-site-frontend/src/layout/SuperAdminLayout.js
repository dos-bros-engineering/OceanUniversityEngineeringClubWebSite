import { Outlet } from "react-router-dom";
import Footer from "../components/footer/AdminFooter";
import Header from "../components/header/SuperAdminHeader";
import "./Layout.css";
import LoaderAnimation from "../utils/animation/LoaderAnimation"
import ErrorAnimation from "../utils/animation/ErrorAnimation";
import { useData } from "../utils/DataContext";

const SuperAdminLayout = () => {
  const { isPendingSuperAdmin, isPendingAdmin, isPendingArticles, isPendingNews, isPendingComments, errorSuperAdmin, errorAdmin, errorArticles, errorNews, errorComments } = useData();

  return (
    <div className="Superadmin-App">
      {/* Header */}
      <header>
        <Header />
      </header>

      {/* The animation shown after an error occurs */}
      {(errorSuperAdmin || errorAdmin || errorArticles || errorNews || errorComments) && (
        <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
          <ErrorAnimation />
          <h4>Something went wrong!</h4>
        </div>
      )}

      {/* The animation shown before fetching data */}
      {(isPendingSuperAdmin || isPendingAdmin || isPendingArticles || isPendingNews || isPendingComments) && (
        <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
          <LoaderAnimation />
          <h4 className="mt-3">Loading...</h4>
        </div>
      )}

      {/* page */}
      {!errorSuperAdmin &&
        !errorAdmin &&
        !errorArticles &&
        !errorNews &&
        !errorComments &&
        !isPendingSuperAdmin &&
        !isPendingAdmin &&
        !isPendingArticles &&
        !isPendingNews &&
        !isPendingComments && (
          <main className="min-vh-100">
            <Outlet />
          </main>
        )}

      {/* Footer */}
      <footer>
        <Footer styleType={"footer-superadmin"} />
      </footer>
    </div>
  );
};

export default SuperAdminLayout;