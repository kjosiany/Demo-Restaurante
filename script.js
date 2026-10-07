const routeBtn=document.getElementById('routeBtn');
if(routeBtn){routeBtn.addEventListener('click',()=>{
  const destination=encodeURIComponent('Rua da Vila, 120, Uberlândia - MG');
  if(navigator.geolocation){
    routeBtn.textContent='Abrindo rota...';
    navigator.geolocation.getCurrentPosition(pos=>{
      const origin=`${pos.coords.latitude},${pos.coords.longitude}`;
      window.open(`https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}`,'_blank');
      routeBtn.innerHTML='Estou por perto — abrir rota <b>↗</b>';
    },()=>{
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${destination}`,'_blank');
      routeBtn.innerHTML='Estou por perto — abrir rota <b>↗</b>';
    });
  }else window.open(`https://www.google.com/maps/dir/?api=1&destination=${destination}`,'_blank');
});
