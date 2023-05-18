document.querySelectorAll("a[ap-nav]").forEach(link => {
    link.onclick = function (e) {
        e.preventDefault();
        const conteudo = document.getElementById("conteudo");
        fetch(link.getAttribute("ap-nav"))
            .then(resp => resp.text())
            .then(html => conteudo.innerHTML = html)
    }
});


document.onload(function () {
    const conteudo = document.getElementById("conteudo");
    fetch(document.getElementById("nav-link-inicio").getAttribute("ap-nav"))
        .then(resp => resp.text())
        .then(html => conteudo.innerHTML = html)
})