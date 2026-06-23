# Hive

## Overview

Hive is a microservices-based multi-vendor e-commerce platform designed to support independent sellers while maintaining scalability and reliability.

---

## Problem Statement

Traditional e-commerce platforms struggle with:

- Seller isolation
- Scalability
- Deployment complexity

---

## Architecture

![Architecture](/projects/hive/architecture.png)

---

## Services

- API Gateway
- Auth Service
- Product Service
- Order Service
- Notification Service

---

## Event Flow

```ts
User
 ↓
API Gateway
 ↓
Order Service
 ↓
Kafka
 ↓
Notification Service
```

---

## Challenges

### Distributed Transactions

Used event-driven communication via Kafka.

### Caching

Redis used for product catalog and session management.

---

## Screenshots

![Dashboard](/projects/hive/dashboard.png)

---

## Demo

Video available below.

---

## Learnings

- Event Driven Architecture
- Kafka
- Redis
- Microservices
- Distributed Systems
