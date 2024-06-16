# Projeto de Estudo: Aplicação NestJS com Estrutura Multitenancy

Este projeto é uma aplicação de estudo desenvolvida com NestJS, com o objetivo de explorar e demonstrar o conceito de multitenancy (multi-inquilino). Utilizando Docker para facilitar a configuração e a execução do ambiente, esta aplicação ilustra como gerenciar múltiplos clientes (tenants) de forma isolada dentro de um único ambiente.

## Objetivo

O objetivo deste projeto é estudar e entender como implementar uma arquitetura multitenancy em uma aplicação NestJS. Multitenancy é uma abordagem que permite que uma única instância de software sirva múltiplos clientes, ou tenants, garantindo que cada um tenha um ambiente de dados isolado e seguro.

## Estrutura Multitenancy

### Definição

Multitenancy é um modelo de arquitetura onde uma única instância de software atende a vários clientes (tenants). Cada tenant é isolado, com seus próprios dados e configuração, enquanto compartilha a mesma aplicação e recursos de infraestrutura.

### Modelos de Implementação

Existem diversos modelos para implementar multitenancy, entre eles:

1. **Banco de Dados Compartilhado, Esquema Compartilhado**: Todos os tenants compartilham o mesmo banco de dados e tabelas, com dados segregados por colunas de identificação de tenant.
2. **Banco de Dados Compartilhado, Esquema Dedicado**: Todos os tenants compartilham o mesmo banco de dados, mas possuem tabelas dedicadas.
3. **Banco de Dados Dedicado**: Cada tenant possui seu próprio banco de dados, oferecendo o maior nível de isolamento.

### Modelo Utilizado no Projeto

Neste projeto, utilizamos o modelo de **Banco de Dados Compartilhado, Esquema Compartilhado**. Essa abordagem simplifica a gestão de dados ao mesmo tempo que proporciona isolamento e segurança para os dados de cada tenant.
