import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import {ProductDetailPage, ProductsPage, Home, Error2, AboutPage} from "./pages"
import { loader as productsLoader } from "./pages/ProductsPage";
import { loader as productDeatilLoader} from "./pages/ProductDetailPage"


const router = createBrowserRouter([
  {
    path: "",
    element : <Main />,
    errorElement :<Error2/>,
    children : [
      {path : "/", element : <Home/>},
      {path : "/ProductsPage", element : <ProductsPage />, loader : productsLoader},
      {path : "/ProductsPage/:postID", element : <ProductDetailPage/>, loader : productDeatilLoader},
      {path : "/AboutPage", element : <AboutPage />},
    ]
    
  }
])

function App() {
  
  return (
    <>
      <RouterProvider router ={router}/>
    </>
  );
}

export default App;
