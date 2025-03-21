document.addEventListener('DOMContentLoaded', function() {
    const itemList = document.getElementById("itemList");
    const fileInput = document.getElementById("fileInput");
    const fileButton = document.getElementById("fileButton");

    function copiarTexto(texto, li) {
        navigator.clipboard.writeText(texto).then(() => {
            const originalText = li.textContent;
            li.textContent = "Copiado!";
            li.classList.add("copiado");

            setTimeout(() => {
                li.textContent = originalText;
                li.classList.remove("copiado");
            }, 1000);
        }).catch(() => {
            const originalText = li.textContent;
            li.textContent = "❌ Erro!";
            li.classList.add("copiado");

            setTimeout(() => {
                li.textContent = originalText;
                li.classList.remove("copiado");
            }, 1000);
        });
    }

    function criarLista(itens) {
        itemList.innerHTML = "";
        itens.forEach((item) => {
            const li = document.createElement("li");
            li.textContent = item.name;
            li.addEventListener("click", () => copiarTexto(item.body, li));
            itemList.appendChild(li);
        });
    }

    function salvarItens(itens) {
        localStorage.setItem("itensCopiar", JSON.stringify(itens));
    }

    function carregarItens() {
        return JSON.parse(localStorage.getItem("itensCopiar")) || [];
    }

    function removerItens() {
        localStorage.removeItem("itensCopiar");
        itemList.innerHTML = "";
        criarBotaoEscolherArquivo();
    }

    function criarBotaoEscolherArquivo() {
        fileButton.textContent = "Escolher Arquivo";
        fileButton.onclick = () => fileInput.click();
    }

    function criarBotaoRemoverArquivo() {
        fileButton.textContent = "Remover Arquivo";
        fileButton.onclick = removerItens;
    }

    fileInput.addEventListener("change", function(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function(e) {
            const content = e.target.result;
            const regex = /\{\s*name:\s*([^;]+);\s*body:\s*([^}]+)\}/g;
            const items = [];
            let match;
            while ((match = regex.exec(content)) !== null) {
                items.push({ name: match[1].trim(), body: match[2].trim() });
            }
            salvarItens(items);
            criarLista(items);
            criarBotaoRemoverArquivo();
        };
        reader.readAsText(file);
    });

    const itensSalvos = carregarItens();
    if (itensSalvos.length > 0) {
        criarLista(itensSalvos);
        criarBotaoRemoverArquivo();
    } else {
        criarBotaoEscolherArquivo();
    }
});
