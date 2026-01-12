import Phaser from 'phaser'
import { GameConfig } from '../../config'

export class Enemy extends Phaser.Physics.Arcade.Sprite {
  private initialX: number
  private movementRange: number = 150

  constructor(scene: Phaser.Scene, x: number, y: number, type: 'walker' | 'flyer') {
    super(scene, x, y, `enemy-${type}`)

    this.initialX = x

    scene.add.existing(this)
    scene.physics.add.existing(this)

    this.setCollideWorldBounds(true)
    this.setBounce(0)

    if (type === 'walker') {
      this.setGravityY(GameConfig.gravity)
    }

    // Create visual
    this.createVisual(type)

    // Set initial velocity (moving left)
    this.setVelocityX(-GameConfig.enemySpeed)
  }

  private createVisual(type: 'walker' | 'flyer'): void {
    const color = type === 'walker' ? 0x800080 : 0xFF00FF
    const graphics = this.scene.make.graphics({ x: 0, y: 0 }, false)

    graphics.fillStyle(color, 1)
    graphics.fillRect(0, 0, 32, 32)

    // Add eyes
    graphics.fillStyle(0xFFFFFF, 1)
    graphics.fillCircle(8, 10, 4)
    graphics.fillCircle(24, 10, 4)
    graphics.fillStyle(0xFF0000, 1)
    graphics.fillCircle(8, 10, 2)
    graphics.fillCircle(24, 10, 2)

    graphics.generateTexture(`enemy-${type}`, 32, 32)
    graphics.destroy()

    this.setTexture(`enemy-${type}`)
  }

  update(): void {
    // Simple back-and-forth movement
    const distanceFromStart = Math.abs(this.x - this.initialX)

    if (distanceFromStart > this.movementRange) {
      this.setVelocityX(-this.body!.velocity.x)
    }
  }
}
