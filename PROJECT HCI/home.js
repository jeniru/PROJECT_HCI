var search=document.getElementById('search');

search.addEventListener('focus',(event)=>{
  document.getElementById('search-wrapper').style.border="1px solid #1dbf73";
});

search.addEventListener('focusout',(event)=>{
    document.getElementById('search-wrapper').style.border="1px solid rgba(0, 0, 0, 0.276)";
});


