/**
 * Common.js -- miscellaneous routines useful throughout the system
 */


import axios from "axios";

const cookie = getCookie("csrftoken");

/**
 * Get the value of a cookie, given its name
 * Adapted from https://docs.djangoproject.com/en/2.2/ref/csrf/#ajax
 * @param {string} name - The name of the cookie
 */
export function getCookie(name) {
    let cookieValue;
    if (document.cookie && document.cookie !== "") {
        const cookies = document.cookie.split(";");
        for (const rawCookie of cookies) {
            const cookie = rawCookie.trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + "=")) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

export function postRequest(URL, data) {
    return axios.post(URL, data, {
        headers: {
            "X-Requested-With": "XMLHttpRequest",
            "X-CSRFToken": cookie
        }
    });
}
