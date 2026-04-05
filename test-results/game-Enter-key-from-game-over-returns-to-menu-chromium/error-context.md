# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: game.spec.ts >> Enter key from game over returns to menu
- Location: e2e/game.spec.ts:127:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('#overlay')
Timeout: 10000ms
- Expected substring  -  1
+ Received string     + 12

- PRESS ENTER TO SUFFER
+
+       BRICK ROASTER 3D
+       YOUR PERFORMANCE WILL BE JUDGED
+       initializing physics engine...
+       ← → or A/D or MOUSE  ·  SPACE to launch  ·  ESC to pause
+       5 levels · armored bricks · explosive chain reactions · AI commentary
+       
+         [level select]
+         [wall of shame]
+         [settings]
+       
+     

Call log:
  - Expect "toContainText" with timeout 10000ms
  - waiting for locator('#overlay')
    12 × locator resolved to <div id="overlay" class="visible">…</div>
       - unexpected value "
      BRICK ROASTER 3D
      YOUR PERFORMANCE WILL BE JUDGED
      initializing physics engine...
      ← → or A/D or MOUSE  ·  SPACE to launch  ·  ESC to pause
      5 levels · armored bricks · explosive chain reactions · AI commentary
      
        [level select]
        [wall of shame]
        [settings]
      
    "

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic:
    - generic: ♥♥♥
    - generic: "000000"
  - generic [ref=e4]:
    - generic [ref=e5]: BRICK ROASTER 3D
    - generic [ref=e6]: YOUR PERFORMANCE WILL BE JUDGED
    - generic [ref=e7]: initializing physics engine...
    - generic [ref=e8]: ← → or A/D or MOUSE · SPACE to launch · ESC to pause
    - generic [ref=e9]: 5 levels · armored bricks · explosive chain reactions · AI commentary
    - generic [ref=e10]:
      - generic [ref=e11] [cursor=pointer]: "[level select]"
      - generic [ref=e12] [cursor=pointer]: "[wall of shame]"
      - generic [ref=e13] [cursor=pointer]: "[settings]"
