### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  - A framework that lets us handle client and server-side react applications.

- What is a single page application?
  - SPA is a web app that interacts with the user by dynamically rewriting the current web page with new data from the server; instead of the default method of loading entire new pages.

- What are some differences between client side and server side routing?
  - Client-side needs to keep making the requests to server in order to rerender the pages while client-side doesn't require it.

- What are two ways of handling redirects with React Router? When would you use each?
  - Using history.push(), it keeps track of the session history for React Router, then we push a new entry to the history stack.
  - The other way is to use <Redirect />

- What are two different ways to handle page-not-found user experiences using React Router? 
  - import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <h1>Oops! You seem to be lost.</h1>
            <p>Here are some helpful links:</p>
            <Link to='/'>Home</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    )
}
  The other way :

- How do you grab URL parameters from within a component using React Router?
  - useParams

- What is context in React? When would you use it?
  - Provides data to the components no matter how deep they are in the elements tree.

- Describe some differences between class-based components and function
  components in React.
    The biggest difference is the keyword "this".

- What are some of the problems that hooks were designed to solve?
  - Wrapper hell, massive components, and confusing classes (specifically has to do with this.)