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