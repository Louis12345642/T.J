let theme=localStorage.getItem('theme')
if(theme==null){
  setTheme('light')
}
else{
  setTheme(theme)
}
console.log("ready to go")
themeDots=document.getElementsByClassName('theme-dot');
for(let i=0; i<themeDots.length;i++){
  themeDots[i].addEventListener('click',function(){
    let mode=this.dataset.mode
    setTheme(mode);
    console.log('btn clicked',mode);
  })
}

function setTheme(mode){
  if(mode=='light'){
    document.getElementById('theme-style').href="./mubarak_kual/style.css";
  }
  if(mode=='blue'){
    document.getElementById('theme-style').href="./mubarak_kual/blue.css";
  }
  
  if(mode=='green'){
    document.getElementById('theme-style').href="./mubarak_kual/green.css";
  }
  if(mode=='purple'){
    document.getElementById('theme-style').href="./mubarak_kual/purple.css";
  }
  localStorage.setItem('theme',mode)
}
