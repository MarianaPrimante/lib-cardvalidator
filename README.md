# Validação de cartões v.1.0.0

**Esta biblioteca se destina à validação de cartões de crédito para uso em aplicações web.**
Na versão atual é capaz de validar um número de cartão de crédito digitado, conferindo se estão sendo digitados apenas números(sem letras), com 16 dígitos e dentro da regra da criação de números de cartão de crédito.

## Como instalar:

```shell

$  npm install lib-cardvalidatormp

```

## Como utilizar:

```node

> const test = require("lib-cardvalidator");
> test.cardValidator("5155901285384518")
> // returns "true"
> test.cardValidator("123456789123456a")
> // returns "false"

```

#### versão 2.0.0 (sem previsão)
- reconhecer a bandeira do cartão digitado;