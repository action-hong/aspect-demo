const ratios = [
  {
    value: 4/3,
    clazz: 'v-4-3'
  },
  {
    value: 1334/750,
    clazz: ''
  }
]

export const calRatio = (docE) => {
  let w = docE.clientWidth
  let h = docE.clientHeight
  // h 会有可能为0吗 ?
  const r = w / h
  // 找到最接近的比例, 返回对应的class
  // 3个数的排序, 无需太多要求
  return ratios.sort((a, b) => {
    return Math.abs(a.value - r) - Math.abs(b.value - r)
  })[0].clazz
}