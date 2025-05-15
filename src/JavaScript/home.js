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