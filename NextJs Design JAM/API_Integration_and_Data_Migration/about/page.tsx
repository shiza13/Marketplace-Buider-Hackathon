import { FaTruckFast } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import Image from "next/image";
export default function About(){
    return(
        <div>
      
      
      <ul className="web-header">
        
        <div className="top-about"><FaTruckFast className="truck-logo"/>
        Free delivery on all orders over £50 with code easter checkout 
  <button><RxCross2 /> </button>
  
  </div>
       <div className="chair-header">
          
          <div className="avion"><Link href="/">Avion</Link></div>
        <div className="about-contact">
          <li><Link href="/about">About us</Link></li>
<li><Link href="contact">Contact</Link></li>
<li><Link href="/blog">Blog</Link></li>
<a href="search">
<Image src="/Search.png"  alt=""layout="responsive"
  width={16}
  height={9}/>
</a>
<a href="shopping-baskets">
    <Image src="/Shopping--cart.png" alt="" layout="responsive"
  width={30}
  height={16} />
  </a>
  <a href="about">
    <Image src="/User--avatar.png" alt="" layout="responsive"
  width={16}
  height={9} />
  </a>
</div>
            
  </div>
        
        <div className="header-about">
            <div className="second-header-about" >
            <li><Link href="/product-listing">All Products</Link></li>
        <li><Link href="/plant-pots">Plant pots</Link></li>
<li><Link href="ceramics">Ceramics</Link></li>
<li><Link href="/tables">Tables</Link></li>
<li><Link href="/chairs">Chairs</Link></li>
<li><Link href="/crockery">Crockery</Link></li>
<li><Link href="/tableware">Tableware</Link></li>
<li><Link href="/cutlery">Cutlery</Link></li>
</div>

      

        </div>
</ul>        



<div className="about-image-container">
  <Image src="/Page Headers.png" alt="" layout="responsive"
  width={0}
  height={0} className="image-aboutview"/>
  <button className="about-view-products"></button>
</div><br/><br/>
<div className="abouttwopic-container">
    <div><Image src="/Text Block.png" alt=""layout="responsive"
  width={16}
  height={9} className="about-text-blockImage" /><button className="view-collection"></button>
    </div>
    <div><Image src="/Image Block.png" alt="" layout="responsive"
  width={16}
  height={9}className="about-block-Image" /></div>

    </div>

<div><Image src="/Features.png" alt=""layout="responsive"
  width={16}
  height={9} className="features-png" /><button className="aboutfeatures-button"></button></div>

<div className="txt-brand">What makes our brand different</div>
    <div className="aboutcontainer-row">
  <div className="container-17">
    
    <Image src="/Feature block.png" alt="" layout="responsive"
  width={16}
  height={9} />
  </div>
  <div className="container-18">
    
  <Image src="/Feature block (1).png"  alt="" layout="responsive"
  width={16}
  height={9} />
  </div>
  <div className="container-19">
    
  <Image src="/Feature block (2).png" alt="" layout="responsive"
  width={16}
  height={9} />
  </div>
  <div className="container-20">
   
  <Image src="/Feature block (3).png" alt="" layout="responsive"
  width={16}
  height={9} />
  </div>
</div>

<div className="aboutlast-div">
    <div className="aboutlast-2"><Image src="/Container.png" alt=""className="aboutemail-box" layout="responsive"
  width={16}
  height={9}  /></div>
  <input type="text" placeholder="your@email.com" className="aboutinput-email" />
  <button className="aboutemail-signup-button">Sign up</button>
</div>


<footer className="bg-purple-900 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="font-bold text-lg">Avion</h3>
          <address className="not-italic mt-4 text-sm">
            21 New York Street <br />
            New York City <br />
            United States of America <br />
            432 34
          </address>
          <p className="text-sm mt-4">&copy; 2022 Avion LTD</p>
        </div>

        {/* Social Links */}
        <div className="space-y-4">
          <h6 className="text-sm text-white font-medium">SOCIAL MEDIA</h6>
          <ul className="flex space-x-4">
            <li>
              <a href='javascript:void(0)'>
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-600 w-8 h-8" viewBox="0 0 49.652 49.652">
                  <path d="M24.826 0C11.137 0 0 11.137 0 24.826c0 13.688 11.137 24.826 24.826 24.826 13.688 0 24.826-11.138 24.826-24.826C49.652 11.137 38.516 0 24.826 0zM31 25.7h-4.039v14.396h-5.985V25.7h-2.845v-5.088h2.845v-3.291c0-2.357 1.12-6.04 6.04-6.04l4.435.017v4.939h-3.219c-.524 0-1.269.262-1.269 1.386v2.99h4.56z" data-original="#000000" />
                </svg>
              </a>
            </li>
            <li>
              <a href='javascript:void(0)'>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 112.196 112.196">
                  <circle cx="56.098" cy="56.097" r="56.098" fill="#007ab9" data-original="#007ab9" />
                  <path fill="#fff" d="M89.616 60.611v23.128H76.207V62.161c0-5.418-1.936-9.118-6.791-9.118-3.705 0-5.906 2.491-6.878 4.903-.353.862-.444 2.059-.444 3.268v22.524h-13.41s.18-36.546 0-40.329h13.411v5.715c-.027.045-.065.089-.089.132h.089v-.132c1.782-2.742 4.96-6.662 12.085-6.662 8.822 0 15.436 5.764 15.436 18.149zm-54.96-36.642c-4.587 0-7.588 3.011-7.588 6.967 0 3.872 2.914 6.97 7.412 6.97h.087c4.677 0 7.585-3.098 7.585-6.97-.089-3.956-2.908-6.967-7.496-6.967zm-6.791 59.77H41.27v-40.33H27.865v40.33z" data-original="#f1f2f2" />
                </svg>
              </a>
            </li>
            <li>
              <a href='javascript:void(0)'>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 152 152">
                  <linearGradient id="a" x1="22.26" x2="129.74" y1="22.26" y2="129.74" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#fae100" />
                    <stop offset=".15" stop-color="#fcb720" />
                    <stop offset=".3" stop-color="#ff7950" />
                    <stop offset=".5" stop-color="#ff1c74" />
                    <stop offset="1" stop-color="#6c1cd1" />
                  </linearGradient>
                  <g data-name="Layer 2">
                    <g data-name="03.Instagram">
                      <rect width="152" height="152" fill="url(#a)" data-original="url(#a)" rx="76" />
                      <g fill="#fff">
                        <path fill="#ffffff10" d="M133.2 26c-11.08 20.34-26.75 41.32-46.33 60.9S46.31 122.12 26 133.2q-1.91-1.66-3.71-3.46A76 76 0 1 1 129.74 22.26q1.8 1.8 3.46 3.74z" data-original="#ffffff10" />
                        <path d="M94 36H58a22 22 0 0 0-22 22v36a22 22 0 0 0 22 22h36a22 22 0 0 0 22-22V58a22 22 0 0 0-22-22zm15 54.84A18.16 18.16 0 0 1 90.84 109H61.16A18.16 18.16 0 0 1 43 90.84V61.16A18.16 18.16 0 0 1 61.16 43h29.68A18.16 18.16 0 0 1 109 61.16z" data-original="#ffffff" />
                        <path d="m90.59 61.56-.19-.19-.16-.16A20.16 20.16 0 0 0 76 55.33 20.52 20.52 0 0 0 55.62 76a20.75 20.75 0 0 0 6 14.61 20.19 20.19 0 0 0 14.42 6 20.73 20.73 0 0 0 14.55-35.05zM76 89.56A13.56 13.56 0 1 1 89.37 76 13.46 13.46 0 0 1 76 89.56zm26.43-35.18a4.88 4.88 0 0 1-4.85 4.92 4.81 4.81 0 0 1-3.42-1.43 4.93 4.93 0 0 1 3.43-8.39 4.82 4.82 0 0 1 3.09 1.12l.1.1a3.05 3.05 0 0 1 .44.44l.11.12a4.92 4.92 0 0 1 1.1 3.12z" data-original="#ffffff" />
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </li>
            <li>
              <a href='javascript:void(0)'>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 1227 1227">
                  <path d="M613.5 0C274.685 0 0 274.685 0 613.5S274.685 1227 613.5 1227 1227 952.315 1227 613.5 952.315 0 613.5 0z" data-original="#000000" />
                  <path fill="#fff" d="m680.617 557.98 262.632-305.288h-62.235L652.97 517.77 470.833 252.692H260.759l275.427 400.844-275.427 320.142h62.239l240.82-279.931 192.35 279.931h210.074L680.601 557.98zM345.423 299.545h95.595l440.024 629.411h-95.595z" data-original="#ffffff" />
                </svg>
              </a>
            </li>
          </ul>
          <div className="!mt-8">
            <h6 className="text-[13px] text-gray-400 font-medium">Get exclusive assets sent straight to your inbox</h6>
            <div className="mt-4">
              <a href="javascript:void(0)" className="bg-blue-600 hover:bg-blue-700 text-sm text-white font-medium py-3 px-6 tracking-wide rounded">Sign up</a>
            </div>
          </div>
        </div>
      




   

        {/* Menu, Categories, and Our Company */}
        <div className="md:col-span-3 text-right">
          <div className="flex justify-end space-x-8">
            {/* Menu */}
            <div>
              <h3 className="font-bold text-lg">Menu</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-gray-400">
                    New arrivals
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Best sellers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Recently viewed
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Popular this week
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                  <Link href="/product-listing">All Products</Link> 
                  </a>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="font-bold text-lg">Categories</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Crockery
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Furniture
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Homeware
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Plant pots
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                  <Link href="/chairs"> Chairs</Link>
                  </a>
                </li>
              </ul>
            </div>

            {/* Our Company */}
            <div>
              <h3 className="font-bold text-lg">Our Company</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-gray-400">
                  <Link href="/about"> About us</Link>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Vacancies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Returns policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    
    
          <hr className="my-6 border-gray-600" />

<div className="max-w-screen-xl mx-auto text-center">
  <p className="text-gray-400 text-[13px]">
  Copyright 2022 Avion LTD
  </p></div>
        </div>
      
      
    </footer>

</div>

        
    )
}

