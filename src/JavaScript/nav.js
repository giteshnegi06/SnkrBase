function navbar() {
    const Menudata = [
        { name: "Home", href: "../src/index.html" },
        { name: "Products", href: "#" },
        { name: "Sale", href: "#" },
        { name: "AboutUs", href: "#" },
    ]

    const menu = Menudata.map((i) => {
        return `
           <li class=" hover:decoration-green-700 hover:text-green-700 hover:animate-pulse duration-400"><a
                        href=${i.href}>${i.name}</a></li>`
    }).join('')

    const login = [
        { name: "Help", href: "#" },
        { name: "OrderandRetuen", href: "#" },
        { name: "Sign up", href: "#", onclick: "openSignupPopup()" },
        { name: "Log in", href: "../Pages/login.html" },
    ]

    const menu2 = login.map((i) => {
        if (i.onclick) {
            return `<li><a href=${i.href} onclick="${i.onclick}" class="hover:underline duration-500">${i.name}</a></li>`
        }
        return `<li><a href=${i.href} class="hover:underline duration-500">${i.name}</a></li>`
    }).join('')

    return `
     <nav class="flex justify-between px-10 text-2xl bg-black text-white sticky">
            <h1><a href="./index.html"><img src="../src/images/Logo/snkr.png" alt="Logo"
                        class="h-20 py-0.5 bg-blend-color"></a></h1>

            <ul class="hidden md:flex space-x-6 py-5 font-mono ml-50 gap-10" id="ul1">
            ${menu}
            </ul>

            <div class="hidden md:flex space-x-6 font-medium">
                <ul class="text-[15px] flex gap-5 font-mono absolute top-1.5 right-8">
                ${menu2}
                </ul>
            </div>

            <div class="hidden md:flex space-x-6 font-medium">
                <ul class="gap-4 list-none flex absolute top-9 right-10">
                    <li> <button class="h-5 top-1 absolute right-23 text-black"><i
                                class="fa-solid fa-magnifying-glass hover:opacity-80"></i></button></li>
                    <li><input type="text" placeholder="Search"
                            class="bg-white border-none rounded-3xl px-4 h-[29px] w-50 text-black text-[14px] hover:bg-gray-200">
                    </li>
                    <li><a href="#"><i
                                class="fa-duotone fa-regular fa-heart opacity-50 hover:opacity-100 hover:text-red-600 my-2 duration-400"></i></a>
                    </li>
                    <li><a href="#"><i class="fa-solid fa-bag-shopping opacity-50 hover:opacity-100 my-1.5 duration-400"></a></i>
                    </li>
                </ul>
            </div>
            <div class="md:hidden">
                <i class="fa-solid fa-bars text-white py-7"></i>
            </div>
        </nav>
    `
}

document.getElementById("navbar").innerHTML = navbar();


// this is body 

function openSignupPopup() {
    event.preventDefault();
    const popup = document.getElementById("popup");
    popup.classList.remove("opacity-0", "pointer-events-none");
    popup.classList.add("opacity-100");
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.classList.add("opacity-0", "pointer-events-none");
    popup.classList.remove("opacity-100");
}



