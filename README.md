# BANKAI

Caixa pessoal em português: entradas, gastos, cartões, fatura e limite.

## Rodar

O app abre no preview. Conta local com e-mail e senha, ou Google / X.

## Tema

Os cinco temas (Obsidian, Paper, Aurora, Forest, Sand) estão em `src/styles.css`.
A escolha fica no perfil e também em `localStorage` (`bankai-theme`).

## Comprovante e extrato

O leitor de texto fica em `src/lib/finance/parser.ts`.
Ele entende “10 x de R$”, ignora “Parc 01/1” e separa linhas de extrato, pulando pagamentos negativos.
A foto passa pelo OCR e só o formulário limpo aparece na tela.
