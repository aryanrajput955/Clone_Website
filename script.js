var crsr=document.querySelector("#cursor")
var blur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    setTimeout(()=>{
        crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
    },110)
})
document.addEventListener("mousemove",function(dets){
    setTimeout(()=>{
        blur.style.left=dets.x-250+"px"
        blur.style.top=dets.y-250+"px"
    },250   )
})


gsap.to("#nav",{
    duration:0.5,
    height:"100px",
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1
}
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -30%",
        end:"top -80%",
        scrub:1   
    }
})