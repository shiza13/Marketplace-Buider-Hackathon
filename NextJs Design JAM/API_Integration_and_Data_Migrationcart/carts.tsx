import Header from "../components/header"
import Footer from "../components/footer"
import Image from "next/image"
export default function ShoppingCart(){
  return(
   <div>
    <Header/>
    <div><Image src="/Shopping basket.png" alt="" layout="responsive"
  width={16}
  height={9} />
    <button className="shopping-basket-button"></button></div>
    <Footer/>
    </div>

  )}
