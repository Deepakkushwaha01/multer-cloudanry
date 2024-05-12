import multer from "multer";
import fs from "fs";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // for the destionation , we make it dynamic

    const folderPath = `temp/${req.body.name}/`;

    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }
    
/*     req.body.folder = folderPath; */

    cb(null, folderPath);
  },

  filename: function (req, file, cb) {
    // for the file name
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const fileType = ["image/jpeg", "image/png"];

const fileFilter = (req, file, cb) => {
  // we can check here file is already saved aur not from the database and check our desired file type
  if (fileType.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb({message:"File Type is not acceptable"},false)
  }
};

export const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 },        // this is for max limit file isse upper ki file save nahi hogi
  fileFilter: fileFilter,                   // this is for filter
});
