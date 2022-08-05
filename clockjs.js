       
   setInterval(() => {
    const a = new Date();
        htime = a.getHours();
        mtime = a.getMinutes();
        stime = a.getSeconds();
        hrotation = 30*htime + mtime/2;
        mrotation=6*mtime;
        srotation=6*stime;

        hour.style.transform=`rotateZ(${hrotation}deg)`;
        minutes.style.transform=`rotateZ(${mrotation}deg)`;
        seconds.style.transform=`rotateZ(${srotation}deg)`;
    }, 1000)
    const text = document.getElementsByClassName(".analog");

    const str = text.textContent;
    const split = str.split("");

    for(let i = 0; i< split.length;i++)
    {
        text.innerHTML += "<span>" + split[i] +"</span>";
    }
