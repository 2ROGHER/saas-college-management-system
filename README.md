# Users Microservice
## Design System 
```bash 
            [ Infraestructura / Interfaces Externas ]
┌──────────────────────────────────────────────────────────────┐
│                          CONTROLLER                          │
│                  (course.controller.ts)                      │
│               Recibe HTTP Request y responde                 │
└──────────────────────────────────────────────────────────────┘
                             │
                             ▼
        [ Capa de Aplicación / Application Layer (Service Layer) ]
┌──────────────────────────────────────────────────────────────┐
│                          SERVICE                             │
│                 (UserService: Orquesta casos de uso)         │
│  • Contiene lógica de aplicación (no de negocio)             │
│  • Convierte DTOs a Entities                                 │
└──────────────────────────────────────────────────────────────┘
                             │
                             ▼
            [ Capa de Dominio / Domain Layer (Modelo Rico) ]
┌──────────────────────────────────────────────────────────────┐
│                ENTITY / VALUE OBJECTS / DOMAIN SERVICE       │
│    (UserEntity, UserIdVO, PasswordVO, UserDomainService)     │
│  • Reglas de negocio puras                                   │
│  • No depende de frameworks (NestJS, Prisma, etc.)           │
│  • Ideal para testing y reutilización                        │
└──────────────────────────────────────────────────────────────┘
                             │
                             ▼
         [ Puertos de salida / Interfaces de persistencia ]
┌──────────────────────────────────────────────────────────────┐
│                    REPOSITORY INTERFACE                      │
│               (user.repository.interface.ts)                 │
│  • Define el contrato que debe cumplir cualquier adapter     │
└──────────────────────────────────────────────────────────────┘
                             │
                             ▼
     [ Adaptadores / Infraestructura / Implementaciones técnicas ]
┌──────────────────────────────────────────────────────────────┐
│                REPOSITORY IMPLEMENTATION                     │
│              (user.repository.ts usando Prisma)              │
│  • Implementa el contrato definido por la interfaz           │
│  • Mapea entre Entity ↔ DTO/ORM                              │
│  • Usa PrismaService u otros servicios externos              │
└──────────────────────────────────────────────────────────────┘

```
