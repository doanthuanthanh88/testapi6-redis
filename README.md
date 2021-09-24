# testapi6-redis
Execute redis command

# Features
- Exec redis command

> Read [document details](./docs/modules.md)

# How to use
### Installation
```javascript
// install via npm
npm install -g testapi6-redis

// install via yarn
yarn global add testapi6-redis
```

# Configuration

Read [ioredis](https://www.npmjs.com/package/ioredis)

### Use in yaml
```yaml
- testapi6-redis.Redis:
    connection: redis://localhost:6379
    commands: 
      - get users
      - title: Get users
        command: 
          - get
          - users
        var: rs
```