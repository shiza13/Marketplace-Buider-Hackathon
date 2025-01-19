import Header from "../components/header"
import Footer from "../components/footer"
import Image from "next/image";
import { MdArrowDropDown } from "react-icons/md";
export default function ShoppingCart(){
  return(
   <div>
    <Header/>
    <div>
        <Image src="/Page Headers (1).png" alt="" layout="responsive"
  width={16}
  height={9} />
    </div>
    <div className="product-main-div">
  <div className="left-section">
    <span className="product-button">Category ▼</span>
    <span className="product-button">Product type ▼</span>
    <span className="product-button">Price ▼</span>
    <span className="product-button">Brand ▼</span>
  </div>
  <div className="right-section">
    <span className="product-button">Sorting by:</span>
    <span className="product-button">Date added ▼</span>
  </div>
</div>
<div className="chaircontainer-row">
  <div className="container-9">
    
    <Image src="/Product Card.png" alt="" layout="responsive"
  width={16}
  height={9} />
  </div>
  <div className="container-10">
    
  <Image src="/Product Card (1).png" alt=""  layout="responsive"
  width={16}
  height={9}/>
  </div>
  <div className="container-11">
    
  <Image src="/Product Card (2).png" alt=""layout="responsive"
  width={16}
  height={9} />
  </div>
  <div className="container-12">
   
  <Image src="/Product Card (3).png"  alt="" layout="responsive"
  width={16}
  height={9}/>
  </div>
</div>
<div className="chaircontainer-row">
  <div className="container-9">
    
    <Image src="/Product Card (4).png" alt="" layout="responsive"
  width={16}
  height={9} />
  </div>
  <div className="container-10">
    
  <Image src="/Product Card (5).png" alt="" layout="responsive"
  width={16}
  height={9}/>
  </div>
  <div className="container-11">
    
  <Image src="/Product Card (6).png" alt="" layout="responsive"
  width={16}
  height={9}/>
  </div>
  <div className="container-12">
   
  <Image src="/Product Card (7).png"  alt="" layout="responsive"
  width={16}
  height={9}/>
  </div>
</div>
<div className="chaircontainer-row">
  <div className="container-9">
    
    <Image src="/Product Card.png" alt="" layout="responsive"
  width={16}
  height={9} />
  </div>
  <div className="container-10">
    
  <Image src="/Product Card (1).png" alt="" layout="responsive"
  width={16}
  height={9}/>
  </div>
  <div className="container-11">
    
  <Image src="/Product Card (2).png" alt="" layout="responsive"
  width={16}
  height={9}/>
  </div>
  <div className="container-12">
   
  <Image src="/Product Card (3).png" alt=""  layout="responsive"
  width={16}
  height={9}/>
  </div>
</div>
<button><Image src="/Button Medium.png" alt="" layout="responsive"
  width={16}
  height={9} className="view" /></button>

    <br/>
    <Footer/>
    </div>

  )}