const shoppingList = [

    { 'Produto': 'coentro', 'Quantidade': 1, 'valorUnico': 0.99 },
    { 'Produto': 'cebolinha', 'Quantidade': 1, 'valorUnico': 0.99 },
    { 'Produto': 'banana-prata', 'Quantidade': 1, 'valorUnico': 4.73 },
    { 'Produto': 'beterraba', 'Quantidade': 1, 'valorUnico': 0.93 },
    { 'Produto': 'batata-inglesa', 'Quantidade': 1, 'valorUnico': 2.32 },
    { 'Produto': 'limao', 'Quantidade': 1, 'valorUnico': 0.90 },
    { 'Produto': 'cenoura', 'Quantidade': 1, 'valorUnico': 0.81 },
    { 'Produto': 'kiwi', 'Quantidade': 1, 'valorUnico': 7.24 },
    { 'Produto': 'carne-moida(1,1kg)', 'Quantidade': 1, 'valorUnico': 24.54 },
    { 'Produto': 'mucilon(230g)', 'Quantidade': 1, 'valorUnico': 4.99 },
    { 'Produto': 'leite-parmalat', 'Quantidade': 1, 'valorUnico': 15.99 },
    { 'Produto': 'ling-perdigao', 'Quantidade': 1, 'valorUnico': 21.99 },
    { 'Produto': 'cafe-pilao', 'Quantidade': 2, 'valorUnico': 4.29 },
    { 'Produto': 'cath-arisco', 'Quantidade': 1, 'valorUnico': 4.49 },
    { 'Produto': 'maion-arisco', 'Quantidade': 1, 'valorUnico': 2.59 },
    { 'Produto': 'marg-qualy', 'Quantidade': 1, 'valorUnico': 3.49 },
    { 'Produto': 'alho-sem-sal', 'Quantidade': 1, 'valorUnico': 4.99 },
    { 'Produto': 'molho-pim', 'Quantidade': 1, 'valorUnico': 2.69 },
    { 'Produto': 'dueto-predilecta', 'Quantidade': 2, 'valorUnico': 2.69 },
    { 'Produto': 'creme-leite', 'Quantidade': 2, 'valorUnico': 1.89 },
    { 'Produto': 'aveira-quak', 'Quantidade': 1, 'valorUnico': 3.39 },
    { 'Produto': 'acucar-demerado', 'Quantidade': 1, 'valorUnico': 3.49 },
    { 'Produto': 'biscoito', 'Quantidade': 4, 'valorUnico': 2.79 },
    { 'Produto': 'flocao', 'Quantidade': 1, 'valorUnico': 1.49 },
    { 'Produto': 'file-peito', 'Quantidade': 2, 'valorUnico': 10.99 },
    { 'Produto': 'uva-ianes', 'Quantidade': 1, 'valorUnico': 8.99 },
    { 'Produto': 'arroz-camil', 'Quantidade': 4, 'valorUnico': 2.69 },
    { 'Produto': 'iog-nest', 'Quantidade': 1, 'valorUnico': 9.99 },
    { 'Produto': 'cookies-baud', 'Quantidade': 1, 'valorUnico': 5.29 },
    { 'Produto': 'biscoito-romana', 'Quantidade': 4, 'valorUnico': 3.59 },
    { 'Produto': 'coca-zero-1.5l', 'Quantidade': 1, 'valorUnico': 5.99 },
    { 'Produto': 'sol-ultra-ama', 'Quantidade': 1, 'valorUnico': 11.99 },
    { 'Produto': 'alicate', 'Quantidade': 1, 'valorUnico': 9.99 },
    { 'Produto': 'des-suave', 'Quantidade': 2, 'valorUnico': 9.49 },
    { 'Produto': 'esm-risq', 'Quantidade': 3, 'valorUnico': 4.99 },
    { 'Produto': 'sabao-urca', 'Quantidade': 1, 'valorUnico': 12.49 },
    { 'Produto': 'acetona-francy', 'Quantidade': 1, 'valorUnico': 3.49 },
    { 'Produto': 'agua-sanit', 'Quantidade': 1, 'valorUnico': 3.99 },
    { 'Produto': 'sab-liq', 'Quantidade': 1, 'valorUnico': 7.89 },
    { 'Produto': 'amac-ype-2l', 'Quantidade': 1, 'valorUnico': 8.49 },
    { 'Produto': 'agua-indaia-5l', 'Quantidade': 1, 'valorUnico': 6.99 },
    { 'Produto': 'odor-glade', 'Quantidade': 1, 'valorUnico': 29.99 },
    { 'Produto': 'pinho-limao-1l', 'Quantidade': 1, 'valorUnico': 10.49 },
    { 'Produto': 'deterg-limpa', 'Quantidade': 2, 'valorUnico': 1.39 },
    { 'Produto': 'limp-ype', 'Quantidade': 1, 'valorUnico': 3.99 },
    { 'Produto': 'raid-protec', 'Quantidade': 1, 'valorUnico': 11.69 },
    { 'Produto': 'fio-dental', 'Quantidade': 1, 'valorUnico': 4.99 },
    { 'Produto': 'escorredor', 'Quantidade': 1, 'valorUnico': 7.49 },
    { 'Produto': 'pap-higien', 'Quantidade': 1, 'valorUnico': 6.69 },
    { 'Produto': 'desc-po', 'Quantidade': 1, 'valorUnico': 4.99 },
    { 'Produto': 'apa-barbear', 'Quantidade': 1, 'valorUnico': 6.99 },
    { 'Produto': 'creme-colgat', 'Quantidade': 3, 'valorUnico': 3.49 },
    { 'Produto': 'oleo-coco', 'Quantidade': 1, 'valorUnico': 16.89 },
    { 'Produto': 'agua-oxi', 'Quantidade': 1, 'valorUnico': 2.19 },
    { 'Produto': 'leite-rosa', 'Quantidade': 1, 'valorUnico': 3.99 },
    { 'Produto': 'sab-aseptol', 'Quantidade': 1, 'valorUnico': 8.99 },
    { 'Produto': 'algod-floc', 'Quantidade': 1, 'valorUnico': 1.99 },
    { 'Produto': 'didr-paixao', 'Quantidade': 1, 'valorUnico': 8.59 },
  ]
module.exports = shoppingList

  


  
