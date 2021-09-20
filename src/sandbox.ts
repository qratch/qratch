import { createCanvasAppOptions } from './Qratch/createCanvasAppOptions'
import { QratchApp } from './Qratch/QratchApp'
import { Size } from './Size/Size'
import { Vec2 } from './Vec2/Vec2'

class Game extends QratchApp {
  // 自機のスピード
  readonly playerSpeed = 5

  // 自機のサイズ
  readonly playerSize = 32

  // 弾のスピード
  readonly bulletSpeed = 5

  // 弾のサイズ
  readonly bulletSize = new Size(8, 16)

  // 敵が出現できる最大数
  readonly maxEnemies = 5

  // 敵のサイズ
  readonly enemySize = new Size(32, 32)

  // 敵のスピード
  readonly enemySpeed = 1

  // ショットできる間隔
  readonly shotDuration = 30

  // 自機の位置
  playerPos!: Vec2

  // スコア
  score!: number

  // 弾の位置の配列
  bullets!: Vec2[]

  // 敵の位置の配列
  enemies!: Vec2[]

  // ショットできるか
  canShot!: boolean

  // ショットカウンタ
  shotCounter!: number

  // ゲームオーバーフラグ
  isGameOver!: boolean

  // 毎フレーム呼び出される
  frame() {
    // 更新
    this.update()

    // 描画
    this.draw()
  }

  // 初期化時に呼ばれる
  init() {
    this.playerPos = new Vec2(this.renderer.center().x, 400)
    this.score = 0
    this.bullets = []
    this.enemies = []
    this.canShot = false
    this.shotCounter = 0
    this.isGameOver = false
  }

  update() {
    const { keyboard, renderer } = this

    if (this.isGameOver) {
      if (keyboard.down('Space')) {
        this.init()
      }

      return
    }

    // 自機の移動
    if (keyboard.pressed('ArrowLeft')) {
      this.playerPos.x -= this.playerSpeed
    }
    if (keyboard.pressed('ArrowRight')) {
      this.playerPos.x += this.playerSpeed
    }
    if (keyboard.pressed('ArrowUp')) {
      this.playerPos.y -= this.playerSpeed
    }
    if (keyboard.pressed('ArrowDown')) {
      this.playerPos.y += this.playerSpeed
    }

    // 自機が画面外に出ないようにする
    this.playerPos.x = Math.max(
      Math.min(this.playerPos.x, this.renderer.width),
      0
    )
    this.playerPos.y = Math.max(
      Math.min(this.playerPos.y, this.renderer.height),
      0
    )

    // ショットできるかをフレームから計算
    this.shotCounter++
    this.shotCounter = this.shotCounter % this.shotDuration

    if (this.shotCounter === 0) {
      this.canShot = true
    }

    // スペースが押されたら弾を発射
    if (keyboard.pressed('Space') && this.canShot) {
      this.bullets.push(new Vec2(this.playerPos))
      this.shotCounter = 0
      this.canShot = false
    }

    // 敵が5匹より少なければ敵を出現
    if (this.enemies.length < this.maxEnemies) {
      this.enemies.push(
        new Vec2(Math.random() * renderer.width, -this.enemySize.height)
      )
    }

    this.enemies = this.enemies.filter((enemy) => {
      const enemyLeft = enemy.x - this.enemySize.width / 2
      const enemyRight = enemy.x + this.enemySize.width / 2
      const enemyTop = enemy.y - this.enemySize.height / 2
      const enemyBottom = enemy.y + this.enemySize.height / 2

      // 敵に弾が触れているかを表すフラグ
      let hit = false

      this.bullets = this.bullets.filter((bullet) => {
        const bulletLeft = bullet.x - this.bulletSize.width / 2
        const bulletRight = bullet.x + this.bulletSize.width / 2
        const bulletTop = bullet.y - this.bulletSize.height / 2
        const bulletBottom = bullet.y + this.bulletSize.height / 2

        // 敵と弾の当たり判定
        if (
          enemyLeft <= bulletRight &&
          bulletLeft <= enemyRight &&
          enemyTop <= bulletBottom &&
          bulletTop <= enemyBottom
        ) {
          // 弾が的に触れてたら弾を消す
          hit = true

          return false
        }

        return true
      })

      if (hit) {
        // 敵と弾が触れてたらスコアを増やして、敵を消す
        this.score++

        return false
      }

      if (enemy.y > renderer.height + this.enemySize.height) {
        this.isGameOver = true
      } else {
        // 敵を移動
        enemy.y += this.enemySpeed
      }

      return true
    })

    this.bullets = this.bullets.filter((bullet) => {
      // 弾の移動
      bullet.y -= this.bulletSpeed

      // 弾が画面上部にあたったら削除
      return bullet.y > -this.bulletSize.height
    })
  }

  draw() {
    const { drawer, renderer } = this

    // 画面を黒く塗りつぶす
    drawer.fillRect(0, 0, renderer.width, renderer.height, 'black')

    // 弾を描画する
    this.bullets.forEach((bullet) => {
      drawer.fillRect(
        bullet.x - this.bulletSize.width / 2,
        bullet.y - this.bulletSize.height,
        this.bulletSize,
        'cyan'
      )
    })

    // 敵を描画する
    this.enemies.forEach((enemy) => {
      drawer.fillRect(
        enemy.x - this.enemySize.width / 2,
        enemy.y - this.enemySize.height,
        this.enemySize,
        'red'
      )
    })

    // 自機を描画する
    drawer.fillPolygon(
      [
        this.playerPos.getAdd(0, -this.playerSize),
        this.playerPos.getAdd(-this.playerSize / 2, 0),
        this.playerPos.getAdd(this.playerSize / 2, 0),
      ],
      'blue'
    )

    if (this.isGameOver) {
      // ゲームオーバー画面を描画する
      drawer.fillText(
        'GameOver',
        this.renderer.center().x,
        this.renderer.center().x - 74,
        'red',
        void 0,
        { size: '64px', font: 'sans-serif' },
        'center'
      )
      drawer.fillText(
        `score ${this.score}`,
        this.renderer.center(),
        'yellow',
        void 0,
        { size: '48px', font: 'sans-serif' },
        'center'
      )
      drawer.fillText(
        'press space key to restart',
        this.renderer.center().x,
        this.renderer.center().y + 64,
        'white',
        void 0,
        { size: '24px', font: 'sans-serif' },
        'center'
      )
    }
  }
}

const canvas = document.querySelector<HTMLCanvasElement>('#canvas')

if (!canvas) {
  throw new Error('could not find canvas')
}

const game = new Game(createCanvasAppOptions(canvas))
game.start()
;((window as unknown) as any).game = game
