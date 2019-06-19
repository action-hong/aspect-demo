let arr = [
  {
    w: 4,
    h: 3
  },
  {
    w: 667,
    h: 375
  },
  {
    w: 2,
    h: 1
  }
].map(v => {
  return {
    ...v,
    type: `v-${v.w}-${v.h}`
  }
})

arr = arr.sort((v1, v2) => v1.w/v1.h - v2.w/v2.h)

function cal(v1, v2) {
  return `${v1.w * v2.h + v2.w * v1.h}/${2 * v1.h * v2.h}`
}

arr.forEach((val, idx) => {
  if (idx === 0) {
    val.media = `@media (max-aspect-ratio: ${cal(val, arr[idx + 1])})`
  } else if (idx === arr.length - 1) {
    val.media = `@media (min-aspect-ratio: ${cal(val, arr[idx - 1])})`
  } else {
    val.media = `@media (max-aspect-ratio: ${cal(val, arr[idx + 1])}) and (min-aspect-ratio: ${cal(val, arr[idx - 1])})`
  }
})

arr