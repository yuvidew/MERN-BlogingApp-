const multer  = require('multer')
const path = require('path');

// Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './Frontend/src/uploads'); // Destination folder for uploaded files
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + path.extname(file.originalname)); // Unique file name (timestamp + original name)
    },
});

const upload = multer({ storage: storage });

module.exports = upload