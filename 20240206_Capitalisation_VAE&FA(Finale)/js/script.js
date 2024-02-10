document.body.onload=function(){
    nbr=2;
    p=0;
    container=document.getElementById("container");
    g=document.getElementById("g");
    d=document.getElementById("d");
    container.style.width=(1000*nbr)+"px";
    for(i=1;i<=nbr;i++){
        div=document.createElement("div");
        div.className="photo";
        div.style.backgroundImage="url('image/tes"+i+".jpg')";
        container.appendChild(div);
    }
    afficherMasquer();
}    
g.onclick= function(){
    if(
        p>-nbr+1
    )
        p--;
    container.style.transform="translate("+p*1000+"px)";
    container.style.transition="all 0.5s ease";
    afficherMasquer();
}
d.onclick= function(){
    if(
        p<0
    )
        p++;
    container.style.transform="translate("+p*1000+"px)";
    container.style.transition="all 0.5s ease";
    afficherMasquer();
} 
function afficherMasquer(){
    if (p==-nbr+1)
        g.style.visibility="hidden";
    else
        g.style.visibility="visible";
    if (p==0)
        d.style.visibility="hidden";
    else
        d.style.visibility="visible";
}


document.addEventListener("DOMContentLoaded", function() {
    const paragraphs = document.querySelectorAll('.paragraph');

    function showParagraphs(){
        paragraphs.forEach((paragraph, index) =>{
            setTimeout(() =>{
                paragraph.style.opacity = '1';
                paragraph.style.transform = 'translateX(0)';
            }, index * 500);
        });
        setTimeout(() => {
            paragraphs.forEach((paragraph) =>{
                paragraph.style.opacity = '0';
                paragraph.style.transform = 'translateX(-20px)';
            });
            setTimeout(showParagraphs, 1000);
        }, paragraphs.length * 2000);
    }

    showParagraphs();
});