const TokenStore = require('@zohocrm/nodejs-sdk-2.0/models/authenticator/store/token_store').TokenStore;

class CustomStore extends TokenStore { 
    constructor() {
        super();
    }

    /**
     * @param {UserSignature} user A UserSignature class instance.
     * @param {Token} token A Token (@zohocrm/nodejs-sdk-2.0/models/authenticator/oauth_token) class instance.
     * @returns A Token class instance representing the user token details.
     * @throws {SDKException} if any error occurs.
     */
    getToken(user, token) {
        console.log("getToken called");
        // Add code to get the token
        return null;
    }

    /**
     * 
     * @param {UserSignature} user A UserSignature class instance.
     * @param {Token} token A Token (@zohocrm/nodejs-sdk-2.0/models/authenticator/oauth_token) class instance.
     * @throws {SDKException} if any error occurs.
     */
    saveToken(user, token) {
        console.log("saveToken called");
        console.log("token", token);
        console.log("user", user);
        // Add code to save the token
    }

    /**
     * 
     * @param {Token} token A Token (@zohocrm/nodejs-sdk-2.0/models/authenticator/oauth_token) class instance.
     * @throws {SDKException} if any error occurs.
     */
    deleteToken(token) {
        console.log("deleteToken");
        // Add code to delete the token
    }

    /**
     * @returns {Array} - An array of Token class instances
     * @throws {SDKException}
     */
    getTokens() {
        console.log("getTokens");
        //Add code to retrieve all the stored tokens.
    }

    /**
     * @throws {SDKException}
     */
    deleteTokens() {
        console.log("deleteTokens");
        //Add code to delete all the stored tokens.
    }

    /**
      * @param {String} id A string.
      * @param {Token} token A Token (com\zoho\api\authenticator\OAuthToken) class instance.
      * @return A Token class instance representing the user token details.
      * @throws SDKException if any problem occurs.
    */
    getTokenById(id, token) {
        console.log("getTokenById");
      // Add code to get the token using unique id
    }
}

module.exports = { CustomStore }