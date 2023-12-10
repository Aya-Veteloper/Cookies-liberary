const cookieHandler = {
  setCookie: (name, value, days) => {
    const expiredDate = new Date();
    expiredDate.setDate(expiredDate.getDate() + days);
    const cookieString = `${name}=${value};expires=${expiredDate.toUTCString()}`;
    document.cookie = cookieString;
  },

  getCookie: (name) => {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + "=")) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  },

  deleteCookie: (name) => {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
  },
};
