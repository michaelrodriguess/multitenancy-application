# Study Project: NestJS Application with Multitenancy Structure

This project is a study application developed with NestJS, with the aim of exploring and demonstrating the concept of multitenancy. Using Docker to facilitate the configuration and execution of the environment, this application illustrates how to manage multiple clients (tenants) in isolation within a single environment.

## Objective

The aim of this project is to study and understand how to implement a multitenancy architecture in a NestJS application. Multitenancy is an approach that allows a single instance of software to serve multiple clients, or tenants, ensuring that each one has an isolated and secure data environment.

## Multitenancy structure

### Definition

Multitenancy is an architectural model where a single instance of software serves several clients (tenants). Each tenant is isolated, with its own data and configuration, while sharing the same application and infrastructure resources.

### Implementation Models

There are several models for implementing multitenancy, including:

1. **Shared Database, Shared Schema**: All tenants share the same database and tables, with data segregated by tenant ID columns.
2. **Shared Database, Dedicated Schema**: All tenants share the same database, but have dedicated tables.
3. **Dedicated Database: Each tenant has its own database, offering the greatest level of isolation.

### Model Used in the Project

In this project, we used the Shared Database, Shared Schema model. This approach simplifies data management while providing isolation and security for each tenant's data.

## Authentication

To manage user authentication, this project uses concepts such as NestJS Guards and Interceptors. Authentication is implemented using JSON Web Tokens (JWT), ensuring that only authenticated users can access specific resources. Guards check the validity of the token and Interceptors help identify users from the token provided.
