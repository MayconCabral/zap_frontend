export const check = (urlPath) => {

  if (urlPath) {
    return urlPath.includes('/chat') ? true : false;
  }

}
