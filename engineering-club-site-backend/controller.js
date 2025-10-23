const { response } = require('./app');
const Article = require('./article_model');
const News = require('./news_model');
const Comment = require('./comment_model');
const SuperAdmin = require('./superadmin_model');
const Admin = require('./admin_model');

// Articles Controller
const getArticles = (req, res, next) => {
    Article.find()
    .then(response => {
        res.json({response});
    })
    .catch(() => {
        res.json({error: "Internal Server Error."})
    })
};

const addArticles = (req, res, next) => {
    const article = new Article({
        id: Number(req.body.id) + 1,
        title: req.body.title,
        category: req.body.category,
        img: req.body.img,
        date: new Date(),
        body: req.body.body,
        author: req.body.author,
        like: Number(0),
        dislike: Number(0),
        views: Number(0),
        publish: req.body.publish
    })

    article.save()
    .then(response => {
        res.json({response});
    })
    .catch(() => {
        res.json({error: "Internal Server Error."})
    })
};

const updateArticles = (req, res, next) => {
    const id = req.params.id;
    const {title, category, img, body, like, dislike, views, publish} = req.body;

    const articleExist = Article.findOne({id:id});
    if (!articleExist) {
        return res.json({message: "The Article Not Found"});
    }

    Article.findOneAndUpdate({id:id},{$set:{title:title, category:category, img:img, body:body, like:like, dislike:dislike, views:views, publish:publish}})
    .then(response => {
        res.json({response});
    })
    .catch(() => {
        res.json({error: "Internal Server Error."})
    })
};

const deleteArticles = (req, res, next) => {
    const id = req.params.id;
    const articleExist = Article.findOne({id:id});
    if (!articleExist) {
      return res.json({message: "The Article Not Found"});
    }
    Article.findOneAndDelete({id:id})
    .then(() => {
        res.json({message: "The article has been deleted successfully."});
    })
    .catch(() => {
        res.json({error: "Internal Server Error."})
    })
};

// News Controller
const getNews = (req, res, next) => {
    News.find()
    .then(response => {
        res.json({response});
    })
    .catch(() => {
        res.json({error: "Internal Server Error."})
    })
};

// Comment Controller
const getComments = (req, res, next) => {
    Comment.find()
    .then(response => {
        res.json({response});
    })
    .catch(() => {
        res.json({error: "Internal Server Error."})
    })
};

// Superadmin Controller
const getSuperAdmin = (req, res, next) => {
    SuperAdmin.find()
    .then(response => {
        res.json({response});
    })
    .catch(() => {
        res.json({error: "Internal Server Error."})
    })
};

// Admin Controller
const getAdmin = (req, res, next) => {
    Admin.find()
    .then(response => {
        res.json({response});
    })
    .catch(() => {
        res.json({error: "Internal Server Error."})
    })
};

const addAdmin = (req, res, next) => {
    const admin = new Admin({
        id: Number(req.body.id) + 1,
        name: req.body.name,
        email: req.body.email,
        password: `${req.body.name.replace(/\s+/g, '%')}123`
    })

    const {email} = admin;
    Admin.findOne({email})
    .then((adminExist) => {
        if (adminExist) {
            return res.json({message: "The admin already exists."});
        }
            
        admin.save()
        .then(response => {
            res.json({response});
        })
        .catch(() => {
            res.json({error: "Internal Server Error."})
        })
    })
};

const updateAdmin = (req, res, next) => {
    const id = req.params.id;
    const {name, email, password} = req.body;

    const adminExist = Admin.findOne({id:id});
    if (!adminExist) {
        return res.json({message: "The Admin Not Found"});
    }

    Admin.findOneAndUpdate({id:id},{$set:{name:name,email:email,password:password}})
    .then(response => {
        console.log("update "+{id,name,email})
        res.json({response});
    })
    .catch(() => {
        res.json({error: "Internal Server Error."})
    })
};

const deleteAdmin = (req, res, next) => {
    const id = req.params.id;
    const adminExist = Admin.findOne({id:id});
    if (!adminExist) {
      return res.json({message: "The Admin Not Found"});
    }
    Admin.findOneAndDelete({id:id})
    .then(() => {
        res.json({message: "The admin has been deleted successfully."});
    })
    .catch(() => {
        res.json({error: "Internal Server Error."})
    })
};

exports.getArticles = getArticles;
exports.addArticles = addArticles;
exports.updateArticles = updateArticles;
exports.deleteArticles = deleteArticles;
exports.getNews = getNews;
exports.getComments = getComments;
exports.getSuperAdmin = getSuperAdmin;
exports.getAdmin = getAdmin;
exports.addAdmin = addAdmin;
exports.updateAdmin = updateAdmin;
exports.deleteAdmin = deleteAdmin;