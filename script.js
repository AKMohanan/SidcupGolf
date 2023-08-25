var crsr=document.querySelector("#cursor")
var blur=document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x-10+"px"
    crsr.style.top=dets.y-10+"px"
    blur.style.left=dets.x-100+"px"
    blur.style.top=dets.y-100+"px"
})
gsap.to("#nav",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top: -20%",
        end:"top: 30%",
        scrub:1,
    }
})
gsap.to("#main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top: -70%",
        end:"top: 100%",
        scrub:1,
    }
})
