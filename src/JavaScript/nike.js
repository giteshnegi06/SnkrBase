function nike() {

    const adidas = [
        { name: "Nike Dunk Low Retro", src: "https://res.cloudinary.com/dh52la71p/image/upload/v1747294280/NIKE_DUNK_LOW_RETRO_uyu7ld.jpg", price: "₹3500" },
        { name: "Nike Dunk Low", src: "https://res.cloudinary.com/dh52la71p/image/upload/v1747294278/NIKE_DUNK_LOW_GS_2_r4wwfq.jpg", price: "₹3500" },
        { name: "Nike Dunk Low Retro", src: "https://res.cloudinary.com/dh52la71p/image/upload/v1747294280/NIKE_DUNK_LOW_RETRO_1_szjolh.jpg", price: "₹3500" },
        { name: "Nike Dunk Low Retro", src: "https://res.cloudinary.com/dh52la71p/image/upload/v1747294279/NIKE_DUNK_LOW_GS_omp2jj.jpg", price: "₹3500" },
        { name: "Nike Dunk Low", src: "https://res.cloudinary.com/dh52la71p/image/upload/v1747294278/NIKE_DUNK_LOW_GS_1_xehfyb.jpg", price: "₹3500" },
        { name: "Nike Dunk Low Retro", src: "https://res.cloudinary.com/dh52la71p/image/upload/v1747294281/NIKE_DUNK_LOW_SE_iayojo.jpg", price: "₹3500" },
        { name: "Nike Dunk Low Retro", src: "https://res.cloudinary.com/dh52la71p/image/upload/v1747294280/NIKE_DUNK_LOW_RETRO_uyu7ld.jpg", price: "₹3500" },
        { name: "Nike Dunk Low", src: "https://res.cloudinary.com/dh52la71p/image/upload/v1747294278/NIKE_DUNK_LOW_GS_2_r4wwfq.jpg", price: "₹3500" },
        { name: "Nike Dunk Low Retro", src: "https://res.cloudinary.com/dh52la71p/image/upload/v1747294279/NIKE_DUNK_LOW_GS_omp2jj.jpg", price: "₹3500" }
       
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