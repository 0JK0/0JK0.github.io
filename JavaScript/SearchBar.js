document.getElementById("search-form").addEventListener("submit", function(e) {

    e.preventDefault(); 
    const query = document.getElementById("search-bar").value.trim();

    if (query) {

      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      
    }


  });
  