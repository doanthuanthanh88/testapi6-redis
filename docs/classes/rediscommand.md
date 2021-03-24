[testapi6-redis](../README.md) / [Exports](../modules.md) / RedisCommand

# Class: RedisCommand

Redis command

## Table of contents

### Constructors

- [constructor](rediscommand.md#constructor)

### Properties

- [args](rediscommand.md#args)
- [command](rediscommand.md#command)
- [title](rediscommand.md#title)
- [var](rediscommand.md#var)

## Constructors

### constructor

\+ **new RedisCommand**(): [*RedisCommand*](rediscommand.md)

**Returns:** [*RedisCommand*](rediscommand.md)

## Properties

### args

• `Optional` **args**: *any*[]

Command aggruments

___

### command

• **command**: *string*

Command

___

### title

• `Optional` **title**: *string*

Query title

___

### var

• **var**: *string* \| { [key: string]: *any*;  }

Set data after execute done

```yaml
string: set result to this var
object: set customize result to each properties in this var
```
