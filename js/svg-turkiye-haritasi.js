/*! SVG Türkiye Haritası | MIT Lisans | dnomak.com */

function gorunenIller(){
    const g = document.getElementsByTagName('g');
    for (i = 1; i <= 83; i++) {
        document.getElementById(g[i].id+ "-path");
        const kayitsayisi = g[i].getAttribute('data-kayitsayisi');
        var color = "";
        if (kayitsayisi ==0){
            color = "#D7E5CF";
        }else{
            color ='#081800';
        }
        document.getElementById(g[i].id+ "-path").style.fill=color;
    }
};


function svgturkiyeharitasi() {
  


  const element = document.querySelector('#svg-turkiye-haritasi');
  const info = document.querySelector('.il-isimleri');

  const g = document.getElementsByTagName('g');
  for (i = 1; i <= 83; i++) {
    document.getElementById(g[i].id+ "-path");
    const kayitsayisi = g[i].getAttribute('data-kayitsayisi');
        var color = "";
        if (kayitsayisi <=10){
          color = "#D7E5CF";
        }else if (kayitsayisi<=20){
          color = '#91BE79';
        }else if (kayitsayisi<=30){
          color = '#579C32';
        }else if (kayitsayisi<=40){
          color = '#2E7B05';
        }else if (kayitsayisi<=50){
          color = '#184600';
        }else{
          color ='#081800';
        }
    document.getElementById(g[i].id+ "-path").style.fill=color;
  }






  


  element.addEventListener(
    'mouseover',
    function (event) {
      if (event.target.tagName === 'path')  {
        info.innerHTML = [
          '<div>',
          event.target.parentNode.getAttribute('data-iladi')+" : "+event.target.parentNode.getAttribute('data-kayitsayisi'),
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
        const id = parent.getAttribute('data-plakakodu');
        window.location.href = (
          '#'
          + id
          + '-'
          + parent.getAttribute('data-plakakodu')
        );
      }
    }
  );
}
