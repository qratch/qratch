import { createCanvasAppOptions } from './Qratch/createCanvasAppOptions'
import { QratchApp } from './Qratch/QratchApp'
import { Size } from './Size/Size'
import { Vec2 } from './Vec2/Vec2'

class Game extends QratchApp {
  // 自機の位置
  pos = new Vec2(this.renderer.center())

  // 弾の位置の配列
  bullets: Vec2[] = []

  // 敵の位置の配列
  enemies: Vec2[] = []

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
  readonly enemySize = new Size(16, 16)

  // 敵のスピード
  readonly enemySpeed = 1

  // スコア
  score = 0

  // ショットできる間隔
  readonly shotDuration = 30

  // ショットできるか
  canShot = false

  // 毎フレーム呼び出される
  frame() {
    // 更新
    this.update()

    // 描画
    this.draw()
  }

  update() {
    const { keyboard, renderer, ticker } = this

    // 自機の移動
    if (keyboard.pressed('ArrowLeft')) {
      this.pos.x -= this.playerSpeed
    }
    if (keyboard.pressed('ArrowRight')) {
      this.pos.x += this.playerSpeed
    }
    if (keyboard.pressed('ArrowUp')) {
      this.pos.y -= this.playerSpeed
    }
    if (keyboard.pressed('ArrowDown')) {
      this.pos.y += this.playerSpeed
    }

    // ショットできるかをフレームから計算
    this.canShot = ticker.frames() % this.shotDuration === 0

    // スペースが押されたら弾を発射
    if (keyboard.pressed('Space') && this.canShot) {
      this.bullets.push(new Vec2(this.pos))
    }

    // 敵が5匹より少なければ敵を出現
    if (this.enemies.length < this.maxEnemies) {
      this.enemies.push(
        new Vec2(Math.random() * renderer.width, -this.enemySize.height)
      )
    }

    this.bullets = this.bullets.filter((bullet) => {
      // 弾の移動
      bullet.y -= this.bulletSpeed

      // 弾が画面上部にあたったら削除
      return bullet.y > -this.bulletSize.height
    })

    this.enemies = this.enemies.filter((enemy) => {
      // 敵を移動
      enemy.y += this.enemySpeed

      const enemyLeft = enemy.x - this.enemySize.width / 2
      const enemyRight = enemy.x + this.enemySize.width / 2
      const enemyTop = enemy.y - this.enemySize.height / 2
      const enemyBottom = enemy.y + this.enemySize.height / 2

      let hit = false

      // 敵と弾の当たり判定
      this.bullets.filter((bullet) => {
        const bulletLeft = bullet.x - this.bulletSize.width / 2
        const bulletRight = bullet.x + this.bulletSize.width / 2
        const bulletTop = bullet.y - this.bulletSize.height / 2
        const bulletBottom = bullet.y + this.bulletSize.height / 2

        if (
          enemyLeft <= bulletRight &&
          bulletLeft <= enemyRight &&
          enemyTop <= bulletBottom &&
          bulletTop <= enemyBottom
        ) {
          hit = true

          return false
        }

        return true
      })

      return !hit
    })
  }

  draw() {
    const { drawer } = this

    // 画面を黒く塗りつぶす
    drawer.fillRect(0, 0, this.renderer.width, this.renderer.height, 'black')

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
    // drawer.fillArc(this.pos, 16, 0, Math.PI * 2, 'white')
    drawer.fillPolygon(
      [
        this.pos.getAdd(0, -this.playerSize),
        this.pos.getAdd(-this.playerSize / 2, 0),
        this.pos.getAdd(this.playerSize / 2, 0),
      ],
      'white'
    )
  }
}

const canvas = document.querySelector<HTMLCanvasElement>('#canvas')

if (!canvas) {
  throw new Error('could not find canvas')
}

const game = new Game(createCanvasAppOptions(canvas))
game.start()
;((window as unknown) as any).game = game
