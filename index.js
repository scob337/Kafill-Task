

// NavBar Varibles *********
let ToggleButton = document.querySelector('.toggle-nav'),
NavList = document.querySelector('nav .nav-container ul'),
ActiveLinks = NavList.querySelectorAll('li'),
ProfileList = document.querySelector('.droplist-profile'),
ImgButton = document.querySelector('.profile .img .TogglProfile');
// NavBar Varibles *********


//Toggle NavBar *****************
ToggleButton.onclick = ()=>{
    NavList.classList.toggle('active')
} 
ActiveLinks.forEach(el =>{
    el.onclick=()=>{
        ActiveLinks.forEach(el =>{
            el.classList.remove('active')
        })
        el.classList.add('active')

    }

})
ImgButton.onclick = ()=>{
    ProfileList.classList.toggle('active')
}
//Toggle NavBar ********************

