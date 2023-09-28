import cookies from './cookies';
import jwt_decode from 'jwt-decode';

export const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
};

export const shortenName = (name: string) => {
    const splitName = name.split(' ');
    const lastName = splitName[splitName.length - 1];
    return `${splitName[0]} ${lastName[0]}.`;
};

export const slugify = (text: string) => {
    return text.toString().toLowerCase().replace(/\s+/g, '-'); // Replace spaces with -
    // .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    // .replace(/\-\-+/g, '-') // Replace multiple - with single -
    // .replace(/^-+/, '') // Trim - from start of text
    // .replace(/-+$/, ''); // Trim - from end of text
};

export const isValidEmail = (email: string) => {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

// export const decodeUserToken = (token: string) => {
//     const finalToken = token ?? cookies.get('auth');
//     return jwt_decode(finalToken) as AuthToken;
// };
