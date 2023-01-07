const fs = require('fs');

const fetchFiles = (path, ending) => {
    return fs.readdirSync(path).filter(file => file.endsWith(ending));
}

module.exports = {
    fetchFiles
}