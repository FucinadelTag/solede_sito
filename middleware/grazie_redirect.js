export default function ({ route, redirect }) {
  // If the user is not authenticated
  console.log(route.query.url_redirect);
  // if (!store.state.authenticated) {
  return redirect(route.query.url_redirect)
  // }
}
