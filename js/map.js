function map() {
    const element = document.querySelector('#map');
    const info = document.querySelector('.country');
    

    const a = document.getElementsByTagName('path');
    for(i=1;i<=(document.getElementsByTagName('path').length-1);i++){
        
        var color="";
       // console.log(a[i].id+"<br>");
        if(a[i].getAttribute('data-fly-info')==0){
            color = "white";
        }else{
            color = "yellow";
        }
        a[i].style.fill=color;
        
    }

    element.addEventListener(
      'mouseover',
      function (event) {
        if (event.target.tagName === 'path')  {
          info.innerHTML = [
            '<div>',
            event.target.getAttribute('title'),
            '</div>'
          ].join('');
        }
      }
    );
  
    element.addEventListener(
      'mousemove',
      function (event) {
        info.style.top = event.pageY + 25 + 'px';
        info.style.left = event.pageX + 'px';
      }
    );
  
    element.addEventListener(
      'mouseout',
      function (event) {
        info.innerHTML = '';
      }
    );
  
    element.addEventListener(
      'click',
      function (event) {
        if (event.target.tagName === 'path') {
          const parent = event.target.parentNode;
          const id = parent.getAttribute('id');
  
          
  
          window.location.href = (
            '#'
            + id
            + '-'
            + parent.getAttribute('id')
          );
        }
      }
    );
  }