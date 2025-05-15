function home(){

     const video = [
        {href:"#" , src:"https://res.cloudinary.com/dh52la71p/video/upload/v1747292822/It039s_worth_it._Air_Jordan_4_Retro_SE_039Wet_Cement039_2024_Video_in_2025_Air_jordan_4_retro_Air_jordans_Jordans_tphn2w.mp4"},
        {href:"#" , src:"https://res.cloudinary.com/dh52la71p/video/upload/v1747292823/ADIDAS_ORIGINALS_SAMBA_OG_-_AFEWSTORE_Video_Schuhe_Bewegte_bilder_dvee1m.mp4"},
        {href:"#" , src:"https://res.cloudinary.com/dh52la71p/video/upload/v1747292822/Nike_Dunk_Nike_shoes_men_Soccer_cleats_nike_Nike_udjmjk.mp4"}
     ]

     const data = video.map((i)=>{
    
        return `<a href=${i.href}><video muted loop autoplay
                src="${i.src}"></video></a>`
    }).join('')


    const adidas = [
        {href:"../src/adibuy.html" , src:"https://res.cloudinary.com/dh52la71p/image/upload/v1747293786/Samba_OG_Shoes_Black_B75807_01_standard_vjjofb.avif" , name:"Handball Spezial Shoes" , price:"₹3000"},
        {href:"#" , src:"https://res.cloudinary.com/dh52la71p/image/upload/v1747293786/Samba_OG_Shoes_White_B75806_01_00_standard_xv0bns.avif" , name:"Samba OG Shoes" , price:"₹2800"},
        {href:"#" , src:"https://res.cloudinary.com/dh52la71p/image/upload/v1747293786/Samba_OG_Shoes_White_IH4881_01_standard_qdtorx.avif" , name:"Samba OG Shoes" , price:"₹2750"}

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
            <a href="../src/adidas.html">
                <span
                    class=" absolute my-170 mx-60 font-bold text-[40px] opacity-80 hover:opacity-100 font-mono">Handball
                    Spezial</span>
                <img src="https://res.cloudinary.com/dh52la71p/image/upload/v1747293785/Handball_Spezial_Shoes_Black_DB3021_01_00_standard_duycjy.avif" alt="Handball Spezial"></a>


        </div>
        <div class="w-300 ">
            <a href="../src/nike.html">
                <span class="absolute my-170 mx-63 font-bold text-[40px] opacity-80 hover:opacity-100 font-mono ">Nike
                    Dunk Low Retro</span>
                <img src="https://res.cloudinary.com/dh52la71p/image/upload/v1747294280/NIKE_DUNK_LOW_RETRO_uyu7ld.jpg" alt="Nike Dunk Low Retro">
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