/**
 * **********************************************************
 * ******************* Library required *********************
 * **********************************************************
 */

path = require('path'),
    fs = require('fs'),
    _ = require('lodash');

/**
 * **********************************************************
 * ******************** Export module ***********************
 * **********************************************************
 */

module.exports = ayoRefry = {

    /**
     * This function allow to remove folder recursively
     * @param itemPath              The folder who must be removed
     */
    rmDir : function(itemPath) {

        // Check if is a directory
        if (fs.statSync(itemPath).isDirectory()) {

            // For each folder, do it again
            _.each(fs.readdirSync(itemPath), function(childItemName) {
                ayoRefry.rmDir(path.join(itemPath, childItemName));
            });

            // Remove folder
            fs.rmdirSync(itemPath);

        }
        // Else it's a file, delete it
        else {
            fs.unlinkSync(itemPath);
        }
    }
}