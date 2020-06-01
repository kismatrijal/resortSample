import {createClient} from 'contentful';

export default createClient({
    space: process.env.REACT_APP_API_SPACE_ID,
    accessToken:process.env.REACT_APP_API_ACCESS_TOKEN
});