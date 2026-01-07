"use client"

import { useEffect, useRef } from "react"

interface Blob {
  x: number
  y: number
  radius: number
  baseRadius: number
  phase: number
  speedX: number
  speedY: number
  breathSpeed: number
}

export function AnimatedSwirls() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }
    resize()
    window.addEventListener("resize", resize)

    // Fewer blobs for performance
    const blobs: Blob[] = []
    const numBlobs = 8

    for (let i = 0; i < numBlobs; i++) {
      blobs.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 120 + Math.random() * 60,
        baseRadius: 120 + Math.random() * 60,
        phase: Math.random() * Math.PI * 2,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        breathSpeed: 0.002 + Math.random() * 0.003,
      })
    }

    let time = 0
    let animationId: number

    // Precalculate squared radii for performance
    const getFieldValue = (px: number, py: number): number => {
      let sum = 0
      for (const blob of blobs) {
        const dx = px - blob.x
        const dy = py - blob.y
        const distSq = dx * dx + dy * dy
        if (distSq > 0) {
          sum += (blob.radius * blob.radius) / distSq
        }
      }
      return sum
    }

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const animate = () => {
      if (!ctx) return

      ctx.clearRect(0, 0, width, height)

      // Update blobs
      for (const blob of blobs) {
        blob.x += blob.speedX
        blob.y += blob.speedY

        if (blob.x < -150) blob.x = width + 150
        if (blob.x > width + 150) blob.x = -150
        if (blob.y < -150) blob.y = height + 150
        if (blob.y > height + 150) blob.y = -150

        blob.radius = blob.baseRadius + Math.sin(time * blob.breathSpeed + blob.phase) * 30
      }

      // Larger resolution = fewer calculations = faster
      const resolution = 8
      const thresholds = [0.5, 0.7, 1.0, 1.4, 1.9]

      for (let t = 0; t < thresholds.length; t++) {
        const threshold = thresholds[t]
        const opacity = 0.13 - t * 0.018

        ctx.beginPath()
        ctx.strokeStyle = `rgba(0, 43, 73, ${Math.max(opacity, 0.04)})`
        ctx.lineWidth = 1.5

        for (let x = 0; x < width; x += resolution) {
          for (let y = 0; y < height; y += resolution) {
            const v00 = getFieldValue(x, y)
            const v10 = getFieldValue(x + resolution, y)
            const v11 = getFieldValue(x + resolution, y + resolution)
            const v01 = getFieldValue(x, y + resolution)

            const state = (v00 > threshold ? 8 : 0) + (v10 > threshold ? 4 : 0) +
              (v11 > threshold ? 2 : 0) + (v01 > threshold ? 1 : 0)

            if (state === 0 || state === 15) continue // Skip empty/full cells

            const getEdge = (v1: number, v2: number, p1: number, p2: number) => {
              const interpT = (threshold - v1) / (v2 - v1)
              return lerp(p1, p2, Math.max(0, Math.min(1, interpT)))
            }

            const top = { x: getEdge(v00, v10, x, x + resolution), y: y }
            const right = { x: x + resolution, y: getEdge(v10, v11, y, y + resolution) }
            const bottom = { x: getEdge(v01, v11, x, x + resolution), y: y + resolution }
            const left = { x: x, y: getEdge(v00, v01, y, y + resolution) }

            switch (state) {
              case 1: case 14: ctx.moveTo(left.x, left.y); ctx.lineTo(bottom.x, bottom.y); break
              case 2: case 13: ctx.moveTo(bottom.x, bottom.y); ctx.lineTo(right.x, right.y); break
              case 3: case 12: ctx.moveTo(left.x, left.y); ctx.lineTo(right.x, right.y); break
              case 4: case 11: ctx.moveTo(top.x, top.y); ctx.lineTo(right.x, right.y); break
              case 5: ctx.moveTo(top.x, top.y); ctx.lineTo(left.x, left.y); ctx.moveTo(bottom.x, bottom.y); ctx.lineTo(right.x, right.y); break
              case 6: case 9: ctx.moveTo(top.x, top.y); ctx.lineTo(bottom.x, bottom.y); break
              case 7: case 8: ctx.moveTo(top.x, top.y); ctx.lineTo(left.x, left.y); break
              case 10: ctx.moveTo(top.x, top.y); ctx.lineTo(right.x, right.y); ctx.moveTo(left.x, left.y); ctx.lineTo(bottom.x, bottom.y); break
            }
          }
        }
        ctx.stroke()
      }

      time++
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
    />
  )
}
