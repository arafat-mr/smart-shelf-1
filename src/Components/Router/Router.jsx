import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from "../Root/Root";
import Home from "../Home/Home";
import BookShelf from "../BookShelf/BookShelf";
import LogIn from "../../Pages/LogIn";
import SignUp from "../../Pages/SignUp";
import AddBook from "../AddBook/AddBook";
import MyBooks from "../MyBooks/MyBooks";
import PrivateRoute from "../../Context/PrivateRoute";
import Profile from "../Profile/Profile";
import BookDetails from "../BookDetails/BookDetails";
import UpdateBook from "../UpdateBook/UpdateBook";
import Error from '../../Components/Error/Error'
import ShelfBookDetails from "../BookDetails/ShelfBookDetails";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error/>,
    Component: Root,
    children:[
        {
            index: true,
            Component: Home
        },
        {
            path:'/bookShelf',
            Component: BookShelf
        },
        {
       path:'/bookShelf/:id',
       element: <PrivateRoute>
        <ShelfBookDetails/>
       </PrivateRoute>,
       loader:()=>fetch('https://virtual-bookshelf-server-ruddy.vercel.app/books')
        },
        {
            path:'/login',
            Component:LogIn
        },
        {
          path:'/signup',
          Component:SignUp
        },
        {
          path:'/addBook',
         element: <PrivateRoute>
          <AddBook/>
         </PrivateRoute>
        },
        {
          path:'/myBooks',
         element:<PrivateRoute>
          <MyBooks/>
         </PrivateRoute>
        },
        {
          path:'/profile',
          element:<PrivateRoute>
            <Profile/>
          </PrivateRoute>
        },
        {
          path:'/books/:id',
          element:<PrivateRoute>
            <BookDetails/>
          </PrivateRoute>,
         loader: ()=>fetch('https://virtual-bookshelf-server-ruddy.vercel.app/books')
        },
        {
          path:'/bookShelf/:id',
          element:<PrivateRoute>
            <ShelfBookDetails/>
          </PrivateRoute>
        },
        {
          path:'/myBooks/updateBooks/:id',
          loader:({params})=>fetch(`https://virtual-bookshelf-server-ruddy.vercel.app/books/${params.id}`
          ),
          element:<PrivateRoute>
            <UpdateBook/>
          </PrivateRoute>

        }
    ]
  },
]);

export default router