function home(){

     const video = [
        {href:"#" , src:"../src/video/It039s worth it. Air Jordan 4 Retro SE 039Wet Cement039 2024 Video in 2025  Air jordan 4 retro Air jordans Jordans.mp4"},
        {href:"#" , src:"../src/video/ADIDAS ORIGINALS SAMBA OG - AFEWSTORE Video  Schuhe Bewegte bilder.mp4"},
        {href:"#" , src:"../src/video/Nike Dunk  Nike shoes men Soccer cleats nike Nike.mp4"}
     ]

     const data = video.map((i)=>{
    
        return `<a href=${i.href}><video muted loop autoplay
                src="${i.src}"></video></a>`
    }).join('')


    const adidas = [
        {href:"../src/adibuy.html" , src:"../src/images/addi/Samba_OG_Shoes_Black_B75807_01_standard.avif" , name:"Handball Spezial Shoes" , price:"₹3000"},
        {href:"#" , src:"../src/images/addi/Samba_OG_Shoes_White_B75806_01_00_standard.avif" , name:"Samba OG Shoes" , price:"₹2800"},
        {href:"#" , src:"../src/images/addi/Samba_OG_Shoes_White_IH4881_01_standard.avif" , name:"Samba OG Shoes" , price:"₹2750"}

    ]

    const addi = adidas.map((i)=>{

        return `<div class="hover:border-1 pb-5 mb-10 shadow-md">
        <a href=${i.href}>
            <img src="${i.src}" alt=${i.name}>
             <div class="pl-2 pt-1.5"> 
            <span class="py-3 font-bold text-[25px] z-auto">${i.price}</span><br>
            <a href="#" class="font-bold text-[20px]">${i.name}</a>
            <p>Men Originals</p>
            </div>
            </a>
            
        </div>`
    }).join('')


    const nike = [
        {href:"#" , src:"../src/images/NikeShoes/NIKE+DUNK+LOW+RETRO.jpg" , name:"Nike Dunk Low Retro" , price:"₹2800"},
        {href:"#" , src:"../src/images/NikeShoes/NIKE+DUNK+LOW+(GS) (2).jpg" , name:"Nike Dunk Low" , price:"₹2650"},
        {href:"#" , src:"../src/images/NikeShoes/NIKE+DUNK+LOW+RETRO (1).jpg" , name:"Nike Dunk Low Retro" , price:"₹3000"}

    ]
    const nik = nike.map((i)=>{

        return `<div class="hover:border-1 duration-75 pb-5 mb-10 shadow-md">
        <a href=${i.href}>
        
            <img src="${i.src}" alt=${i.name}>
           <div class="pl-2 pt-1.5"> 
           <span class="py-3 font-bold text-[25px] z-auto">${i.price}</span><br>
            <a href="#" class="font-bold text-[20px]">${i.name}</a>
            <p>Men Originals</p>
            </div></a>

        </div>`
    }).join('')

    return `
    <h1 class="absolute right-190 top-22 font-mono font-bold text-2xl">“SnkrBase: Where Drops Live.”</h1>


    <div class=" flex  my-15 mx-15 bg-cover  gap-1">

    ${data}

    </div>


    <h1 class="  mx-15  text-3xl font-mono">Shop by Icon</h1>
    <div class=" flex   gap-5 my-15 mx-15  ">


        <div class="w-300">
            <a href="../Pages/adidas.html">
                <span
                    class=" absolute my-170 mx-60 font-bold text-[40px] opacity-80 hover:opacity-100 font-mono">Handball
                    Spezial</span>
                <img src="../src/images/addi/Samba_OG_Shoes_Black_B75807_01_standard.avif" alt="Handball Spezial"></a>


        </div>
        <div class="w-300 ">
            <a href="./nike.html">
                <span class="absolute my-170 mx-63 font-bold text-[40px] opacity-80 hover:opacity-100 font-mono ">Nike
                    Dunk Low Retro</span>
                <img src="../src/images/NikeShoes/NIKE+DUNK+LOW+RETRO.jpg" alt="Nike Dunk Low Retro">
            </a>
        </div>


    </div>




    <div class=" flex w-450  gap-15 my-15 mx-15 text-20px">
       ${addi}
    </div>

    <div class=" flex w-450  gap-15 my-15 mx-15 text-20px">
        ${nik}
    </div>
    
    `

}document.getElementById('home').innerHTML = home()

// this is footer

