[testapi6-redis](../README.md) / [Exports](../modules.md) / Redis

# Class: Redis

Execute redis command

## Hierarchy

* *Tag*

  ↳ **Redis**

## Table of contents

### Constructors

- [constructor](redis.md#constructor)

### Properties

- [commands](redis.md#commands)
- [config](redis.md#config)
- [connection](redis.md#connection)
- [var](redis.md#var)

## Constructors

### constructor

\+ **new Redis**(`attrs`: [*Redis*](redis.md)): [*Redis*](redis.md)

#### Parameters:

Name | Type |
:------ | :------ |
`attrs` | [*Redis*](redis.md) |

**Returns:** [*Redis*](redis.md)

Overrides: void

## Properties

### commands

• **commands**: (*string* \| [*RedisCommand*](rediscommand.md))[]

Commands

___

### config

• **config**: *object*

Redis configuration

Ref: https://www.npmjs.com/package/ioredis

#### Type declaration:

Name | Type | Description |
:------ | :------ | :------ |
`db` | *number* | Redis db   |
`host` | *string* | Redis host   |
`password` | *string* | Redis password   |
`port` | *number* | Redis port  Default: 6379    |

___

### connection

• **connection**: *string*

Redis connection string

Example: redis://user:pass@host

___

### var

• **var**: *string* \| { [key: string]: *any*;  }

Set data after request done

```yaml
string: set response data to this var
object: set customize response to each properties in this var
```
