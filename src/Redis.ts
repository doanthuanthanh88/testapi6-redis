import IORedis from 'ioredis'
import chalk from 'chalk'
import { Tag } from 'testapi6/dist/components/Tag'

/**
 * Redis command
 */
export class RedisCommand {
  /** Query title */
  title?: string
  /** Command */
  command: string
  /** Command aggruments */
  args?: any[]
  /** 
   * Set data after execute done
   * 
   * ```yaml
   * string: set result to this var
   * object: set customize result to each properties in this var
   * ```
   */
  var: string | { [key: string]: any }
}

/**
 * Execute redis command
 */
export class Redis extends Tag {
  /** 
   * Redis connection string 
   * 
   * Example: redis://user:pass@host
   * */
  connection: string
  /**
   * Redis configuration
   * 
   * Ref: https://www.npmjs.com/package/ioredis
   */
  config = {} as {
    /** 
     * Redis port
     * 
     * Default: 6379
     */
    port: number
    /** Redis host */
    host: string
    /** Redis password */
    password: string
    /** Redis db */
    db: number
  }
  /** Commands */
  commands: (RedisCommand | string)[]
  /** 
   * Set data after request done
   * 
   * ```yaml
   * string: set response data to this var
   * object: set customize response to each properties in this var
   * ```
   */
  var: string | { [key: string]: any }

  _db: IORedis.Redis

  constructor(attrs: Redis) {
    super(attrs)
    if (!this.config) this.config = {} as any
    if (!this.commands) this.commands = []
  }

  async beforeExec() {
    await super.beforeExec()
    this._db = new IORedis(typeof this.connection === 'string' ? this.connection : {
      ...this.config
    } as any)
  }

  async exec() {
    if (!this.slient && this.title) this.context.group(chalk.green('%s'), this.title)
    try {
      for (const q of this.commands) {
        let query: RedisCommand
        if (typeof q === 'string') {
          const [c, ...pr] = q.trim().split(' ')
          query = {
            command: c,
            args: pr
          } as RedisCommand
        } else {
          query = q as RedisCommand
          if (!query.args) query.args = []
        }
        query.command = query.command.toUpperCase()
        if (!this.slient && query.title) this.context.group('RedisCommand: %s', query.title)
        const begin = Date.now()
        const rs = await this._db.send_command(query.command, ...query.args)
        const res = {
          time: Date.now() - begin,
          result: !rs ? rs : typeof rs === 'object' ? JSON.parse(JSON.stringify(rs)) : rs
        }
        if (!this.slient) {
          this.context.log(`${chalk.green('%s')} ${chalk.gray('- %dms')}`, [query.command, ...query.args].join(' '), res.time)
          if (res.result) {
            this.context.Utils.json(res.result).split('\n').map(e => this.context.log(chalk.yellow(e)))
          }
        }
        if (query.var) this.setVar(query.var, res.result)
        if (!this.slient && query.title) this.context.groupEnd()
      }
    } finally {
      if (!this.slient && this.title) this.context.groupEnd()
    }
  }

  async dispose() {
    await this._db.disconnect()
  }
}