class selection{
    constructor(){
        this.images = document.querySelectorAll('img');
        this.outer  =  document.querySelector('.outter_model');
        this.innerdiv =document.querySelector('.inner_model')
        this.cross = document.querySelector('.icon');
        this.eventsec();
    }
    eventsec(){
        this.images.forEach(function(img){
            img.addEventListener('click',function(e){
                this.outersec(e)
            }.bind(this));
        },this);
        this.outer.addEventListener('click',function(){
            this.close()
        }.bind(this));
        this.cross.addEventListener('click', function(){
            this.close();
        }.bind(this));
    }
    outersec(e){
        let img1 = e.target;
        // src not working their 
        let srcimg =img1.src;
        let card = img1.closest('.card')
        let text= card.querySelector('h1').innerText;
        let description= card.querySelector('.description').innerText;
        this.inndiv(srcimg, text, description);
    }
    inndiv(srcimg, text, description){
        let html =`
        <img src = "${srcimg}"/>
        <h1>${text}</h1>
        <p>${description}</p>
        `
        this.innerdiv.innerHTML = html;
        this.outer.classList.add('open');
    }
    close(){
        this.outer.classList.remove('open')
    }
}
let model= new selection();