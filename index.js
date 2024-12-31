class selection{
    constructor(){
        this.allImages = document.querySelectorAll('img');
        // console.log(images);
        this.outer = document.querySelector('.outter_model');
        this.inner = document.querySelector('.inner_model');
        this.icons = document.querySelector('.icon')
        this.addevent();
    }
    addevent(){
        this.allImages.forEach(function(img){
            img.addEventListener('click',function(e){
                this.imsection(e);
            }.bind(this))
        },this);
        this.outer.addEventListener('click',function(){
            this.closediv();
        }.bind(this));
        this.icons.addEventListener('click',function(){
            
            this.closediv()
        }.bind (this));
        
    }

    imsection(e){
        let img1 = e.target;
        let Maincard = img1.closest('.card');
        let cardImg = img1.src;
        // console.log(card);
        let text = Maincard.querySelector('h1').innerText;
        let description= Maincard.querySelector('.description').innerText;
        this.outerdiv(cardImg, text, description);
    }
    outerdiv(img1,text, description ){
        let html= `
        <img src="${img1}"/>
        <h1>${text}</h1>
        <p>${description}</p>
        `
    
        this.inner.innerHTML=html;
        this.outer.classList.add('open');
    }
    closediv(){
        this.outer.classList.remove('open');
    }
    }

    const modal = new selection();


