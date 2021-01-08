import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { Exclude } from 'class-transformer'
@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  public id: number

  @Exclude({ toPlainOnly: true }) // 输出屏蔽密码
  @Column({
    nullable: true,
    length: 200,
    comment: '用户登录密码',
    type: 'varchar',
  })
  public password: string

  @Column({ length: 32, comment: '用户登录账号' })
  public account: string

  @Column({ nullable: true, length: 32, comment: '用户显示昵称' })
  public nickname: string

  @Column({ nullable: true, length: 20, comment: '用户手机号码' })
  public phoneNum: string

  @Column({ length: 200, comment: '邮箱地址' })
  public email: string

  @Column({ default: true, comment: '所属状态是否有效， 使用中， 禁用' })
  public status: boolean

  @Column({ length: 200, comment: '头像地址' })
  public avatar: string

  @CreateDateColumn({ type: 'timestamp', name: 'create_date', comment: '创建时间' })
  createDate: Date

  @UpdateDateColumn({ type: 'timestamp', name: 'update_date', comment: '更新时间' })
  updateDate: Date
}
