class temperature{
    constructor(doc) {
        this.doc=doc;
        if(this.doc< -237){
            console.log(loi);
        }
        }
        getF(doc){
        let F=this.doc*1.8 +32;
        return F;
        }
        getKenvin(doc){
        let K;
        return K=this.doc+273.15;
        }
}

let congcong= new temperature(25);
alert(congcong.getF())

let congngao = new temperature(25);
alert(congngao.getKenvin())

