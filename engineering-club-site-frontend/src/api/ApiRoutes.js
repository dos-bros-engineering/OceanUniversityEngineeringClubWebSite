const BASE_URL = "http://localhost:3001/api";

const ApiRoutes = {
    SUPERADMIN : {
        GET: `${BASE_URL}/superadmin`,
        PATCH: `${BASE_URL}/updatesuperadmin`
    },
    ADMIN : {
        GET: `${BASE_URL}/admin`,
        CREATE: `${BASE_URL}/addadmin`,
        PATCH: `${BASE_URL}/updateadmin`,
        DELETE: `${BASE_URL}/deleteadmin`
    },
    ARTICLE : {
        GET: `${BASE_URL}/articles`,
        CREATE: `${BASE_URL}/addarticles`,
        PATCH: `${BASE_URL}/updatearticles`,
        DELETE: `${BASE_URL}/deletearticles`
    },
    NEWS : {
        GET: `${BASE_URL}/news`,
        CREATE: `${BASE_URL}/addnews`,
        PATCH: `${BASE_URL}/updatenews`,
        DELETE: `${BASE_URL}/deletenews`
    },
    COMMENT : {
        GET: `${BASE_URL}/comments`,
        CREATE: `${BASE_URL}/addcomments`,
        DELETE: `${BASE_URL}/deletecomments`
    }
}

export default ApiRoutes;