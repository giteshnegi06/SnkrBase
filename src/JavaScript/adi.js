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