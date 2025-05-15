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
