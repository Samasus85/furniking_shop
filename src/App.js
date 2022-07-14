import { Route, Routes } from "react-router-dom";
import { Footer, Header, Home, Product, Cart, Wishlist, Profile, Catalog, Contact, Notfound, About, Blog,  Accordion, PolicyPage } from "./components";

function App() {
  return (
    <div className="text-2xl h-screen">
      <Header/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="cart" element={<Cart/>}/>
          <Route path="wishlist" element={<Wishlist/>}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path="catalog" element={<Catalog/>}/>
          <Route exact path="catalog/:id" element={<Product/>}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="about" element={<About/>} />
          <Route path="*" element={<Notfound />}/>
          <Route path="blog" element={<Blog />}/>
          <Route path="policy" element={<PolicyPage />}/>
          <Route path="accordion" element={<Accordion />}/>
      </Routes>
      <Footer/>
    </div>
  )
};
export default App;