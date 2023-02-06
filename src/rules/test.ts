import type { Rule } from 'unocss'

export const containerParent: Rule[] = [
  [/^@container(?:\/(\w+))?(?:-(normal))?$/, ([, l, v]) => {
    return {
      'container-type': v ?? 'inline-size',
      'container-name': l,
    }
  }],
]
