function CheckedColorForHref() {
    let li = document.querySelectorAll("a")
    for (let i = 0; i < li.length; i++) {

        let http = li[i].matches( 'a[href *="http://"]')
        let tps = li[i].matches( 'a[href *="ftp://"]')
        
        if (http || tps){
            li[i].classList.add("external-red");
        }
        
    }
}