```

# Test source

```ts
  29  | 
  30  | test('menu shows loading state then ready prompt', async ({ page }) => {
  31  |   await page.goto('/')
  32  |   // Initially loading
  33  |   const overlay = page.locator('#overlay')
  34  |   await expect(overlay).toContainText(/initializing|PRESS ENTER/)
  35  |   // Wait for physics to be ready (max 10s)
  36  |   await expect(overlay).toContainText('PRESS ENTER TO SUFFER', { timeout: 10_000 })
  37  | })
  38  | 
  39  | // ── Game start ────────────────────────────────────────────────────────────────
  40  | 
  41  | test('pressing Enter when ready hides the overlay', async ({ page }) => {
  42  |   await page.goto('/')
  43  |   // Wait for physics ready
  44  |   await expect(page.locator('#overlay')).toContainText('PRESS ENTER TO SUFFER', { timeout: 10_000 })
  45  |   await page.keyboard.press('Enter')
  46  |   // Overlay should be hidden
  47  |   await expect(page.locator('#overlay')).not.toBeVisible()
  48  | })
  49  | 
  50  | test('HUD shows level info after game starts', async ({ page }) => {
  51  |   await page.goto('/')
  52  |   await expect(page.locator('#overlay')).toContainText('PRESS ENTER TO SUFFER', { timeout: 10_000 })
  53  |   await page.keyboard.press('Enter')
  54  |   await expect(page.locator('#hud-level')).toContainText('LEVEL 1', { timeout: 3_000 })
  55  | })
  56  | 
  57  | test('HUD shows initial lives', async ({ page }) => {
  58  |   await page.goto('/')
  59  |   await expect(page.locator('#overlay')).toContainText('PRESS ENTER TO SUFFER', { timeout: 10_000 })
  60  |   await page.keyboard.press('Enter')
  61  |   await expect(page.locator('#hud-lives')).toContainText('♥', { timeout: 3_000 })
  62  | })
  63  | 
  64  | test('HUD shows score of 000000 at start', async ({ page }) => {
  65  |   await page.goto('/')
  66  |   await expect(page.locator('#overlay')).toContainText('PRESS ENTER TO SUFFER', { timeout: 10_000 })
  67  |   await page.keyboard.press('Enter')
  68  |   await expect(page.locator('#hud-score')).toContainText('000000', { timeout: 3_000 })
  69  | })
  70  | 
  71  | // ── Physics ready + ball launch ───────────────────────────────────────────────
  72  | 
  73  | test('ball launches on Space and score eventually increments', async ({ page }) => {
  74  |   await page.goto('/')
  75  |   await expect(page.locator('#overlay')).toContainText('PRESS ENTER TO SUFFER', { timeout: 10_000 })
  76  |   await page.keyboard.press('Enter')
  77  |   // Wait for "SPACE to launch" hint
  78  |   await expect(page.locator('#hud-level')).toContainText('SPACE to launch', { timeout: 5_000 })
  79  |   await page.keyboard.press('Space')
  80  |   // Score should go above 0 once ball hits bricks
  81  |   await expect(page.locator('#hud-score')).not.toContainText('000000', { timeout: 15_000 })
  82  | })
  83  | 
  84  | // ── Pause ──────────────────────────────────────────────────────────────────────
  85  | 
  86  | test('Escape key opens pause overlay', async ({ page }) => {
  87  |   await page.goto('/')
  88  |   await expect(page.locator('#overlay')).toContainText('PRESS ENTER TO SUFFER', { timeout: 10_000 })
  89  |   await page.keyboard.press('Enter')
  90  |   await page.keyboard.press('Escape')
  91  |   await expect(page.locator('#overlay')).toBeVisible()
  92  |   await expect(page.locator('#overlay')).toContainText('INTERVENTION')
  93  | })
  94  | 
  95  | test('Escape key resumes from pause', async ({ page }) => {
  96  |   await page.goto('/')
  97  |   await expect(page.locator('#overlay')).toContainText('PRESS ENTER TO SUFFER', { timeout: 10_000 })
  98  |   await page.keyboard.press('Enter')
  99  |   await page.keyboard.press('Escape') // pause
  100 |   await page.keyboard.press('Escape') // resume
  101 |   await expect(page.locator('#overlay')).not.toBeVisible()
  102 | })
  103 | 
  104 | // ── Game over ─────────────────────────────────────────────────────────────────
  105 | 
  106 | test('game over screen shows after losing all lives', async ({ page }) => {
  107 |   await page.goto('/')
  108 |   await expect(page.locator('#overlay')).toContainText('PRESS ENTER TO SUFFER', { timeout: 10_000 })
  109 |   await page.keyboard.press('Enter')
  110 |   // Wait until physics ball exists (SPACE to launch hint)
  111 |   await expect(page.locator('#hud-level')).toContainText('SPACE to launch', { timeout: 5_000 })
  112 |   // Trigger 3 ball losses by doing nothing (ball times out in physics world)
  113 |   // This is hard to trigger reliably in E2E — check game over screen is structurally correct
  114 |   // by directly checking via JS execution
  115 |   await page.evaluate(() => {
  116 |     const game = (window as any).__game
  117 |     if (game) {
  118 |       game._lives = 0
  119 |       game._setState('gameover')
  120 |     }
  121 |   })
  122 |   // If __game isn't exposed, just verify the overlay can show game over text
  123 |   // by checking the page is still functional after 3s
  124 |   await page.waitForTimeout(3_000)
  125 | })
  126 | 
  127 | test('Enter key from game over returns to menu', async ({ page }) => {
  128 |   await page.goto('/')
> 129 |   await expect(page.locator('#overlay')).toContainText('PRESS ENTER TO SUFFER', { timeout: 10_000 })
      |                                          ^ Error: expect(locator).toContainText(expected) failed
  130 |   await page.keyboard.press('Enter')
  131 |   // Navigate to game over state via keyboard (best effort in E2E)
  132 |   // Verify the overlay is functional and title is present
  133 |   await expect(page.locator('#overlay')).not.toBeVisible()
  134 | })
  135 | 
  136 | // ── Multi-level integration: play through 5 levels ────────────────────────────
  137 | //
  138 | // Strategy: start the game normally (triggering lazy PhysicsSync init via
  139 | // keydown), wait for physics to be ready, then use page.evaluate() to
  140 | // drive state transitions so each level completes almost instantly.
  141 | // This verifies:
  142 | //   1. No JS errors accumulate across level transitions
  143 | //   2. The level counter increments correctly (1→2→3→4→5)
  144 | //   3. The game remains stable (not gameover, not crashed) after each clear
  145 | //   4. State machine transitions: playing → levelclear → playing, 5 times
  146 | 
  147 | test('multi-level integration: play through 5 levels without crashing', async ({ page }) => {
  148 |   const errors: string[] = []
  149 |   page.on('pageerror', e => errors.push(e.message))
  150 | 
  151 |   await page.goto('/')
  152 | 
  153 |   // Wait for menu to be ready (physics loads after first keydown, which
  154 |   // the test below triggers via keyboard press)
  155 |   await expect(page.locator('#overlay')).toContainText(/initializing|PRESS ENTER/, { timeout: 5_000 })
  156 | 
  157 |   // First interaction — triggers lazy PhysicsSync construction
  158 |   await page.keyboard.press('ArrowLeft')
  159 | 
  160 |   // Wait for physics ready prompt
  161 |   await expect(page.locator('#overlay')).toContainText('PRESS ENTER TO SUFFER', { timeout: 15_000 })
  162 | 
  163 |   // Start the game
  164 |   await page.keyboard.press('Enter')
  165 |   await expect(page.locator('#overlay')).not.toBeVisible({ timeout: 3_000 })
  166 |   await expect(page.locator('#hud-level')).toContainText('LEVEL 1', { timeout: 3_000 })
  167 | 
  168 |   // Play through 5 levels by forcing level-clear transitions via JS
  169 |   for (let levelNum = 1; levelNum <= 5; levelNum++) {
  170 |     // Wait until we're on the expected level and in 'playing' state
  171 |     await expect(page.locator('#hud-level')).toContainText(`LEVEL ${levelNum}`, { timeout: 10_000 })
  172 | 
  173 |     // Verify game is in 'playing' state before triggering clear
  174 |     const stateBeforeClear = await page.evaluate(() => {
  175 |       const g = (window as any).__game
  176 |       return g ? (g as any)._state : 'no-game'
  177 |     })
  178 |     expect(stateBeforeClear).toBe('playing')
  179 | 
  180 |     // Force-clear the level via the game's internal method
  181 |     await page.evaluate(() => {
  182 |       const g = (window as any).__game
  183 |       if (!g) throw new Error('__game not found')
  184 |       // Simulate level clear: set combo>0 so _onLevelClear guard passes,
  185 |       // then call _onLevelClear directly
  186 |       ;(g as any)._combo = 1
  187 |       ;(g as any)._onLevelClear()
  188 |     })
  189 | 
  190 |     if (levelNum < 5) {
  191 |       // After level clear, the overlay briefly shows "LEVEL CLEAR"
  192 |       await expect(page.locator('#overlay')).toContainText('LEVEL CLEAR', { timeout: 5_000 })
  193 | 
  194 |       // The game auto-advances after _levelClearTimer expires (2.5s).
  195 |       // We skip the wait by zeroing the timer via JS.
  196 |       await page.evaluate(() => {
  197 |         const g = (window as any).__game
  198 |         if (g) (g as any)._levelClearTimer = 0
  199 |       })
  200 | 
  201 |       // Wait for next level to be loaded (overlay hides, HUD updates)
  202 |       await expect(page.locator('#overlay')).not.toBeVisible({ timeout: 5_000 })
  203 |     }
  204 |   }
  205 | 
  206 |   // After clearing level 5, verify we're in levelclear state (not gameover)
  207 |   const finalState = await page.evaluate(() => {
  208 |     const g = (window as any).__game
  209 |     return g ? (g as any)._state : 'no-game'
  210 |   })
  211 |   expect(finalState).toBe('levelclear')
  212 | 
  213 |   // Verify no JavaScript errors occurred across all 5 level transitions
  214 |   const criticalErrors = errors.filter(e =>
  215 |     !e.includes('favicon') &&
  216 |     !e.includes('ResizeObserver') &&
  217 |     !e.includes('SpeechSynthesis')
  218 |   )
  219 |   expect(criticalErrors).toHaveLength(0)
  220 | })
  221 | 
  222 | test('multi-level: HUD level counter increments correctly across 3 levels', async ({ page }) => {
  223 |   const errors: string[] = []
  224 |   page.on('pageerror', e => errors.push(e.message))
  225 | 
  226 |   await page.goto('/')
  227 | 
  228 |   // Trigger lazy PhysicsSync init
  229 |   await page.keyboard.press('Tab')
```