function footer() {

    // const myaccount = [
    //     {name:"My Order" , href:"#"},
    //     {name:"My Information" , href:"#"},
    // ]
    // const account = myaccount.map((i)=> {
    //     return `<a href="#">My Order</a>`
    // } ).join('')


    return `
       <div class="flex text-white justify-between px-70 py-32 ">
        <div class="">
           <a href="../Pages/index.html"> <img src="../src/images/Logo/snkr.png" alt="SnkrBase " class="w-50 opacity-50"></a>
   <pre>      <address><a href="https://maps.app.goo.gl/3dn8E8UR9of1baro7">Karnal, Haryana (IN)</a></address>
    <a href="#">Call Us</a>  <a href="#">Mail Us</a></pre>
        </div>
        <div>
            <h2 class="text-2xl"><b>My Account</b></h2><br>
            <a href="#">My Order</a><br>
            <hr><br>
            <a href="#">My Information</a><br>
            <hr>

        </div>

        <div>
            <h2 class="text-2xl"><b>Customer Service</b></h2><br>
            <a href="#">Return</a><br>
            <hr>
            <br>
            <a href="#">Support</a><br>
            <hr><br>
            <a href="#">FAQ</a><br>
            <hr><br>
            <a href="#">Shipping</a><br>
            <hr>
        </div>

        <div>
            <h2 class="text-2xl"><b>Contact</b></h2><br>
            <a href="#">About Us</a><br>
            <hr><br>
            <a href="#">Contact</a><br>
            <hr>
        </div>
    </div>

    <hr class="text-white font-bold w-300 mx-85">

    <div class="h-10 w-300 text-white font-bold flex justify-between mx-85 my-3">

        <p>&copy; 2025SNKRBASE</p>

        <div class="flex gap-5">
            <a href="../Pages/Termsandcon.html">TERMS</a>
            <a href="#">PRIVACY</a>
        </div>

    </div>
    `
    
    }
    
    document.getElementById("footer").innerHTML = footer();


    // adidas

    function adi() {

    const adidas = [
        { name: "Handball Spezial Shoes", src: "../images/addi/Samba_OG_Shoes_Black_B75807_01_standard.avif", price: "₹3500", href: "../Pages/adibuy.html" },
        { name: "Handball Spezial Shoes", src: "../images/addi/Samba_OG_Shoes_White_IG1024_01_standard.avif", price: "₹3500" },
        { name: "Samba OG Shoes", src: "../images/addi/Samba_OG_Shoes_White_B75806_01_00_standard.avif", price: "₹3500" },
        { name: "Samba OG Shoes", src: "../images/addi/Samba_OG_Shoes_White_IH4881_01_standard.avif", price: "₹3500" },
        { name: "Handball Spezial Shoes", src: "../images/addi/Handball_Spezial_Shoes_Blue_BD7632_01_00_standard.avif", price: "₹3500" },
        { name: "Gazelle Shoes", src: "../images/addi/Gazelle_Shoes_Blue_BB5478_01_standard.avif", price: "₹3500" },
        { name: "Samba OG Shoes", src: "../images/addi/Samba_OG_Shoes_White_IH4881_01_standard.avif", price: "₹3500" },
        { name: "Handball Spezial Shoes", src: "../images/addi/Handball_Spezial_Shoes_Blue_BD7632_01_00_standard.avif", price: "₹3500" },
        { name: "Gazelle Shoes", src: "../images/addi/Gazelle_Shoes_Blue_BB5478_01_standard.avif", price: "₹3500" },
    ]

    const data = adidas.map((i) => {
        return `
    <div class=" pb-5 mb-10 shadow-md">
    <a href="${i.href}">
    <img class=" w-[350px]" src=${i.src} alt="">
    <div class="pl-2 pt-2">
      <span class="py-3 font-bold text-[25px]">${i.price}</span><br>
    <a href="#" class="font-bold text-[20px]">${i.name}</a>
    <p>Men Originals</p>

<button
class="text-xl w-32 h-12 rounded bg-emerald-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000 mt-3"
>
<span
class="absolute bg-emerald-600 w-36 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"
></span>
<span
class="absolute bg-emerald-800 w-36 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"
></span>
Buy
</button>
</div></a>
</div>`
    }).join("")



    return data
    
}

document.getElementById('adi').innerHTML = adi()



// nike

function nike() {

    const adidas = [
        { name: "Nike Dunk Low Retro", src: "../images/NikeShoes/NIKE+DUNK+LOW+RETRO.jpg", price: "₹3500" },
        { name: "Nike Dunk Low", src: "../images/NikeShoes/NIKE+DUNK+LOW+(GS).jpg", price: "₹3500" },
        { name: "Nike Dunk Low Retro", src: "../images/NikeShoes/NIKE+DUNK+LOW+SE.jpg", price: "₹3500" },
        { name: "Nike Dunk Low Retro", src: "../images/NikeShoes/NIKE+DUNK+LOW+RETRO.jpg", price: "₹3500" },
        { name: "Nike Dunk Low", src: "../images/NikeShoes/NIKE+DUNK+LOW+(GS).jpg", price: "₹3500" },
        { name: "Nike Dunk Low Retro", src: "../images/NikeShoes/NIKE+DUNK+LOW+SE.jpg", price: "₹3500" },
        { name: "Nike Dunk Low Retro", src: "../images/NikeShoes/NIKE+DUNK+LOW+RETRO.jpg", price: "₹3500" },
        { name: "Nike Dunk Low", src: "../images/NikeShoes/NIKE+DUNK+LOW+(GS).jpg", price: "₹3500" },
        { name: "Nike Dunk Low Retro", src: "../images/NikeShoes/NIKE+DUNK+LOW+SE.jpg", price: "₹3500" }
       
    ]

    const data = adidas.map((i) => {
        return `
    <div class=" pb-5 mb-10 shadow-md">
    <img class=" w-[350px]" src=${i.src} alt="">
    <div class="pl-2 pt-2">
      <span class="py-3 font-bold text-[25px]">${i.price}</span><br>
    <a href="#" class="font-bold text-[20px]">${i.name}</a>
    <p>Men Originals</p>

<button
class="text-xl w-32 h-12 rounded bg-emerald-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000 mt-3"
>
<span
class="absolute bg-emerald-600 w-36 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"
></span>
<span
class="absolute bg-emerald-800 w-36 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"
></span>
Buy
</button>
</div>
</div>`
    }).join("")



    return data
    
}

document.getElementById('nike').innerHTML = nike()
