import axios from 'axios';

/**
 * Common API method
 * @param {string} method GET | POST | DELETE | PATCH
 * @param {string} url /user/id
 * @param {object} params Query parameters
 * @param {object} body API body / Empty by default
 * @param {object} headers API headers are appended to common headers
 * @param {string} baseURL http://api.example.com
 */
export default async (method, url, params = {}, body = {}, headers = {}) => {
    try {
        const response = await axios({
            method,
            url,
            params: { ...params },
            headers: { ...headers },
            data: body,
        });

        return response.data
    } catch (error) {
        console.error('##Error', error);
        return {
            response: {
            }, error: { ...error }
        };
    }
};
