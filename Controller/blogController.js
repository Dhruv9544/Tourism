const BlogData = require("../model/BlogDataModel");

//Add Blog

// module.exports.addBlog = async function (req, res) {
//   try {
//     let Blog = new BlogData(req.body);
//     console.log(Blog);

//     let data = await Blog.save();

//     res.json({ data: data, msg: "Blog Added", rcode: 200 });
//   } catch (error) {
//     if (error.name === "ValidationError") {
//       return res.status(400).json({ message: error.message });
//     }
//   }
// };

// get All Blogs

module.exports.getAllBlogs = async function (req, res) {
  BlogData.find(req.query)
    .then((data) => {
      res.json({ data: data, msg: "All Blogs retrived", rcode: 200 });
    })
    .catch((err) => {
      res.json({ data: err, msg: "smw", rcode: -9 });
    });
};

// delete blogs

module.exports.deleteBlogs = async function (req, res) {
  let BlogId = req.params.BlogId;

  BlogData.findByIdAndDelete({ _id: BlogId })
    .then((data) => {
      res.json({ data: data, msg: "Blog deleted", rcode: 200 });
    })
    .catch((err) => {
      res.json({ data: err, msg: "smw", rcode: -9 });
    });
};

//update blogs

module.exports.updateBlogs = function (req, res) {
  console.log(req.body);
  let BlogId = req.params.BlogId;
  let Title = req.body.Title;
  let Author_Name = req.body.Author_Name;
  let About = req.body.About;
  let Category = req.body.Category;

  BlogData.findByIdAndUpdate(
    { _id: BlogId },
    { Title: Title, Author_Name: Author_Name, About: About, Category: Category }
  )
    .then(async (data) => {
      await res.json({ msg: "blog updated", data: data, rcode: 200 });
    })
    .catch((err) => {
      res.json({ msg: "blog updation fail", data: data, rcode: -9 });
    });
};
