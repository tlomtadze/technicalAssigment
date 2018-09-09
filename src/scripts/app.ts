import "../styles/styles.scss";


let d:any = document;
let w:any = window;

let _ = (selector:any)=>{
    return d.querySelectorAll(selector);
}



class mainMenu{
    
    items = _('.main-menu > .menu > li');
    itemsL = this.items.length;
    subItems = _('.main-menu > .subMenu > li');
    subItemsL = this.subItems.length;
    
    constructor(){
        let _this = this;
        
        for( let i:number = 0; i < this.itemsL; i++ ){
            this.items[i].addEventListener('click',function(e:any){
                e.preventDefault();
                _this.clicks(this);
            });
        }
        for( let i:number = 0; i < this.subItemsL; i++ ){
            this.subItems[i].addEventListener('click',function(e:any){
                e.preventDefault();
                _this.subClicks(this);
            });
        }
    }

    clicks = (element:any)=>{
        for( let i:number = 0; i < this.itemsL; i++ ){
            this.items[i].classList.remove('active');
        }
        element.classList.add('active');
    }

    subClicks = (element:any)=>{
        for( let i:number = 0; i < this.subItemsL; i++ ){
            this.subItems[i].classList.remove('active');
        }
        element.classList.add('active');
    }
}
let menu:any = new mainMenu();


let editableLng:boolean = false;
let accLng:any = _('.account-lang')[0];
_('#account-lang-edit')[0].addEventListener('click',function(e:any){
    if(!editableLng){
        accLng.contentEditable = true;
        accLng.focus();
        accLng.classList.add('editable');
        this.innerText = "save";
        this.classList.remove('edit');
        this.classList.add('save');
    }else{
        accLng.contentEditable = false;
        accLng.classList.remove('editable');
        this.innerText = "edit";
        this.classList.remove('save');
        this.classList.add('edit');
    }
    editableLng = !editableLng;
});

let editableID:boolean = false;
let userID:any = _('.userId')[0];
_('#userIdEdit')[0].addEventListener('click',function(e:any){
    if(!editableID){
        userID.contentEditable = true;
        userID.focus();
        userID.classList.add('editable');
        this.innerText = "save";
        this.classList.remove('edit');
        this.classList.add('save');
    }else{
        userID.contentEditable = false;
        userID.classList.remove('editable');
        this.innerText = "edit";
        this.classList.remove('save');
        this.classList.add('edit');
    }
    editableID = !editableID;
});