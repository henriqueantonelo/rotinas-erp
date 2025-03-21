# Rotinas ERP

Este projeto é uma extensão simples desenvolvida para facilitar o acesso rápido a rotinas e comandos específicos no ERP, permitindo copiar rapidamente o texto de uma rotina e utilizá-lo conforme necessário.

## Funcionalidades
- Carregar um arquivo `.txt` contendo rotinas e comandos.
- Exibir as rotinas em forma de lista de botões.
- Copiar o texto da rotina clicando no botão correspondente.
- Remover o arquivo carregado para carregar um novo.
- Mensagem visual de confirmação ao copiar o texto.

## Tecnologias Utilizadas
- HTML
- CSS
- JavaScript

## Como Usar
1. Clone o repositório.
2. Acesse o diretório do projeto.
3. Carregue a extensão no Google Chrome:
   - Acesse `chrome://extensions/`
   - Ative o modo desenvolvedor.
   - Clique em "Carregar sem compactação" e selecione o diretório do projeto.
4. Clique no ícone da extensão para abrir a interface.
5. Escolha um arquivo `.txt` com as rotinas e clique em "Escolher Arquivo".
6. Clique no botão da rotina para copiá-la para a área de transferência.

## Dica
Você pode configurar um atalho de teclado para abrir rapidamente a extensão:

Acesse chrome://extensions/shortcuts no Google Chrome.

Localize a extensão "Rotinas ERP".

Clique na área de atalho e defina a combinação desejada.

## Formato do Arquivo de Texto
O arquivo deve conter as rotinas no seguinte formato:
```
{
name: Nome da Rotina;
body: Descrição detalhada da rotina;
}
```
Exemplo:
```
{
name: Exemplo 1;
body: Corpo do exemplo 1
}

{
name: Exemplo 2;
body: Corpo do exemplo 2
}
```

