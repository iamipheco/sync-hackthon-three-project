import { TOKEN_KEY, authenticatedFetchApi } from ".";

export const init = (success=f=>f, error=f=>f) => {
    const token = localStorage.getItem(TOKEN_KEY)
    if(token) {
        // token found, get user info
        authenticatedFetchApi('users/user')
            .then((resp) => {
                // console.log(resp);
                if (resp && resp.success) {
                    success(resp.message)
                } else {
                    // error returned
                    error(resp)
                localStorage.removeItem(TOKEN_KEY)
            }
            })
            .catch((err) => {
                // request failed
                localStorage.removeItem(TOKEN_KEY)
                error(err)
                console.log(err);
            });
    } else {
        // token not found
        // go to login page
        error()
    }
}